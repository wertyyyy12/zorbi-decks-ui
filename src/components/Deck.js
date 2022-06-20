import { CollectionIcon, XCircleIcon, ClockIcon, GlobeAltIcon, RefreshIcon } from '@heroicons/react/solid';
import {useState} from 'react' 
import { Flipped, Flipper } from 'react-flip-toolkit'

export default function Deck({name, allDecksContext, type}) {

  const hoverStyle = {
    backgroundColor: "#3b82f6",
    height: "56px",
  }

  const regularStyle = {
    backgroundColor: "#f9fafb",
    height: "16px",
  }

  const [dropTargetStyle, setdropTargetStyle] = useState(regularStyle) //state will be hex colors



  const {allDecks, setAllDecks} = allDecksContext
  const onDelete = () => {
    setAllDecks({  
      "decks": allDecks.decks.filter((deck) => deck !== name),
      "trash": [...allDecks.trash, name],
    })
  }

  const onRestore = () => {
    setAllDecks({  
      "decks": [...allDecks.decks, name],
      "trash": allDecks.trash.filter((deck) => deck !== name),
    })
  }

  const onDeckMove = (e) => {
    setdropTargetStyle(regularStyle)
    if (e.dataTransfer.getData('text') !== e.target.getAttribute('name')) {
      e.preventDefault();
    }
    const arraymove = (arr, item, targetItem) => {
      // moves item after targetItem
      // arraymove([1, 2, 3, 4], 1, 3) == [2, 3, 1, 4]
      if (!(arr.includes(item) && arr.includes(targetItem))) {
        throw new Error("One of the items in arraymove are not in the given array");
      }
    
      if (item === targetItem) {
        throw new Error("Both items passed to arraymove are same!");
      }
      let copy = arr.slice();
      copy = copy.filter((element) => element !== item);
      copy.splice(copy.indexOf(targetItem)+1, 0, item);
      return copy;
    }

    setAllDecks({  
      "decks": arraymove(allDecks.decks, e.dataTransfer.getData('text'), e.target.getAttribute('name')),
      "trash": allDecks.trash,
    })



  }
  
  let additionalClasses, DeckButtons, dropTarget;
  if (type === "regular") {
    additionalClasses = "bg-violet-600 hover:bg-violet-700 hover:cursor-pointer"
    
    DeckButtons = 
    <>
      <button className="flex flex-row text-violet-100 hover:text-white hover:bg-violet-800 p-1 rounded-lg mr-5 hover:shadow-md"> <ClockIcon className="h-8 w-8 mr-1" />Load </button>
      <button className="flex flex-row text-violet-100 hover:text-white hover:bg-violet-800 p-1 rounded-lg mr-5 hover:shadow-md" onClick={onDelete}><XCircleIcon className="h-8 w-8 mr-1"/>Delete </button>
      <button className="flex flex-row text-violet-100 hover:text-white hover:bg-violet-800 p-1 rounded-lg hover:shadow-md"><GlobeAltIcon  className="h-8 w-8 mr-1" alt="" /> Review</button>
    </>

    dropTarget = <div style={{...dropTargetStyle, transition: "height 100ms"}} className={`flex h-4 bg-gray-50`} onDragOver={(e) => {setdropTargetStyle(hoverStyle); e.preventDefault()}} onDragLeave={() => {setdropTargetStyle(regularStyle)}} onDrop={((e) => onDeckMove(e))} name={name}></div>  

    
  }
  if (type === "trash") {
    additionalClasses = "bg-gray-600"
    DeckButtons = 
    <button className="flex flex-row text-violet-100 hover:text-white hover:bg-gray-800 p-1 rounded-lg mr-5 hover:shadow-md" onClick={onRestore}><RefreshIcon className="h-8 w-8 mr-1" />Restore </button>
  }

  return (
    <>
      <Flipped flipId={name}>
        <div>
          <div name={name} draggable={true} onDragStart={(event) => {event.dataTransfer.setData("text", event.target.getAttribute('name')); event.dataTransfer.effectAllowed = "move";}} className={`grid grid-rows-1 grid-flow-col justify-items-start space-x-16 text-2xl text-white font-bold w-full p-2 shadow-md ${additionalClasses}`}>
            <div className="flex"><CollectionIcon className="h-10 w-10 mr-2 ml-6 shrink-0" /><span>{name}</span></div> 
            <div className="flex justify-self-end">
              {DeckButtons}
            </div>
          </div>

          </div>
        </Flipped>
        {dropTarget}

      </>
  );
}