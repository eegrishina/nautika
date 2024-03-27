import React from 'react';
import { useState } from 'react';

export default function GallerrySmall({ title, text, images }) {
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState(0);

    function handleClickLeft() {
        setCount(count < photos.length ? count + 1 : count);
        setPosition(position - 300);
    }

    function handleClickRight() {
        setCount(count > 0 ? count - 1 : 0);
        setPosition(position + 300);
    }

    const photos = images.map((i, idx) => {
        return (
            <li key={i.id} className={count === idx ? 'big' : undefined}><img src={i.src} alt=""></img></li>
        )
    })

    return (
        <div className='gallery-small'>
            <div>
                <div className='gallery-images'
                    style={{ transform: `translateX(${position}px)` }}>
                    {photos}
                </div>
            </div>

            <div className='gallery-photo-textblock'>
                <h6>{title}</h6>
                <p>{text}</p>
                <div className='scroll-btn'>
                    <button className='circle-btn' id='left'
                        disabled={count < 1}
                        onClick={() => handleClickRight()}>
                        <i className='fas fa-arrow-right'></i>
                    </button>
                    <button className='circle-btn' id='right'
                        disabled={count > photos.length - 2}
                        onClick={() => handleClickLeft()}>
                        <i className='fas fa-arrow-right'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}