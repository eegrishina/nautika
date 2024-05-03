import React from 'react';
import FirstScreen from '../components/FirstScreen';
import TextBlock from '../components/TextBlock';
import FormBlock from '../components/FormBlock';

export default function About() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship-about.png'
                specialImgClass="img-about"
                title="знакомство с наутикой"
                small="Давайте узнаем друг друга немного ближе"
                btn="Получить консультацию" />
            <TextBlock
                titles={[
                    {
                        id: 1,
                        text: "Впустите парусный спорт",
                        blue: true,
                        p: "Приглашаем вас в нашу парусную школу, где каждый может найти свой путь к морскому мастерству."
                    },
                    {
                        id: 2,
                        text: "в свою жизнь прямо сейчас",
                        blue: false,
                        p: "Независимо от того, опытный вы моряк или только начинаете свой путь, наша команда с нетерпением ждет возможности поделиться своей страстью к морю и своими знаниями с вами."
                    }
                ]}
                btn="Оформить сертификат"
                link="certificates" />
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
                formType="questions" />
        </div>
    )
}