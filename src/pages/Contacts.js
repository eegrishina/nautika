import React from 'react';
import FirstScreen2 from '../components/FirstScreen2';
import HowToGo from '../components/HowToGo';
import Map from '../components/Map';
import FormBlock from '../components/FormBlock';

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
            <HowToGo />
            <Map
                classInfo="absolute" />
            <FormBlock
                titles={[
                    {
                        title: "У вас остались вопросы?",
                        blue: false,
                    },
                    {
                        title: "Смело пишите нам!",
                        blue: true,
                    }
                ]}
                imgLink="./images/form-left.png"
                formPosition="left" />
        </div>
    )
}