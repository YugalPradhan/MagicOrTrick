import React, { useRef } from "react";
import Column from "./Column";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";

const Game = ({ column1, column2, column3 ,Deck,setDeck,answer,setAnswer}) => {
  const column=useRef(0);
  const [clicked,setClicked]=useState(0);
  const [text,setText]=useState("Imagine a card from below in your mind, then select column where it belongs");
  let navigate=useNavigate();

  const handleClick=()=>{
    if(clicked===0)
    {
      setClicked(1);
      setText("Select column where it belongs again");
      setAnswer(answer+9*(column.current-1));
    }
    else if (clicked===1)
    {
      setClicked(2);
      setText("One last time select column where it belongs please");
      setAnswer(answer+(column.current-1));
    }
    else if(clicked===2)
    {
      setClicked(0);
      setText("Imagine a card from below in your mind, then select column where it belongs");
      setAnswer(answer+3*(column.current-1));
      navigate('/finalpage');
    }
    const newDeck = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 9; j++) {
        const index = j * 3 + i;
          newDeck.push(Deck[index]);
      }
    }
    setDeck(newDeck);
    }
  return (<>
    <h3 style={{textAlign:"center",fontFamily: "Kalam, cursive",textShadow:"2px 2px 10px #a5a5ee"}}>{text}</h3>
    <div className="game">
      <Column cards={column1} col={1} handleClick={handleClick}  column={column}/>
      <Column cards={column2} col={2} handleClick={handleClick}  column={column}/>
      <Column cards={column3} col={3} handleClick={handleClick}  column={column}/>
    </div>
    </>
  );
};

export default Game;