import { CollectionIcon, XCircleIcon, ClockIcon, GlobeAltIcon, RefreshIcon } from '@heroicons/react/solid';

// import { allDecksContext } from '../App.js';
// import { useContext } from 'react';

export default function Deck({name, allDecksContext, type}) {
  // var name = props.name
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
  
  let additionalClasses, DeckButtons
  if (type === "regular") {
    additionalClasses = "bg-violet-600 hover:bg-violet-700"
    
    DeckButtons = 
    <>
      <button className="flex flex-row text-violet-100 hover:text-white hover:bg-violet-800 p-1 rounded-lg mr-5 hover:shadow-md"> <ClockIcon className="h-8 w-8 mr-1" />Load </button>
      <button className="flex flex-row text-violet-100 hover:text-white hover:bg-violet-800 p-1 rounded-lg mr-5 hover:shadow-md" onClick={onDelete}><XCircleIcon className="h-8 w-8 mr-1"/>Delete </button>
      <button className="flex flex-row text-violet-100 hover:text-white hover:bg-violet-800 p-1 rounded-lg hover:shadow-md"><GlobeAltIcon  className="h-8 w-8 mr-1" alt="" /> Review</button>
    </>

    
  }
  if (type === "trash") {
    additionalClasses = "bg-gray-600"
    DeckButtons = 
    <button className="flex flex-row text-violet-100 hover:text-white hover:bg-gray-800 p-1 rounded-lg mr-5 hover:shadow-md" onClick={onRestore}><RefreshIcon className="h-8 w-8 mr-1" />Restore </button>
  }

  return (

      <div className={`flex flex-row justify-start space-x-16 text-2xl text-white font-bold w-full p-2 shadow-md ${additionalClasses}`}>
        <div className="flex flex-row"><CollectionIcon className="h-10 w-10 mr-2 ml-6 shrink-0" /><span>{name}</span></div>
            <div className="flex flex-row w-screen justify-end items-center">
              {DeckButtons}
            </div>
      </div>

  );
}