import Card from "./Card";
import words from "./words";
import React from "react";

export default function CardList(props) {

       return (
        <div className='card'>
            <div className="card_words">
                <div className="card_word"> {props.english}
                    {
                        words.map((word) =>
                            <Card key={word.id} {...word} />)
                    }
                </div>
            </div>
        </div>
    )
}