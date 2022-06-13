import { CollectionIcon, XCircleIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/solid';
// import { allDecksContext } from '../App.js';
// import { useContext } from 'react';

  export default function Deck({name, allDecksContext}) {
  // var name = props.name
  const {allDecks, setAllDecks} = allDecksContext
  const onDelete = () => {
    setAllDecks({  
      "decks": allDecks.decks.filter((deck) => deck !== name),
      "trash": [...allDecks.trash, name],
    })
  }
  return (
    <div className="flex flex-row justify-start space-x-16 text-3xl text-white font-bold w-full bg-violet-600 hover:bg-violet-700 p-2">
      {/* <div className="flex flex-row"> */}
      <div className="flex flex-row"><CollectionIcon className="h-10 w-10 mr-2 ml-6" />{name}</div>
      {/* </div> */}
      <div className="flex flex-row w-screen justify-end">
        <button className="flex flex-row text-violet-100 hover:text-white hover:bg-violet-800 p-1 rounded-lg mr-5"> <ClockIcon className="h-10 w-10 mr-1" />Load </button>
        <button className="flex flex-row text-violet-100 hover:text-white hover:bg-violet-800 p-1 rounded-lg mr-5" onClick={onDelete}><XCircleIcon className="h-10 w-10 mr-1"/>Delete </button>
        <button className="flex flex-row text-violet-100 hover:text-white hover:bg-violet-800 p-1 rounded-lg"><GlobeAltIcon  className="h-10 w-10 mr-1" alt="" /> Review</button>

      </div>
      
    </div>
  );
}