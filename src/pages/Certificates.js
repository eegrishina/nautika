import React from 'react';
import FirstScreen from '../components/FirstScreen';

export default function Certificates() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship-certificates.png'
                title="подарочные сертификаты"
                small="Подарите своим близким незабываемые впечатления."
                btn="Оформить сертификат" />
        </div>
    )
}