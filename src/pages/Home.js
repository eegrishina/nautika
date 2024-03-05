import React from 'react';
import FirstScreen from '../components/FirstScreen';
import TextBlock from '../components/TextBlock';
import Journey from '../components/Journey';
import Statistics from '../components/Statistics';
import ChooseOneYacht from '../components/ChooseOneYacht';
import FormBlock from '../components/FormBlock';
import Map from '../components/Map';

export default function Home() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship.png'
                title="Откройте для себя парусный спорт"
                small="Первые шаги к серьезному парусному спорту."
                btn="Записаться на тренировку" />
            <TextBlock
                titles={[
                    {
                        id: 1,
                        text: "От крепкой любви к морю",
                        blue: false,
                        p: "Школа «Наутика» зародилась в 2017 году в Новосибирске под трепетным руководством Евгении Белых."
                    },
                    {
                        id: 2,
                        text: "к открытию парусной школы",
                        blue: true,
                        p: "Изначально это было семейное увлечение парусным искусством, но вскоре оно переросло в возможность для многих наслаждаться морскими приключениями, шумом волн и свободой свежего ветра."
                    }
                ]}
                btn="Узнать подробнее"
                link="about" />
            <Journey />
            <Statistics />
            <ChooseOneYacht />
            <TextBlock
                titles={[
                    {
                        id: 1,
                        text: "Добавьте ярких красок",
                        blue: true,
                        p: "У вас есть замечательная возможность сделать особенный подарок для ваших близких — купить подарочный сертификат на любые наши услуги."
                    },
                    {
                        id: 2,
                        text: "в свою жизнь и жизнь близких",
                        blue: false,
                        p: "Позвольте им ощутить ветер в парусах, окунуться в мир ярких морских приключений и создать незабываемые воспоминания на долгие годы."
                    }
                ]}
                btn="Оформить сертификат"
                link="certificates" />
            <FormBlock
                titles={[
                    {
                        title: "Заполните форму и получите",
                        blue: false,
                    },
                    {
                        title: "скидку на первое посещение",
                        blue: true,
                    }
                ]}
                imgLink="./images/form-right.png"
                formPosition="right" />
            <Map />
        </div>
    )
}