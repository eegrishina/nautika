import React from 'react';
import { Link } from "react-router-dom";

export default function FirstScreen({ imgPath, title, small, btn, btnStyle }) {

    return (
        <div className='main-info'>
            <h1>{title}</h1>
            <div className='main-column'>
                <small>{small}</small>
                <img className='main-img' src={imgPath} alt=''></img>
                <div className='main-btnblock'>
                    <Link to="">
                        <button className={btnStyle ? btnStyle : 'main-btn'}>{btn} {btnStyle && <i className="fas fa-arrow-right"></i>}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}