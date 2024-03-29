import React from 'react';
import { Link } from "react-router-dom";

export default function FirstScreen({ type, imgPath, specialImgClass, title, small, smallStyle, btn, btns, btnStyle }) {

    return (
        <div className={type ? 'first-screen center' : 'first-screen nocenter'}>
            <h1>{title}</h1>
            <p style={smallStyle}>{small}</p>
            <div className='first-img'>
                <img className={specialImgClass} src={imgPath} alt=''></img>
            </div>
            <div className='first-btnblock'>
                {btn ? <Link to="">
                    <button className={btnStyle ? btnStyle : 'main-btn'}>{btn} {btnStyle && <i className="fas fa-arrow-right"></i>}</button>
                </Link> : btns.map((i, idx) => {
                    return (
                        <Link to="">
                            <button key={idx} className={i.class ? i.class + ' main-btn' : 'main-btn'}>{i.text}</button>
                        </Link>
                    )
                })}
            </div>
        </div>

    );
}