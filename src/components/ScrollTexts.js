import React from "react";
import { useState } from 'react';
import ScrollOneText from "./ScrollOneText";

export default function ScrollTexts({ mainTitle, props }) {
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState(0);
    const maxCount = props.length;

    function handleClickLeft() {
        setCount(count + 1);
        setPosition(position - 470);
    }

    function handleClickRight() {
        setCount(count - 1);
        setPosition(position + 470);
    }

    const titles = mainTitle.map((i, idx) => {
        return (
            <h2 key={idx} className={i.blue ? "blue" : "darkblue"}>{i.title}</h2>
        )
    })

    const texts = props.map((i, idx) => {
        return (
            <ScrollOneText key={idx} title={i.title} text={i.text} />
        )
    })

    return (
        <div className="scroll-text-container">
            {titles}
            <div className='scroll-btn'>
                <button className='circle-btn' id='left'
                    disabled={count < 1}
                    onClick={handleClickRight}>
                    <i className='fas fa-arrow-right'></i>
                </button>
                <button className='circle-btn' id='right'
                    disabled={count >= maxCount - 2}
                    onClick={handleClickLeft}>
                    <i className='fas fa-arrow-right'></i>
                </button>
            </div>
            <div className="scroll-texts"
                style={{ transform: `translateX(${position}px)` }}>
                {texts}
            </div>
        </div>
    )
}