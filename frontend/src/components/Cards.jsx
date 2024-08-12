import React, { useState } from "react";
import "./css/Cards.css"; 

export function Cards(props) {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
      <div className="card">
       <div className="card-inner">
        {isFlipped ? <h1>{props.title}</h1> : <p>{props.description}</p>}
       </div>
       <div>
       <button onClick={handleFlip}>
        {isFlipped ? "Flip Card" : "show title"}
       </button>
       </div>
       
    </div>
  );
}
