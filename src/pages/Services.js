import React from 'react';
import FirstScreen from '../components/FirstScreen';
import ServicesDetail from '../components/ServicesDetail';
import GallerryBig from '../components/GalleryBig';

export default function Services() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship-services.png'
                title="приключения под парусом"
                small="С нами каждая морская мечта становится реальностью."
                btn="Получить консультацию" />
            <ServicesDetail />
            <GallerryBig />
        </div>
    )
}