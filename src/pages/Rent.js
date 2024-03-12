import React from 'react';
import FirstScreen from '../components/FirstScreen';
import PriceCards from '../components/PriceCards';

export default function Rent() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship-rent.png'
                title="парусные яхты для аренды"
                small="Аренда яхт для ваших морских путешествий"
                btn="Забронировать яхту" />
            <PriceCards
                mainTitles={[
                    {
                        title: "Прокат и ",
                        blue: false,
                    },
                    {
                        title: "аренда яхт",
                        blue: true,
                    }
                ]}
                mainText="Мы предлагаем разнообразные варианты аренды яхт для ваших морских приключений. Незабываемые моменты уже совсем близко!"
                discount="Действуют скидки для начинающих, студентов и пенсионеров"
                props={[
                    {
                        cardTitle: "Аренда яхты «Луч»",
                        cardText: "Яхта выдерживает вес двух взрослых людей, поэтому вы можете отправиться в плавание в одиночку или же взять с собой компаньона.",
                        cardPrice: "2 000 ₽ / час",
                        cardTime: "до 2-х человек",
                        cardBtn: "Забронировать яхту",
                        imgVisible: "block",
                        imgLink: "./images/icons/icon-luch.png",
                    },
                    {
                        cardTitle: "Аренда яхты «Солинг»",
                        cardText: "Пригласите своих друзей и близких, и отправляйтесь с нами в настоящее яхтенное приключение, исследовать просторы акватории Обского моря.",
                        cardPrice: "4 000 ₽ / час",
                        cardTime: "до 4-х человек",
                        cardBtn: "Забронировать яхту",
                        imgVisible: "block",
                        imgLink: "./images/icons/icon-soling.png",
                    },
                    {
                        cardTitle: "Аренда яхты «Финн»",
                        cardText: "Хотя яхта рассчитана на двоих, если вы сильны и имеете достаточную массу тела, то вполне можете попробовать управлять ей самостоятельно.",
                        cardPrice: "2 000 ₽ / час",
                        cardTime: "до 2-х человек",
                        cardBtn: "Забронировать яхту",
                        imgVisible: "block",
                        imgLink: "./images/icons/icon-finn.png",
                    },
                ]} />
        </div>
    )
}