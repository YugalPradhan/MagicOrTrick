import React from "react";

const Card = ({ name ,index}) => {
  const imagePath = `/images/${name}.png`;
  return (
      <img src={imagePath} alt={name} className={`card ${index+1}`} style={{top:`${index*35}px`}}/>
  );
};

export default Card;