import React from 'react';
import { Link } from "react-router-dom";

export default function TextBlock({ titles, btn, link }) {
    const textBlockH2 = titles.map(i => {
        return (
            <h2 key={i.id} className={i.blue ? "blue" : "darkblue"}>{i.text}</h2>
        )
    })

    const textBlockP = titles.map(i => {
        return (
            <p key={i.id}>{i.p}</p>
        )
    })

    return (
        <div className='textblock'>
            <div className='textblock-title'>
                {textBlockH2}
            </div>
            <div className='textblock-info'>
                <div className='textblock-text'>
                    {textBlockP}
                </div>
                <Link to={link}>
                    <button className='main-btn'>{btn}</button>
                </Link>
            </div>
        </div>
    )
}