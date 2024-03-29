import React from 'react';

export default function HowToGo() {
    return (
        <div className='how-to-go'>
            <h3>Как до нас добраться</h3>
            <div className='how-flex'>
                <div className='how-block'>
                    <h6>На машине</h6>
                    <p className='card'>По Бердскому шоссе в сторону Академгородка, до ул. Русская. Проехать под вывеской пляжа «Звезда» до шлагбаума, где сообщаете, что вы направляетесь в яхт-клуб «Наука». Въезд бесплатный.</p>
                    <a href='https://yandex.ru/maps/65/novosibirsk/?ll=83.049680%2C54.836062&mode=routes&rtext=~54.836062%2C83.049679&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTk4MTkxOTM4EkbQoNC-0YHRgdC40Y8sINCd0L7QstC-0YHQuNCx0LjRgNGB0LosINCR0LXRgNC00YHQutC40Lkg0YLRg9C_0LjQuiwgOS8xIgoNcBmmQhUgWFtC&z=16.76'>Посмотреть маршрут на карте</a>
                </div>
                <div className='how-block'>
                    <h6>Своим ходом</h6>
                    <p className='card'>Из города автобусом № 36 до остановки «ТЦ Гигант». Далее дойти до пляжа «Звезда», повернуть направо и пройти прямо до яхт-клуб «Наука». Также можно добраться на электричке до станции «Сеятель».</p>
                    <a href='https://yandex.ru/maps/65/novosibirsk/?ll=83.049680%2C54.836062&mode=routes&rtext=~54.836062%2C83.049679&rtt=mt&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTk4MTkxOTM4EkbQoNC-0YHRgdC40Y8sINCd0L7QstC-0YHQuNCx0LjRgNGB0LosINCR0LXRgNC00YHQutC40Lkg0YLRg9C_0LjQuiwgOS8xIgoNcBmmQhUgWFtC&z=16.76'>Посмотреть маршрут на карте</a>
                </div>
            </div>
        </div>
    )
}