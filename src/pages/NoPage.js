import React from 'react';
import FirstScreen from '../components/FirstScreen';

export default function NoPage() {
    return (
        <div className='container'>
            <FirstScreen type="center"
                imgPath='./images/nopage.png'
                small="Кажется, вы сбились с курса. Но не переживайте, мы готовы помочь вам!"
                btn="Вернуться на главную"
                btnStyle="btn-red-arrow" />
        </div>
    )
}