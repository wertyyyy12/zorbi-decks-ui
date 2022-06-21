import { CollectionIcon, XCircleIcon, ClockIcon, GlobeAltIcon, RefreshIcon } from '@heroicons/react/solid';
import {useState} from 'react' 
import { Flipped } from 'react-flip-toolkit'
import { Link } from 'react-router-dom'

export default function Deck({name, allDecksContext, type}) {

  const hoverStyle = {
    backgroundColor: "#9ca3af",
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
    additionalClasses = "bg-teal-600 hover:bg-teal-700 hover:cursor-pointer"
    
    DeckButtons = 
    <>
      <button className="flex flex-row text-violet-100 hover:text-white hover:bg-teal-800 p-1 rounded-lg mr-5 hover:shadow-md"> <ClockIcon className="h-8 w-8 mr-1" />Load </button>
      <button className="flex flex-row text-violet-100 hover:text-white hover:bg-teal-800 p-1 rounded-lg mr-5 hover:shadow-md" onClick={onDelete}><XCircleIcon className="h-8 w-8 mr-1"/>Delete </button>
      <Link to="/review"><button className="flex flex-row text-violet-100 hover:text-white hover:bg-teal-800 p-1 rounded-lg hover:shadow-md"><GlobeAltIcon  className="h-8 w-8 mr-1" alt="" /> Review</button></Link>
    </>

    dropTarget = <div style={{...dropTargetStyle, transition: "height 100ms"}} className={`flex h-4 bg-gray-50 w-[95%] m-auto rounded-lg`} onDragOver={(e) => {setdropTargetStyle(hoverStyle); e.preventDefault()}} onDragLeave={() => {setdropTargetStyle(regularStyle)}} onDrop={((e) => onDeckMove(e))} name={name}></div>  

    
  }
  if (type === "trash") {
    additionalClasses = "bg-gray-600 mb-4"
    DeckButtons = 
    <button className="flex flex-row text-violet-100 hover:text-white hover:bg-gray-800 p-1 rounded-lg mr-5 hover:shadow-md" onClick={onRestore}><RefreshIcon className="h-8 w-8 mr-1" />Restore </button>
  }

  return (
    <>
      <Flipped flipId={name}>
          <div name={name} draggable={true} onDragStart={(event) => {event.dataTransfer.setData("text", event.target.getAttribute('name')); event.dataTransfer.effectAllowed = "move";}} className={`grid grid-rows-1 grid-flow-col justify-items-start space-x-16 text-2xl text-white font-bold w-[95%] rounded-lg m-auto p-2 ${additionalClasses}`}>
            <div className="flex"><CollectionIcon className="h-10 w-10 mr-2 ml-6 shrink-0" /><span>{name}</span></div> 
            <div className="flex justify-self-end">
              {DeckButtons}
            </div>
          </div>
        </Flipped>
        {dropTarget}

      </>
  );
}