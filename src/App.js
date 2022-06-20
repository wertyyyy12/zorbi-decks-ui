// import './style.css';
import { Routes, Route } from 'react-router-dom';
import React, { useMemo, useState } from 'react';
import Decks from './components/Decks.js'
import AddDeck from './components/AddDeck.js';
import zorbiHeader from './zorbi-header.png'
import Navbar from './components/Navbar';
function Home() {
  return (
    <div className="">
      <img src={zorbiHeader} className="mb-6" alt="Header" />
      <Navbar type="Home"/>
        <Decks type="regular"/>
      <AddDeck />
    </div>
  );
}

function Trash() {
  return(
    <div className="space-y-4">
      <img src={zorbiHeader} className="mb-6" alt="Header" />
      <Navbar type="Trash"/>
      <Decks type="trash"/>

    </div>

  );
}

const Main = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trash" element={<Trash />} />
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
