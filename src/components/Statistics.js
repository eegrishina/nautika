import React from "react";
import { Link } from "react-router-dom";

export default function Statistics() {
    return (
        <div className="statistics">
            <div className="statistics-left">
                <p>Мы предоставляем качественное обучение, индивидуальный подход и незабываемые морские приключения. <span className='blue'>Начните свой путь в яхтинг с нашей командой!</span></p>
                <button className="main-btn">
                    <Link to='services'>Перейти к услугам</Link>
                </button>
            </div>
            <div className="statistics-right">
                <p>В Наутике вы не просто учитесь управлять яхтой — вы погружаетесь в мир яхтинга и становитесь частью яхтенного сообщества. Пробудите в себе морского исследователя и заживите в ритме волн и ветра.</p>
                <div className="statistics-numbers">
                    <div className="numbers-item">
                        <h5>6</h5>
                        <p>лет успешной работы</p>
                    </div>
                    <div className="numbers-item">
                        <h5>&#62;500</h5>
                        <p>довольных клиентов</p>
                    </div>
                    <div className="numbers-item">
                        <h5>&#62;1000</h5>
                        <p>часов морской практики</p>
                    </div>
                    <div className="numbers-item">
                        <h5>10</h5>
                        <p>видов предложений</p>
                    </div>
                </div>
            </div>
        </div>
    )
}