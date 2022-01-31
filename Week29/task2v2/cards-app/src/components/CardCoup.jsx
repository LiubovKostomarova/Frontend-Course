import React, { useState } from 'react';
import words from './words';
import Card from './Card';
import '../styles/CardCoup.scss';
import Img from "../styles/dictionary.jpg";

export default function CardCoup(props) {
    const [position, setPosition] = useState(0);

    const handelPrev = () => {
        if (position === 0) {
            setPosition(words.length - 1);
        } else {
            setPosition(position - 1);
        }
    }

    const handelNext = () => {
        if (position === words.length - 1) {
            setPosition(0);
        } else {
            setPosition(position + 1);
        }

    }
    return (
        <>
            <div className='coup'>
                <div className='coup_btn'>
                    <button className='coup_button' onClick={handelPrev}> &lArr; </button>
                </div>
                <div className='coup_card'>
                    <Card
                        key={words[position].id}
                        english={words[position].english}
                        transcription={words[position].transcription}
                        russian={words[position].russian}
                        tags={words[position].tags} />
                    <div className='coup_text'>
                        <p className='coup_txt'> {position + 1}/ {words.length}</p>
                    </div>
                </div>
                <div className='coup_btn'>
                    <button className='coup_button' onClick={handelNext}> &rArr; </button>
                </div>
            </div>
            <div className='coup_images'>
                <img src={Img} className='coup_img' alt='dictionary' />
            </div>
        </>

    );
}