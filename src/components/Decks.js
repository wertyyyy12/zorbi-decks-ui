import Deck from "./Deck.js"
import TrashDeck from "./TrashDeck.js"
import { useContext } from 'react';
import { allDecksContext } from '../App.js';

export default function Decks({type}) {
    const decksContext = useContext(allDecksContext)
    const allDecks = decksContext.allDecks
    switch (type) {
        case "regular":
            return (
                <>
                    {allDecks.decks.map((deck) => <Deck name={deck} allDecksContext={decksContext} key={deck}/>)}
                </>
            )
        case "trash":
            return (
                <>
                    {allDecks.trash.map((deck) => <TrashDeck name={deck} key={deck}/>)}
                </>
            )
        default:
    }
}

