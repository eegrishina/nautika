import React from 'react';
import FirstScreen from '../components/FirstScreen';

export default function Rent() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship-rent.png'
                title="парусные яхты для аренды"
                small="Аренда яхт для ваших морских путешествий."
                btn="Забронировать яхту" />
        </div>
    )
}