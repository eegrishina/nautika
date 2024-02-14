import React from 'react';
import { Link } from "react-router-dom";

export default function TextBlock() {
    return (
        <div className='textblock'>
            <div className='textblock-title'>
                <h2>От крепкой любви к морю</h2>
                <h2>к открытию парусной школы</h2>
            </div>
            <div className='textblock-info'>
                <div className='textblock-text'>
                    <p>Школа «Наутика» зародилась в 2017 году в Новосибирске под трепетным руководством Евгении Белых.</p>
                    <p>Изначально это было семейное увлечение парусным искусством, но вскоре оно переросло в возможность для многих наслаждаться морскими приключениями, шумом волн и свободой свежего ветра.</p>
                </div>
                <button className='main-btn'>
                    <Link to='about'>Узнать подробнее</Link>
                </button>
            </div>
        </div>
    )
}