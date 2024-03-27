import React from 'react';
import FirstScreen from '../components/FirstScreen';

export default function About() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship-about.png'
                specialImgClass="img-about"
                title="знакомство с наутикой"
                small="Давайте узнаем друг друга немного ближе"
                // btns={[
                //     {
                //         text: "Получить консультацию",
                //     }
                // ]}
                btn="Получить консультацию" />
        </div>
    )
}