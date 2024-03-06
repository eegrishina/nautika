import React from 'react';
import FirstScreen2 from '../components/FirstScreen2';

export default function Thanks() {
    return (
        <div className='container'>
            <FirstScreen2 imgPath='./images/main-ship-services.png'
                title="благодарим вас за доверие"
                small="Ваш запрос был успешно оформлен, проверьте свою электронную почту."
                style={{width: '500px'}}
                btns={[
                    {
                        text: "Вернуться на главную",
                    },
                    {
                        text: "Перейти к услугам",
                        class: "white",
                    }
                ]} />
        </div>
    )
}