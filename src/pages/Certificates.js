import React from 'react';
import FirstScreen2 from '../components/FirstScreen2';

export default function Certificates() {
    return (
        <div className='container'>
            <FirstScreen2 imgPath='./images/main-ship-certificates.png'
                title="подарочные сертификаты"
                small="Подарите своим близким незабываемые впечатления"
                btns={[
                    {
                        text: "Оформить сертификат",
                    }
                ]} />
        </div>
    )
}