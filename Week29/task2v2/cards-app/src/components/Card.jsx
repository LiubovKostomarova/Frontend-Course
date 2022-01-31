import React, { useState } from "react";
import './words';
import '../styles/Cards.scss';


export default function Card(props) {
       const [pressed, setPressed] = useState(false)

    const handleChange = () => {
        setPressed(!pressed);
    }

    return (
        <div className="map">
            <div className="card-en"> {props.english}  </div>
            <div className="card-tr"> {props.transcription} </div>
            {
                pressed ?
                    <div className="card-russ" onClick={handleChange}> {props.russian} </div>
                    :
                    <div>
                        <button className="card-button" onClick={handleChange}>  Check </button>
                    </div>
            }
        </div>
    )
}