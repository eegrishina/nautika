import React from 'react';
import FirstScreen from '../components/FirstScreen';
import TextBlock from '../components/TextBlock';
import Journey from '../components/Journey';
import Statistics from '../components/Statistics';
import ChooseYacht from '../components/ChooseYacht';

export default function Home() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship.png' />
            <TextBlock
                title1="От крепкой любви к морю"
                title2="к открытию парусной школы"
                blue1={false} blue2={true}
                p1="Школа «Наутика» зародилась в 2017 году в Новосибирске под трепетным руководством Евгении Белых."
                p2="Изначально это было семейное увлечение парусным искусством, но вскоре оно переросло в возможность для многих наслаждаться морскими приключениями, шумом волн и свободой свежего ветра."
                btn="Узнать подробнее"
                link="about" />
            <Journey />
            <Statistics />
            <ChooseYacht />
            <TextBlock
                title1="Добавьте ярких красок"
                title2="в свою жизнь и жизнь близких"
                blue1={true} blue2={false}
                p1="У вас есть замечательная возможность сделать особенный подарок для ваших близких — купить подарочный сертификат на любые наши услуги."
                p2="Позвольте им ощутить ветер в парусах, окунуться в мир ярких морских приключений и создать незабываемые воспоминания на долгие годы."
                btn="Оформить сертификат"
                link="certificates" />
        </div>
    )
}