import React from 'react';
import { useState } from 'react';

export default function GallerrySmall({ title, text, mainImg, images }) {
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState(0);

    function handleClickLeft() {
        setCount(count + 1);
        setPosition(position - 470);
    }

    function handleClickRight() {
        setCount(count - 1);
        setPosition(position + 470);
    }

    const photos = images.map((i, idx) => {
        return (
            <li key={idx}><img src={i} alt=""></img></li>
        )
    })

    return (
        <div className='gallery-small'>
            <div className='main-photo-container'>
                <li>
                    <img src={mainImg} alt=""></img>
                </li>
            </div>

            <div className='gallery-small-photos'>
                <div className='gallery-photo-textblock'>
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <div className='scroll-btn'>
                        <button className='circle-btn' id='left'
                            disabled={count < 1}
                            onClick={handleClickRight}>
                            <i className='fas fa-arrow-right'></i>
                        </button>
                        <button className='circle-btn' id='right'
                            disabled={count >= 2}
                            onClick={handleClickLeft}>
                            <i className='fas fa-arrow-right'></i>
                        </button>
                    </div>
                </div>

                <div className='gallery-images'>
                    {photos}
                </div>
            </div>
        </div>
    )
}