import React from 'react';
import { Link } from "react-router-dom";

export default function TextBlock({ title1, title2, blue1, blue2, p1, p2, btn, link }) {
    return (
        <div className='textblock'>
            <div className='textblock-title'>
                <h2 className={blue1 ? "blue" : "darkblue"}>{title1}</h2>
                <h2 className={blue2 ? "blue" : "darkblue"}>{title2}</h2>
            </div>
            <div className='textblock-info'>
                <div className='textblock-text'>
                    <p>{p1}</p>
                    <p>{p2}</p>
                </div>
                <button className='main-btn'>
                    <Link to={link}>{btn}</Link>
                </button>
            </div>
        </div>
    )
}