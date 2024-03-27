import React from 'react';
import FirstScreen from '../components/FirstScreen';
import PriceCards from '../components/PriceCards';
import ScrollTexts from '../components/ScrollTexts';
import GallerrySmall from '../components/GallerySmall';
import TextBlock from '../components/TextBlock';
import FAQs from '../components/FAQs';
import FormBlock from '../components/FormBlock';

export default function Walks() {
    return (
        <div className='container'>
            <FirstScreen type="center"
                imgPath='./images/main-ship-walk.png'
                title="морские прогулки"
                small="Отправляйтесь с нами в увлекательные морские приключения"
                btn="Записаться на прогулку" />
            <PriceCards
                mainTitles={[
                    {
                        title: "Прогулки на яхте",
                        blue: true,
                    },
                    {
                        title: "класса «Солинг»",
                        blue: false,
                    }
                ]}
                mainText="Вас ждут красивейшие виды Обского моря под шум воды и трепет парусов. А непередаваемые ощущения от прогулки мы запечатлим на профессиональную камеру."
                discount="Действуют скидки для начинающих, студентов и пенсионеров"
                props={[
                    {
                        cardTitle: "Почасовая прогулка",
                        cardText: "Почасовая морская прогулка — это возможность уйти от городской суеты. Соберите близких и отправьтесь в незабываемое приключение на яхте, наслаждаясь свежим ветром. С понедельника по четверг третий час в подарок.",
                        cardPrice: "3 000 ₽ / час",
                        cardTime: "до 4-х человек",
                        cardBtn: "Записаться на тренировку",
                        imgVisible: "none",
                    },
                    {
                        cardTitle: "круиз по обскому морю",
                        cardText: "Наш шестичасовой круиз — это полноценное морское путешествие, под руководством опытного капитана. Вы сможете наслаждаться морскими видами, подходить к островам и исследовать удивительные места, создавая незабываемые воспоминания.",
                        cardPrice: "15 000 ₽",
                        cardTime: "до 4-х человек",
                        cardBtn: "Записаться на тренировку",
                        imgVisible: "none",
                    },
                ]} />
            <ScrollTexts
                mainTitle={[
                    {
                        title: "откройте для себя новый",
                        blue: false,
                    },
                    {
                        title: "мир яхтенных приключений",
                        blue: true,
                    }
                ]}
                props={[
                    {
                        title: "Место встречи",
                        text: "Стартуем с яхт-клуба «Наука», расположенного в 100 метрах от нашей школы. Выходим на акваторию Обского водохранилища и катаемся, загораем и купаемся в ваше удовольствие."
                    },
                    {
                        title: "Что включено",
                        text: "В стоимость любой прогулки входят аренда яхты, работа капитана, вся необходимая экипировка и несколько снимков на камеру. От вас необходимо лишь одеться по погоде и приехать к нам."
                    },
                    {
                        title: "Программа прогулки",
                        text: "Программа прогулок зависит от погодных условий, длительности и ваших предпочтений. Вы можете загорать, купаться, пробовать себя в роли капитана или устроить пикник на борту или даже на острове."
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
            <GallerrySmall
                title="Как проходят прогулки"
                text="Для создания новых ярких воспоминаний больше не нужно далеко ехать. Отдохните недалеко от города на наших уютных яхтах в компании своих друзей и близких. Наши прогулки — это несколько часов расслабления и безмятежности, веселья и радости."
                images={[
                    {
                        id: 13,
                        src: "./images/gallery-small13.png",
                    },
                    {
                        id: 101,
                        src: "./images/journey.png",
                    },
                    {
                        id: 14,
                        src: "./images/gallery-small14.jpeg",
                    },
                    {
                        id: 12,
                        src: "./images/gallery-small12.jpeg",
                    },
                    {
                        id: 7,
                        src: "./images/gallery-small7.jpeg",
                    },
                    {
                        id: 103,
                        src: "./images/main-ship-contacts.png",
                    },
                    {
                        id: 102,
                        src: "./images/gallery-big2.png",
                    },
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
                        question: "Какие меры безопасности принимаются во время прогулок?",
                        answer: "Прогулки проводятся под контролем опытных инструкторов, обладающих всеми необходимыми компетенциями, в том числе навыками оказания первой помощи. Вы в обязательном порядке получаете спасательный жилет и проходите краткий инструктаж перед началом прогулки. Также, находясь на воде, мы всегда имеем возможность связаться со спасателями.",
                    },
                    {
                        id: 2,
                        question: "Можно ли на яхту с животными?",
                        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ipsa optio, dignissimos tempora distinctio obcaecati doloremque, alias laborum dolorem voluptas ab adipisci molestias, provident iure est sed quidem architecto deserunt autem. Dolor quibusdam consequatur explicabo laborum. Beatae hic veritatis quam!",
                    },
                    {
                        id: 3,
                        question: "Можно ли на яхту с детьми?",
                        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit officia cum molestiae magni repellat error debitis perspiciatis suscipit. Veniam, nam.",
                    },
                    {
                        id: 4,
                        question: "Что нужно взять с собой на прогулку?",
                        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod modi dicta distinctio consectetur dignissimos quas consequuntur, illum placeat eius vitae voluptates voluptatem aliquam non aspernatur itaque ipsam. Quod ea ab corporis praesentium quam consectetur.",
                    },
                    {
                        id: 5,
                        question: "Яхта может перевернуться?",
                        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit officia cum molestiae magni repellat error debitis perspiciatis suscipit. Aut sint blanditiis enim voluptatibus facilis aspernatur! Veniam, nam.",
                    },
                    {
                        id: 6,
                        question: "На яхте укачивает?",
                        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium facere sit delectus iusto soluta, illum dignissimos enim consequatur doloribus!",
                    },
                    {
                        id: 7,
                        question: "Каковы условия отмены или переноса прогулок?",
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
                formPosition="left" />
        </div>
    )
}