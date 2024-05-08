import React from 'react';
import FirstScreen from '../components/FirstScreen';
import HowToGo from '../components/HowToGo';
import Map from '../components/Map';
import FormBlock from '../components/FormBlock';

export default function Contacts() {
    const location = "contacts";

    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship-contacts.png'
                title="наши контакты и координаты"
                small={`Планируете посетить нас? \nЗдесь вся информация о контактах и маршруте`}
                thanksStyle="thanks contacts"
                btn="Заказать обратный звонок"
                idForm={location} />
            <HowToGo />
            <Map
                idForm={location}
                classInfo="absolute" />
            <FormBlock
                idForm={location}
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
                formType="questions" />
        </div>
    )
}