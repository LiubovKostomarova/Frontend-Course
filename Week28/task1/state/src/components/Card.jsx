import React from "react";
import { useState } from "react";
import "./Card.scss";

function Card(props) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelection = () => {
    
    setIsSelected(!isSelected);
  };

  return (
    <div
      onClick={handleSelection}
      className={"cardBody" + (isSelected === true ? " highlight" : "")}
    >
      <div className={`cardTop_${props.cost}`}>Unlimited {props.cost}</div>
      <div className={`cardCenter_${props.cost}`}>
        $ <p className="number">{props.cost}</p> /per month
      </div>
      <div className="cardSpeed">{props.speed}</div>
      <div className="cardTraffic">
        Included traffic<br></br> volume is unlimited
      </div>
    </div>
  );
}

export default Card;
