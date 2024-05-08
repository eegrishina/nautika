import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function FirstScreen({ type, imgPath, specialImgClass, title, small, thanksStyle, btn, btns, btnStyle, idForm }) {
    function whatKindOfBtn() {
        if (!btnStyle) {
            return (
                <HashLink to={window.location.pathname + idForm + "#anchor-form-" + idForm}>
                    <button className='main-btn'>{btn}</button>
                </HashLink>
            )
        }

        if (btnStyle) {
            return (
                <Link to="/">
                    <button className={btnStyle}>{btn} <i className="fas fa-arrow-right"></i></button>
                </Link>
            )
        }
    }

    return (
        <div className={type ? 'first-screen center' : 'first-screen nocenter ' + thanksStyle}>
            <h1>{title}</h1>
            <p>{small}</p>
            <div className='first-img'>
                <img className={specialImgClass} src={imgPath} alt=''></img>
            </div>

            <div className='first-btnblock'>
                {btn ? whatKindOfBtn() : btns.map((i, idx) => {
                    return (
                        <Link to={i.link} key={idx}>
                            <button className={i.class ? i.class + ' main-btn' : 'main-btn'}>{i.text}</button>
                        </Link>
                    )
                })}
            </div>
        </div>

    );
}