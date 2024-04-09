import React from "react";
import { Link } from "react-router-dom";

export default function Statistics() {
    return (
        <div className="statistics">
            <div className="statistics-left">
                <h3>Мы предоставляем качественное обучение, индивидуальный подход и незабываемые морские приключения. <span className='blue'>Начните свой путь в яхтинг с нашей командой!</span></h3>
                <Link to='services'>
                    <button className="main-btn">Перейти к услугам</button>
                </Link>
            </div>
            <div className="statistics-right">
                <p>В Наутике вы не просто учитесь управлять яхтой — вы погружаетесь в мир яхтинга и становитесь частью яхтенного сообщества. Пробудите в себе морского исследователя и заживите в ритме волн и ветра.</p>
                <div className="statistics-numbers">
                    <div className="numbers-item">
                        <h2>6</h2>
                        <small>лет успешной работы</small>
                    </div>
                    <div className="numbers-item">
                        <h2>&#62;500</h2>
                        <small>довольных клиентов</small>
                    </div>
                    <div className="numbers-item">
                        <h2>&#62;1000</h2>
                        <small>часов морской практики</small>
                    </div>
                    <div className="numbers-item">
                        <h2>10</h2>
                        <small>видов предложений</small>
                    </div>
                </div>
            </div>
        </div>
    )
}