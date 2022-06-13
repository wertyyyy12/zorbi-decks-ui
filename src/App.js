import logo from './logo.png';
import './style.css';
// import '/public/style.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useMemo, useState } from 'react';
import Deck from './components/Deck.js';
import Decks from './components/Decks.js'
import AddDeck from './components/AddDeck.js';
import AddDeckDialog from './components/AddDeckDialog.js'
import Navbar from './components/Navbar.js';
import TrashDeck from './components/TrashDeck.js';

function Home() {
  return (
    <div className="mt-40 space-y-4">
      <Navbar />
      {/* <Deck /> */}
      <Decks type="regular"/>
      <AddDeck />
    </div>
  );
}

function Trash() {
  return(
    <div className="mt-40 space-y-4">
      <Decks type="trash"/>
      {/* <TrashDeck /> */}

    </div>

  );
}

const Main = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/trash" element={<Trash />} />
    </Routes>

  );
}

export const allDecksContext = React.createContext({
  "decks": [],
  "trash": [],
  "setAllDecks": () => {},
});

function App() {

  const [allDecks, setAllDecks] = useState({
    "decks": [],
    "trash": [],
  })

  const allDecksInfo = useMemo(
    () => ({allDecks, setAllDecks}),
    [allDecks]
  )

  return (
    <div className="App">
      <allDecksContext.Provider value={allDecksInfo}>
        <Main />
      </allDecksContext.Provider>
    </div>
  );
}

export default App;

// Deck
// 
// asd