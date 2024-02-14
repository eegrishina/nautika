import React from 'react';

export default function FirstScreen({ imgPath }) {
    return (
        <div className='main-info'>
            <h1>Откройте для себя парусный спорт</h1>
            <div className='main-img home'></div>
            <div className='main-column'>
                <small>Первые шаги к серьезному<br></br> парусному спорту.</small>
                <button className='main-btn'>Записаться на тренировку</button>
            </div>
        </div>
    );
}