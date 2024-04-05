import React from 'react';
import { Link } from "react-router-dom";

export default function TextBlock({ titles, btn, link }) {
    const textBlockH2 = titles.map(i => {
        return (
            <h2 key={i.id} className={i.blue ? "blue" : "darkblue"}>{i.text}</h2>
        )
    })

    let arr = [];
    const textBlockP = titles.map(i => {
        arr.push(i.p.split("").length);
        let diff = Math.floor(Math.max(arr[0], arr[1]) / Math.min(arr[0], arr[1]));
        let result = 100 / (diff + 1) * diff * 1.3;
        console.log(result);

        return (Math.abs(arr[0] - arr[1]) > Math.min(arr[0], arr[1])) ? (
            <p key={i.id} style={{ flexBasis: result + '%' }}>{i.p}</p>
        ) : (
            <p key={i.id} style={{ flexBasis: '45%' }}>{i.p}</p>
        )
    });

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