import Deck from "./Deck.js"
import { useContext } from 'react';
import { allDecksContext } from '../App.js';
import {
    CSSTransition,
    TransitionGroup
  } from 'react-transition-group';
  import { Flipper } from 'react-flip-toolkit'
  
import '../style.css';
export default function Decks({type}) {
    const decksContext = useContext(allDecksContext)
    const allDecks = decksContext.allDecks
    if (type === "regular") {
        return (

                <Flipper flipKey={allDecks.decks.join('')}>
                    {allDecks.decks.map((deck) => <Deck name={deck} type="regular" allDecksContext={decksContext} key={deck}/>)}
                </Flipper>

        )
    }

    if (type === "trash") {
        return (
            <TransitionGroup component={null}>
                {allDecks.trash.map((deck) => <CSSTransition key={deck} component={null} timeout={250} classNames="deck"><Deck name={deck} type="trash" allDecksContext={decksContext} key={deck}/></CSSTransition>)}
            </TransitionGroup>
        )
    }
}

