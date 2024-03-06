import React from 'react';
import FirstScreen2 from '../components/FirstScreen2';

export default function About() {
    return (
        <div className='container'>
            <FirstScreen2 imgPath='./images/main-ship-about.png'
                title="знакомство с наутикой"
                small="Давайте узнаем друг друга немного ближе"
                btns={[
                    {
                        text: "Получить консультацию",
                    }
                ]} />
        </div>
    )
}