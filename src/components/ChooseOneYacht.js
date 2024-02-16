import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { apiYacht } from "../api";

export default function ChooseOneYacht({ handleClick, name, description }) {
    // const [yacht, setYacht] = useState(apiYacht);

    // function handleClick(eventId) {
    //     setYacht(apiYacht.filter(y => eventId === y.id));
    // }


    // const luch = document.getElementById('luch');
    // const soling = document.getElementById('soling');
    // const finn = document.getElementById('finn');
    // const chooseBtn = document.querySelector('.top-btn');
    // console.log(chooseBtn);

    // chooseBtn.addEventListener('click', (e) => {
    //     let btn = e.target.closest('button');
    //     if (!btn) return;
    //     if (!chooseBtn.contains(btn)) return;

    // apiYacht.filter(yacht => {
    //     if (yacht.id === btn.id) {
    //         return (
    //             <>
    //                 <h4>Яхта <span>{yacht.name}</span></h4>
    //                 <p>{yacht.description}</p>
    //             </>
    //         )
    //     }
    // })
    // })


    return (
        <div className="choose-boxes">
            <div className="choose-top">
                <div className="top-btn">
                    <button id="luch" className="chosen">Луч</button>
                    <button id="soling">Солинг</button>
                    <button id="finn">Финн</button>
                </div>
                <div className="top-text">
                    <h4>Яхта <span className="blue">«Луч»</span></h4>
                    <p>«Луч» — олимпийский класс яхт, предназначенный для одного человека, который одновременно занимается и управлением яхтой, и настройкой паруса. Эта легкая и динамичная яхта отлично подходит для тренировки реакции и баланса.</p>
                    {/* <h4>Яхта <span className="blue">{yacht.name}</span></h4>
                    <p>{yacht.description}</p> */}
                </div>
            </div>
            <div className="choose-bottom">
                <div className="bottom-text">
                    <h4>Идеальная погода для яхты <span className='blue'>«Луч»</span></h4>
                    <p>Сегодня отличная возможность отправиться в плавание на яхте «Луч». Не забудьте прихватить с собой крем SPF, а остальное — за нами!</p>
                </div>
                <div className="bottom-btn">
                    <p><Link to='/weather'>Смотреть подробный прогноз</Link></p>
                    <button><Link to='/training'>Записаться на тренировку <i className="fas fa-arrow-right"></i></Link></button>
                </div>
            </div>
        </div>
    )
}