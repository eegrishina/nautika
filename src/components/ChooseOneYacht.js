import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { apiYacht } from "../api";

export default function ChooseOneYacht({ idForm }) {
    const [yachtName, setYachtName] = useState("Луч");
    const [yachtBlock, setYachtBlock] = useState(
        <div className="top-text">
            <h6>Яхта <span className="blue">«Луч»</span></h6>
            <p className='card'>«Луч» — олимпийский класс яхт, предназначенный для одного человека, который одновременно занимается и управлением яхтой, и настройкой паруса. Эта легкая и динамичная яхта отлично подходит для тренировки реакции и баланса.</p>
        </div>
    );

    const buttons = apiYacht.map(y => {
        return (
            <button key={y.id} id={y.id} className={y.active ? "active" : undefined}
                onClick={() => handleClick(y.id)}>{y.name}</button>
        )
    })

    function handleClick(btnId) {
        apiYacht
            .filter(y => btnId !== y.id)
            .map(y => y.active = false)

        setYachtBlock(apiYacht
            .filter(y => btnId === y.id)
            .map(y => {
                setYachtName(y.name)
                y.active = true
                return (
                    <div key={y.id} className="top-text">
                        <h6>Яхта <span className="blue">«{y.name}»</span></h6>
                        <p className='card'>{y.description}</p>
                    </div>
                )
            })[0])
    }

    return (
        <div className="choose-yacht">
            <div className="side-img">
                <img src="./images/choose-yacht.png" alt=""></img>
            </div>
            <div className="choose-top">
                <div className="top-btn">
                    {buttons}
                </div>
                {yachtBlock}
            </div>
            <div className="choose-bottom">
                <div className="bottom-text">
                    <h6>Идеальная погода для яхты <span className='blue'>«{yachtName}»</span></h6>
                    <p className='card'>Сегодня отличная возможность потренироваться на швертботе «{yachtName}». Не забудьте прихватить с собой крем SPF, чтобы ваше плавание было приятным и безопасным, а остальное — за нами!</p>
                </div>
                <div className="bottom-btn">
                    <Link to='/weather' className="btn-blue">Смотреть подробный прогноз</Link>
                    <button className="btn-red-arrow">
                        <HashLink to={"/" + idForm + "#anchor-form-" + idForm}>
                            Записаться на тренировку <i className="fas fa-arrow-right"></i>
                        </HashLink>
                    </button>
                </div>
            </div>
        </div>
    )
}