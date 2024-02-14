import React from 'react';
import { Link } from "react-router-dom";

export default function Page404({ imgPath }) {
    return (
        <div className='container'>
            <div className='main-info'>
                <div className='main-img nopage'></div>
                <div className='main-column'>
                    <small>Кажется, вы сбились с курса. Но не переживайте, мы готовы помочь вам!</small>
                    <button className='line-btn'><Link to="/">Вернуться на главную</Link> </button>
                </div>
            </div>
        </div>
    )
}