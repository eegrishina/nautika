import React from 'react';

export default function FirstScreen({ imgPath }) {
    return (
        <div className='main-info'>
            <h1>Откройте для себя парусный спорт</h1>
            <div className='main-column'>
                <small>Первые шаги к серьезному<br></br> парусному спорту.</small>
                <img className='main-img' src={imgPath} alt=''></img>
                <div className='main-btnblock'>
                    <button className='main-btn'>Записаться на тренировку</button>
                </div>
            </div>
        </div>
    );
}