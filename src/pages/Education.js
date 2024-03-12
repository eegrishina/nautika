import React from 'react';
import FirstScreen from '../components/FirstScreen';
import PriceCards from '../components/PriceCards';
import ScrollTexts from '../components/ScrollTexts';
import GallerrySmall from '../components/GallerySmall';
import TextBlock from '../components/TextBlock';
import FAQs from '../components/FAQs';
import FormBlock from '../components/FormBlock';

export default function Education() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship-education.png'
                title="Обучение яхтингу"
                small="Ваш путь к парусному искусству начинается здесь."
                btn="Записаться на тренировку" />
            <PriceCards
                mainTitles={[
                    {
                        title: "Обучение на яхте",
                        blue: true,
                    },
                    {
                        title: "класса «Луч»",
                        blue: false,
                    }
                ]}
                mainText="Получите навыки управления и навигации под руководством опытных инструкторов."
                discount="Действуют скидки для начинающих, студентов и пенсионеров"
                props={[
                    {
                        cardTitle: "Ознакомительный урок",
                        cardText: "Получите свое первое впечатление о яхте «Луч». Научим вас вооружать яхту перед выходом в море, а также объясним и покажем на практике основные приципы управления яхтой и настройки парусов.",
                        cardPrice: "4 500 ₽",
                        cardTime: "2 часа",
                        cardBtn: "Записаться на тренировку",
                        imgVisible: "none",
                    },
                    {
                        cardTitle: "Почасовое обучение",
                        cardText: "Гибкий почасовой формат занятий позволяет вам выбирать удобное время и продолжительность обучения, делая первые шаги к морскому мастерству легкими и доступными.",
                        cardPrice: "3 000 ₽ / час",
                        cardTime: "от 2-х часов",
                        cardBtn: "Записаться на тренировку",
                        imgVisible: "none",
                    },
                    {
                        cardTitle: "Базовый курс",
                        cardText: "Наш базовый курс — это поэтапное введение в мир парусного искусства. Он разработан для тех, кто хочет освоить фундаментальные навыки морской навигации и управления яхтой.",
                        cardPrice: "19 000 ₽",
                        cardTime: "8 часов",
                        cardBtn: "Записаться на тренировку",
                        imgVisible: "none",
                    }
                ]} />
            <ScrollTexts
                mainTitle={[
                    {
                        title: "освойте яхтенную теорию",
                        blue: false,
                    },
                    {
                        title: "всего за четыре этапа",
                        blue: true,
                    }
                ]}
                props={[
                    {
                        title: "Ветровая теория и техника",
                        text: "На первом этапе обучения объясним и наглядно покажем ветровую теорию и влияние ветра на яхту. Кроме того, изучаются части яхты и их назначение, а также осваивается техника постановки и управления парусами и рулем."
                    },
                    {
                        title: "Теория и практика навигации",
                        text: "Изучаем теорию курсов и учимся определять направление движения яхты, затем отрабатываем галсы, лавировку и поворот оверштаг. Также обязательно объясняем первые необходимые действия при перевороте яхты."
                    },
                    {
                        title: "Правила расхождения",
                        text: "Углубляемся в навигацию и подробно изучаем правила расхождения для безопасно передвижения и взаимодействия с другими судами на воде. Также осваиваем поворот фордевинд и технику движения всеми курсами."
                    },
                    {
                        title: "Lorem ipsum dolor",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio nobis sapiente, error ratione, vitae ipsam accusantium, nulla saepe autem numquam odio! Reprehenderit nisi, doloribus commodi veniam similique modi dignissimos."
                    },
                ]} />
            <GallerrySmall
                title="Как проходят тренировки"
                text="Наши уроки на яхте класса «Луч» ориентированы в первую очередь на практическое обучение. Теоретический материал интегрируется непосредственно в упражнения, обеспечивая применение знаний на практике."
                images={[
                    {
                        id: 0,
                        src: "./images/gallery-small6.png",
                    },
                    {
                        id: 11,
                        src: "./images/gallery-small11.jpeg",
                    },
                    {
                        id: 1,
                        src: "./images/gallery-small1.png",
                    },
                    {
                        id: 9,
                        src: "./images/gallery-small9.png",
                    },
                    {
                        id: 3,
                        src: "./images/gallery-small3.jpeg",
                    },
                    {
                        id: 12,
                        src: "./images/gallery-small12.jpeg",
                    },
                    {
                        id: 10,
                        src: "./images/gallery-small10.jpeg",
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
                        question: "Какие меры безопасности принимаются во время занятий?",
                        answer: "Занятия проводятся под контролем опытных инструкторов, обладающих всеми необходимыми компетенциями, в том числе навыками оказания первой помощи. Вы в обязательном порядке получаете спасательный жилет и проходите краткий инструктаж перед началом занятий. Также, находясь на воде, мы всегда имеем возможность связаться со спасателями.",
                    },
                    {
                        id: 2,
                        question: "Какие требования к возрасту для участия в обучении?",
                        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ipsa optio, dignissimos tempora distinctio obcaecati doloremque, alias laborum dolorem voluptas ab adipisci molestias, provident iure est sed quidem architecto deserunt autem. Dolor quibusdam consequatur explicabo laborum. Beatae hic veritatis quam!",
                    },
                    {
                        id: 3,
                        question: "Есть ли возможность арендовать яхту после окончания курса?",
                        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit officia cum molestiae magni repellat error debitis perspiciatis suscipit. Veniam, nam.",
                    },
                    {
                        id: 4,
                        question: "Какие дополнительные материалы или снаряжение нужно приносить на уроки?",
                        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod modi dicta distinctio consectetur dignissimos quas consequuntur, illum placeat eius vitae voluptates voluptatem aliquam non aspernatur itaque ipsam. Quod ea ab corporis praesentium quam consectetur.",
                    },
                    {
                        id: 5,
                        question: "Есть ли у вас сертификаты или аккредитации для ваших инструкторов?",
                        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit officia cum molestiae magni repellat error debitis perspiciatis suscipit. Aut sint blanditiis enim voluptatibus facilis aspernatur! Veniam, nam.",
                    },
                    {
                        id: 6,
                        question: "Как долго длится базовый курс обучения на яхте?",
                        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium facere sit delectus iusto soluta, illum dignissimos enim consequatur doloribus!",
                    },
                    {
                        id: 7,
                        question: "Каковы условия отмены или переноса занятий?",
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