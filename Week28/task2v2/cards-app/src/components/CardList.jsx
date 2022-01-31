import Card from "./Card";
import words from "./words";
import React from "react";

export default function CardList(props) {

    return (
        <div className='card'>
            <div className="card-words">
                <div className="card-word"> 
                {props.english}
                    {
                        words.map((word) =>
                            <Card {...word} />)
                    }
                </div>
            </div>
        </div>
    )
}