import React from 'react';
import FirstScreen from '../components/FirstScreen';
import ServicesDetail from '../components/ServicesDetail';
import GallerryBig from '../components/GalleryBig';
import FormBlock from '../components/FormBlock';
import Map from '../components/Map';

export default function Services() {
    return (
        <div className='container'>
            <FirstScreen type="center"
                imgPath='./images/main-ship-services.png'
                title="приключения под парусом"
                small="С нами каждая морская мечта становится реальностью"
                btn="Получить консультацию" />
            <ServicesDetail />
            <GallerryBig
                images={[
                    {
                        src: './images/gallery-big1.png',
                    },
                    {
                        src: './images/gallery-big2.png',
                    },
                    {
                        src: './images/gallery-big3.png',
                        gridSize: 'h-2',
                    },
                    {
                        src: './images/gallery-big4.png',
                    },
                    {
                        src: './images/gallery-big5.png',
                    },
                    {
                        src: './images/gallery-big6.png',
                        gridSize: 'h-2',
                    },
                    {
                        src: './images/journey.png',
                    },
                    {
                        src: './images/gallery-small11.jpeg',
                    },
                    {
                        src: '',
                        gridSize: 'w-2',
                    },
                    {
                        src: './images/journey.png',
                    },
                    {
                        src: './images/gallery-small11.jpeg',
                    },
                    {
                        src: './images/gallery-big5.png',
                    },
                    {
                        src: './images/gallery-big4.png',
                    },
                ]} />
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
                formType="discount" />
            <Map />
        </div>
    )
}