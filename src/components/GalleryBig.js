import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

export default function GallerryBig() {
    // const styleGallery = {
    //     transform: 'translateX(0);'
    // }
    // const [position, setPosition] = useState(styleGallery);

    // function handleClick() {
    //     setPosition({
    //         transform: 'translateX(-300px)'
    //     })
    // }

    let countLeft = 0;
    const [position, setPosition] = useState(0);

    function handleClick() {
        ++countLeft;
        setPosition(countLeft * -300);
        console.log(countLeft, position);
    }

    return (
        <div className='gallery-big'>
            <div className='gallery-big-title'>
                <h3>подарочные <span className='blue'>сертификаты</span></h3>
                <div className='gallery-btn'>
                    <button className='circle-btn' id='left' disabled>
                        <i className='fas fa-arrow-right'></i>
                    </button>
                    <button className='circle-btn' id='right' 
                        onClick={handleClick}>
                        <i className='fas fa-arrow-right'></i>
                    </button>
                </div>
            </div>
            <div className='gallery-big-photos' style={{ transform: `translateX(${position}px)` }}>
                <div>
                    <img src='./images/gallery-big1.png' alt=''></img>
                    <img src='./images/gallery-big2.png' alt=''></img>
                    <div className='gallery-photo-textblock'>
                        <h4>Внесите краски в свою жизнь и в жизнь своих близких</h4>
                        <p>У нас вы можете преобрести подарочные сертификаты на любую из предоставляемых услуг. Подарите своим близким незабываемые морские впечатления!</p>
                        <button className='main-btn'>Оформить сертификат</button>
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