import React from 'react';
import FirstScreen from '../components/FirstScreen';

export default function Thanks() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship-services.png'
                title="благодарим вас за доверие"
                small="Ваш запрос был успешно оформлен, проверьте свою электронную почту"
                style={{ width: '500px' }}
                btns={[
                    {
                        text: "Вернуться на главную",
                        link: "/",
                    },
                    {
                        text: "Перейти к услугам",
                        class: "white",
                        link: '/services',
                    }
                ]} />
        </div>
    )
}