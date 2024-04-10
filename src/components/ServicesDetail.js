import React from "react";
import ServicesPrice from "./ServicesPrice";

export default function ServicesDetail() {
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
            ]
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
            ]
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
            ]
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
            ]
        }
    ];

    const listInfoPrice = infoPrice.map(i => {
        return (
            <ServicesPrice key={i.id} title={i.title} data={i.data} path={i.path} />
        )
    })

    return (
        <div className="services-detail">
            {listInfoPrice}
        </div>
    )
}
