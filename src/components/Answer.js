import React from 'react'
import {useNavigate} from 'react-router-dom'

const Answer = ({answer,cards,setAnswer}) => {
  let cardName = "";
  let navigate=useNavigate();
  cards.forEach((card, index) => {
    if (index === answer) {
      cardName = card.name;
    }
  });
  const handleClick=()=>{
    setAnswer(0);
    navigate('/');
  }
  const imagePath = `/images/${cardName}.png`;
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <h3 style={{textAlign:"center",fontFamily: "Kalam, cursive",textShadow:"2px 2px 10px #a5a5ee"}}>Your selected card is :</h3>
    <img src={imagePath} alt={cardName} className='finalCard animated' style={{marginTop:"50px",marginBottom:"80px"}}/>
    <h3 className='credit'>Thanks For Playing :) Game Made By Yugal Pradhan </h3>
    <h3 className='again' style={{textAlign:"center",fontFamily: "Kalam, cursive",textShadow:"2px 2px 10px #a5a5ee",marginTop:"20px"}}>Wanna play again?</h3>
    <div onClick={handleClick} className="button">Yes</div>
    </div>
  )
}

export default Answer