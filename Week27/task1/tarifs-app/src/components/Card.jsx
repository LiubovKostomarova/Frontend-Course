import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className={"cardBody" + (props.selected === true ? " circle" : "")}>
      <div className={`cardTop_${props.cost}`}>Unlimited {props.cost}</div>
      <div className={`cardCenter_${props.cost}`}>
        EUR <p className="number">{props.cost}</p> /per month
      </div>
      up to <div className="cardSpeed">{props.speed}</div>
      <div className="cardTraffic">
        Included traffic<br></br> volume is unlimited
      </div>
    </div>
  );
}

export default Card;