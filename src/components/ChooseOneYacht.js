import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { apiYacht } from "../api";

export default function ChooseOneYacht() {
    const [yachtName, setYachtName] = useState("Луч");
    const [yachtBlock, setYachtBlock] = useState(
        <div className="top-text">
            <h4>Яхта <span className="blue">«Луч»</span></h4>
            <p>«Луч» — олимпийский класс яхт, предназначенный для одного человека, который одновременно занимается и управлением яхтой, и настройкой паруса. Открытый кокпит и легкий вес делают его идеальным выбором для тренировок, где важны реакция, баланс и взаимодействие с ветром и волнами.</p>
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
                        <h4>Яхта <span className="blue">«{y.name}»</span></h4>
                        <p>{y.description}</p>
                    </div>
                )
            })[0])
    }

    return (
        <div className="choose-yacht">
            <img className="side-img" src="./images/choose-yacht.png" alt=""></img>
            <div className="choose-boxes">
                <div className="choose-top">
                    <div className="top-btn">
                        {buttons}
                    </div>
                    {yachtBlock}
                </div>
                <div className="choose-bottom">
                    <div className="bottom-text">
                        <h4>Идеальная погода для яхты <span className='blue'>«{yachtName}»</span></h4>
                        <p>Сегодня отличная возможность потренироваться на швертботе «{yachtName}». Не забудьте прихватить с собой крем SPF, чтобы ваше плавание было приятным и безопасным, а остальное — за нами!</p>
                    </div>
                    <div className="bottom-btn">
                        <p><Link to='/weather'>Смотреть подробный прогноз</Link></p>
                        <button className="btn-red-arrow"><Link to='/training'>Записаться на тренировку <i className="fas fa-arrow-right"></i></Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}