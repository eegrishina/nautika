import React from 'react';
import FirstScreen from '../components/FirstScreen';
import ServicesDetail from '../components/ServicesDetail';
import GallerryBig from '../components/GalleryBig';
import FormBlock from '../components/FormBlock';
import Map from '../components/Map';

export default function Services() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship-services.png'
                title="приключения под парусом"
                small="С нами каждая морская мечта становится реальностью."
                btn="Получить консультацию" />
            <ServicesDetail />
            <GallerryBig />
            <FormBlock
                titles={[
                    {
                        title: "Заполните форму и получите",
                        blue: false,
                    },
                    {
                        title: "скидку на первое посещение",
                        blue: true,
                    }
                ]}
                imgLink="./images/form-right.png"
                formPosition="right" />
            <Map />
        </div>
    )
}