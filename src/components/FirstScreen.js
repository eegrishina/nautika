import React from 'react';
import { Link } from "react-router-dom";

export default function FirstScreen({ type, imgPath, specialImgClass, title, small, smallStyle, btn, btns, btnStyle }) {

    return (
        (type === 'center' ? (
            <div className='main-info'>
                <h1>{title}</h1>
                <div className='main-column'>
                    <small>{small}</small>
                    <div className='main-img'>
                        <img src={imgPath} alt=''></img>
                    </div>
                    <div className='main-btnblock'>
                        <Link to="">
                            <button className={btnStyle ? btnStyle : 'main-btn'}>{btn} {btnStyle && <i className="fas fa-arrow-right"></i>}</button>
                        </Link>
                    </div>
                </div>
            </div>
        ) : (
            <div className='main-info'>
                <div className='main-info-flex'>
                    <div className='main-info-column'>
                        <h1>{title}</h1>
                        <small style={smallStyle}>{small}</small>
                        <div className='main-btnblock'>
                            {btn ? <button className='main-btn'>{btn}</button> : btns.map((i, idx) => {
                                return (
                                    <button key={idx} className={i.class ? i.class + ' main-btn' : 'main-btn'}>{i.text}</button>
                                )
                            })}</div>
                    </div>
                    <div className='main-img'>
                        <img className={specialImgClass} src={imgPath} alt=''></img>
                    </div>
                </div>
            </div>
        ))
    );
}