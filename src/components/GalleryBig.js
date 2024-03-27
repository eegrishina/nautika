import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function GallerryBig() {
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState(0);

    function handleClickLeft() {
        setCount(count + 1);
        setPosition(position - 300);
    }

    function handleClickRight() {
        setCount(count - 1);
        setPosition(position + 300);
    }

    return (
        <div className='gallery-big'>
            <div className='gallery-big-title'>
                <h3>подарочные <span className='blue'>сертификаты</span></h3>
                <div className='scroll-btn'>
                    <button className='circle-btn' id='left'
                        disabled={count < 1}
                        onClick={handleClickRight}>
                        <i className='fas fa-arrow-right'></i>
                    </button>
                    <button className='circle-btn' id='right'
                        disabled={count >= 3}
                        onClick={handleClickLeft}>
                        <i className='fas fa-arrow-right'></i>
                    </button>
                </div>
            </div>

            <div className='gallery-big-photos'
                style={{ transform: `translateX(${position}px)` }}>
                <div>
                    <img src='./images/gallery-big1.png' alt=''></img>
                    <img src='./images/gallery-big2.png' alt=''></img>
                    <div className='gallery-photo-textblock'>
                        <h6>Внесите краски в свою жизнь и в жизнь своих близких</h6>
                        <p>У нас вы можете преобрести подарочные сертификаты на любую из предоставляемых услуг. Подарите своим близким незабываемые морские впечатления!</p>
                        <Link to='/certificates'><button className='main-btn'>Оформить сертификат</button></Link>
                    </div>
                </div>
                <img src='./images/gallery-big3.png' alt='' className='tall'></img>
                <div>
                    <img src='./images/gallery-big4.png' alt=''></img>
                    <img src='./images/gallery-big5.png' alt=''></img>
                </div>
                <img src='./images/gallery-big6.png' alt='' className='tall'></img>
                <div>
                    <img src='./images/gallery-big1.png' alt=''></img>
                    <img src='./images/gallery-big2.png' alt=''></img>
                </div>
                <div>
                    <img src='./images/gallery-big4.png' alt=''></img>
                    <img src='./images/gallery-big5.png' alt=''></img>
                </div>
            </div>
        </div>
    )
}