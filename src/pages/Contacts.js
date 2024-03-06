import React from 'react';
import FirstScreen2 from '../components/FirstScreen2';

export default function Contacts() {
    return (
        <div className='container'>
            <FirstScreen2 imgPath='./images/main-ship-services.png'
                title="наши контакты и координаты"
                small="Планируете посетить нас? Здесь вся информация о контактах и маршруте"
                btns={[
                    {
                        text: "Заказать обратный звонок",
                    }
                ]} />
        </div>
    )
}