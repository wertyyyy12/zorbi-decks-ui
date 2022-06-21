import { PlusCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react';
// setAllDecks([...allDecks.decks, "ADDED DECK"])
import AddDeckDialog from './AddDeckDialog.js';
export default function AddDeck() {
    const [open, setOpen] = useState(false)
    return (
      <button className="flex flex-row text-4xl text-white font-bold w-full bg-violet-600 hover:bg-violet-700 w-[95%] m-auto rounded-lg p-2" onClick={() => setOpen(true)}>
        <PlusCircleIcon className="h-10 w-10 mr-2 ml-6" />Add Deck
        <AddDeckDialog open={open} setOpen={setOpen}/>
      </button>
    );
}