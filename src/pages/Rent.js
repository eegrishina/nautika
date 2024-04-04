import React from 'react';
import FirstScreen from '../components/FirstScreen';
import PriceCards from '../components/PriceCards';
import ScrollTexts from '../components/ScrollTexts';
import YachtDetail from '../components/YachtDetail';
import TextBlock from '../components/TextBlock';
import FAQs from '../components/FAQs';
import FormBlock from '../components/FormBlock';

export default function Rent() {
    return (
        <div className='container'>
            <FirstScreen type="center"
                imgPath='./images/main-ship-rent2.png'
                title="прокат и аренда парусных яхт"
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
            <ScrollTexts
                mainTitle={[
                    {
                        title: "Арендуйте парусную яхту",
                        blue: true,
                    },
                    {
                        title: "для ваших увлекательных морских приключений",
                        blue: false,
                    }
                ]}
                props={[
                    {
                        title: "условия аренды",
                        text: "Швертботы «Луч» и «Финн» можно взять в прокат после прохождения обучения или небольшого теоретического экзамена, если вы учились в других школах. «Солинг» сдается в аренду только при предоставлении прав ВФПС или ГИМС."
                    },
                    {
                        title: "Что включено",
                        text: "Всё необходимое оборудование, такое как спасательные жилеты, гидрокостюм и т. д., входит в стоимость проката. Яхта сдается под залог документа или денежной суммы эквивалентной стоимости арендуемого оборудования."
                    },
                    {
                        title: "Подготовка яхты",
                        text: "Мы берем на себя всю подготовку и оснащение яхты. Если вы заинтересованы, у вас есть возможность приехать за час до запланированного старта, понаблюдать за процессом или даже принять в нем участие."
                    },
                    {
                        title: "Lorem ipsum dolor",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio nobis sapiente, error ratione, vitae ipsam accusantium, nulla saepe autem numquam odio! Reprehenderit nisi, doloribus commodi veniam similique modi dignissimos."
                    },
                    {
                        title: "Lorem dolor",
                        text: "Eius distinctio nobis sapiente, error ratione, vitae ipsam accusantium, nulla saepe autem numquam odio! Reprehenderit nisi, doloribus commodi veniam similique modi dignissimos."
                    },
                ]} />
            <YachtDetail
                details={[
                    {
                        id: 1,
                        name: '«Луч»',
                        info: ' — олимпийский класс яхт, рассчитанный на одного человека, который занимается и управлением яхтой, и настройкой паруса.',
                        list: [
                            'Длина корпуса: 4 м',
                            'Ширина корпуса: 1,37 м',
                            'Осадка: 0,6 м',
                            'Водоизмещение: 160 кг',
                            'Грот: 7,05 м²'
                        ]
                    },
                    {
                        id: 2,
                        name: '«Солинг»',
                        info: ' — класс яхт, предназначенный для пяти человек, на которой капитан занимается  управлением яхтой, а экипаж помогает с настройкой паруса.',
                        list: [
                            'Длина корпуса: 10 м',
                            'Ширина корпуса: 4,56 м',
                            'Осадка: 0,9 м',
                            'Водоизмещение: 240 кг',
                            'Грот: 14,25 м²'
                        ]
                    },
                    {
                        id: 3,
                        name: '«Финн»',
                        info: ' — класс яхт, предназначенный для двоих человек, либо для управления одним человеком с достаточной массой тела.',
                        list: [
                            'Длина корпуса: 4 м',
                            'Ширина корпуса: 1,88 м',
                            'Осадка: 0,7 м',
                            'Водоизмещение: 160 кг',
                            'Грот: 8,35 м²'
                        ]
                    }
                ]} />
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
            <FAQs
                props={[
                    {
                        id: 1,
                        question: "Есть ли возможность взять снаряжение в аренду?",
                        answer: "Culpa ipsa optio, dignissimos tempora distinctio obcaecati doloremque, alias laborum dolorem voluptas ab adipisci molestias, provident iure est sed quidem architecto deserunt autem.",
                    },
                    {
                        id: 2,
                        question: "Как происходит процесс получения и возврата арендованных яхт?",
                        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ipsa optio, dignissimos tempora distinctio obcaecati doloremque, alias laborum dolorem voluptas ab adipisci molestias, provident iure est sed quidem architecto deserunt autem. Dolor quibusdam consequatur explicabo laborum. Beatae hic veritatis quam!",
                    },
                    {
                        id: 3,
                        question: "Есть ли особые требования к чистоте и уборке перед возвратом арендованных яхт?",
                        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit officia cum molestiae magni repellat error debitis perspiciatis suscipit. Veniam, nam.",
                    },
                    {
                        id: 4,
                        question: "Как получить помощь в случае неотложных ситуаций?",
                        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod modi dicta distinctio consectetur dignissimos quas consequuntur, illum placeat eius vitae voluptates voluptatem aliquam non aspernatur itaque ipsam. Quod ea ab corporis praesentium quam consectetur.",
                    },
                    {
                        id: 5,
                        question: "Есть ли ограничения по возрасту?",
                        answer: "Odit officia cum molestiae magni repellat error debitis perspiciatis suscipit. Aut sint blanditiis enim voluptatibus facilis aspernatur! Veniam, nam.",
                    },
                    {
                        id: 6,
                        question: "Есть ли дополнительные расходы, например, топливо?",
                        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium facere sit delectus iusto soluta, illum dignissimos enim consequatur doloribus!",
                    },
                    {
                        id: 7,
                        question: "Какова политика возврата средств в случае неблагоприятных условий или изменения планов?",
                        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod modi dicta distinctio consectetur dignissimos quas consequuntur, illum placeat eius vitae voluptates voluptatem aliquam non aspernatur itaque ipsam. Quod ea ab corporis praesentium quam consectetur.",
                    },
                ]} />
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