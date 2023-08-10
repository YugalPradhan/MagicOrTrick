import React,{useEffect} from "react";
import Card from "./Card";


const Column = ({ cards,col,handleClick,setColumn,column}) => {
  const handleOClick=()=>{
    column.current=col;
    handleClick();
  }
  return (
    <div className="column" onClick={handleOClick}>
      <h4 style={{textAlign:"center",marginTop:"7px",background:"none",fontFamily: "Kalam, cursive",textShadow:"2px 2px 10px #a5a5ee"}}>Column {col}</h4>
      {cards.map((card,index) => (
        <Card key={card.name} name={card.name} index={index+1}/>
      ))}
    </div>
  );
};

export default Column;