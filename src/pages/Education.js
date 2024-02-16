import React from 'react';
import FirstScreen from '../components/FirstScreen';

export default function Education() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship-education.png'
                title="Обучение яхтингу"
                small="Ваш путь к парусному искусству начинается здесь."
                btn="Записаться на тренировку" />
        </div>
    )
}