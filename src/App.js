import React,{useState,useEffect} from "react";
import Game from "./components/Game";
import Answer from "./components/Answer";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css"; // Import the CSS file

const App = () => {

  const suits = ["hearts", "diamonds", "clubs", "spades"];
  const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
  
  //to create deck of cards
  function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  const deck = [];
  for (const suit of suits) {
    for (const rank of ranks) {
      const cardName = `${rank}_of_${suit}`;
      deck.push({ name: cardName });
    }
  }
  //to shuffle cards
 const [Deck, setDeck] = useState(shuffleDeck(deck)); 

  // Create state variables to hold individual columns
  const [column1, setColumn1] = useState(Deck.slice(0, 9));
  const [column2, setColumn2] = useState(Deck.slice(9, 18));
  const [column3, setColumn3] = useState(Deck.slice(18, 27));

  // Update the columns whenever the shuffledDeck changes
  useEffect(() => {
    setColumn1(Deck.slice(0, 9));
    setColumn2(Deck.slice(9, 18));
    setColumn3(Deck.slice(18, 27));
  }, [Deck]);
  
  const [answer,setAnswer]=useState(0);
  return (
    <Router>
    <h1 style={{textAlign:"center",margin:"1rem",fontFamily:"Dancing Script,cursive",textShadow:"2px 2px 10px deeppink"}}>Magic or Trick?</h1>
    <div>
     <Routes>
       <Route exact path="/" element={<Game column1={column1} column2={column2} column3={column3} Deck={Deck} answer={answer} setDeck={setDeck} setAnswer={setAnswer}/>}>
       </Route> 
       <Route exact path="/finalpage" element={<Answer answer={answer} setAnswer={setAnswer} cards={Deck}/>}>
       </Route>        
     </Routes>
     </div>
     </Router>
  );
};

export default App;