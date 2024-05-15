const api = [
    {
        id: 'home',
        imgTitle: '/public/images/main-ship.png',
    },
    {
        id: 'education',
        journey: true,
        imgTitle: '',
        title: 'Обучение',
        text: 'Сделайте первые шаги в парусный спорт.',
    },
    {
        id: 'walks',
        journey: true,
        imgTitle: '',
        title: 'Прогулки',
        text: 'Почувствуйте себя настоящим капитаном.',
    },
    {
        id: 'rent',
        journey: true,
        imgTitle: '',
        title: 'Аренда яхт',
        text: 'Совершайте путешествия на наших яхтах.',
    },
    {
        id: 'certificates',
        journey: true,
        imgTitle: '',
        title: 'Фотосессии',
        text: 'Запечатлите свои морские приключения на камеру.',
    },
    {
        id: '404',
        imgTitle: '/public/images/404.png',
    }
];

const apiYacht = [
    {
        id: 'luch',
        active: true,
        name: 'Луч',
        description: '«Луч» — олимпийский класс яхт, предназначенный для одного человека, который одновременно занимается и управлением яхтой, и настройкой паруса. Эта легкая и динамичная яхта отлично подходит для тренировки реакции и баланса.'
    },
    {
        id: 'soling',
        active: false,
        name: 'Солинг',
        description: '«Солинг» — класс яхт, предназначенный для пяти человек, на которой капитан занимается  управлением яхтой, а экипаж помогает с настройкой паруса. Эта яхта отлично подходит для многочасовых круизов всей семьей.',
    },
    {
        id: 'finn',
        active: false,
        name: 'Финн',
        description: '«Финн» — класс яхт, предназначенный для двоих человек, которые разделяют обязанности по управлению яхтой и настройкой паруса. Однако если вы сильны и имеете достаточную массу тела, то вполне можете попробовать управлять ей самостоятельно.',
    }
];

const infoPrice = [
    {
        id: 1,
        title: "Обучение на «Луче»",
        path: "/education",
        data: [
            {
                title: "Ознакомительный урок",
                text: "Получите первое впечатление о яхте «Луч»",
                price: "4 500 ₽",
            },
            {
                title: "Почасовое обучение",
                text: "Занимайтесь с инструктором сколько хотите",
                price: "3 000 ₽ / час",
            },
            {
                title: "Базовый курс",
                text: "Получите основные навыки управления и навигации",
                price: "19 000 ₽",
            }
        ],
        disabled: true,
    },
    {
        id: 2,
        title: "Прогулки на «Солинге»",
        path: "/walks",
        data: [
            {
                title: "Почасовая прогулка",
                text: "С понедельника по четверг третий час в подарок",
                price: "3 000 ₽ / час",
            },
            {
                title: "Круиз по Обскому морю",
                text: "Шестичасовой круиз с маршрутом на ваш выбор",
                price: "15 000 ₽",
            }
        ],
        disabled: true,
    },
    {
        id: 3,
        title: "Аренда яхт",
        path: "/rent",
        data: [
            {
                title: "Яхта «Луч»",
                text: "Яхта рассчитана только на одного человека",
                price: "2 000 ₽ / час",
            },
            {
                title: "Яхта «Солинг»",
                text: "Яхта рассчитана максимум на шестерых человек",
                price: "2 000 ₽ / час",
            },
            {
                title: "Яхта «Финн»",
                text: "Яхта рассчитана на одного или двух человек",
                price: "2 000 ₽ / час",
            }
        ],
        disabled: true,
    },
    {
        id: 4,
        title: "Фотосессии на яхте",
        path: "/certificates",
        data: [
            {
                title: "Стандартная",
                text: "Во время прогулки капитан сделает несколько снимков на профессиональную камеру",
                price: "бесплатно",
                free: true,
            },
            {
                title: "«Мое морское путешествие»",
                text: "Оплачивается отдельно от прогулки и включает 30–50 обработанных фото",
                price: "2 000 ₽",
            }
        ],
        disabled: false,
    }
];

const formData = [
    {
        name: "name",
        placeholder: "Имя",
        label: "Ваше имя*",
        type: "text",
        required: true,
        pattern: "^[a-zа-яё]+$",
        style: "w-2",
    },
    {
        name: "lastname",
        placeholder: "Фамилия",
        label: "Ваша фамилия*",
        type: "text",
        required: true,
        pattern: "^[a-zа-яё]+$",
        style: "w-2",
    },
    {
        name: "phone",
        placeholder: "+7(     )     -    - ",
        label: "Номер телефона*",
        type: "text",
        required: true,
        pattern: "^\\+?[0-9]{11,13}$",
    },
    {
        name: "email",
        placeholder: "Адрес эл. почты",
        label: "Электронная почта*",
        type: "email",
        required: true,
        pattern: "^[\\-.\\w]+@([\\-\\w]+\\.)+[\\-\\w]+$"
    },
];

const initialFormData = {
    name: "",
    lastname: "",
    phone: "",
    email: "",
}

export { api, apiYacht, formData, initialFormData, infoPrice };