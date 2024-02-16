import React from 'react';
import FirstScreen from '../components/FirstScreen';

export default function Walks() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship-walk.png'
                title="морские прогулки"
                small="Отправляйтесь с нами в увлекательные морские приключения."
                btn="Записаться на прогулку" />
        </div>
    )
}