import { React, useState } from 'react';
import { Link } from "react-router-dom";
import ScrollBtn from './ScrollBtn';
import GallerrySmallScreen from './GallerySmallScreen';

export default function GallerryGrid({ title, text, link, textBtn, images }) {
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState(0);

    function handleClickLeft() {
        setCount(count + 1);
        setPosition(position - 280);
    }

    function handleClickRight() {
        setCount(count - 1);
        setPosition(position + 280);
    }

    const imagesGalleryGrid = images.map((i, idx) => {
        return (
            <div key={idx} className={i.gridSize}>
                <div className='grid-item'>
                    <div className='grid-img'>
                        {i.src === '' ?
                            <div className='gallery-textblock w-2'>
                                <h6>{title}</h6>
                                <p className='card'>{text}</p>
                                <Link to={link}><button className='main-btn'>{textBtn}</button></Link>
                            </div> :
                            <img src={i.src} alt=''></img>}
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className='gallery-grid'>
            <div className='gallery-grid-title'>
                <h3>подарочные <span className='blue'>сертификаты</span></h3>
                <ScrollBtn disabledLeft={count < 1}
                    disabledRight={count > 3}
                    handleClickLeft={handleClickLeft}
                    handleClickRight={handleClickRight} />
            </div>

            <div className='grid-container'
                style={{ transform: `translateX(${position}px)` }}>
                {imagesGalleryGrid}
            </div>

            <GallerrySmallScreen
                title={title} text={text} link={link}
                textBtn={textBtn} images={images} />
        </div>
    )
}