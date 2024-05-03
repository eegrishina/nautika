import { React, useState } from 'react';
import ScrollBtn from './ScrollBtn';
import GallerrySmallScreen from './GallerySmallScreen';

export default function GallerrySimple({ title, text, images }) {
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState(0);

    function handleClickLeft() {
        setCount(count < imagesGallerySimple.length ? count + 1 : count);
        setPosition(position - 300);
    }

    function handleClickRight() {
        setCount(count > 0 ? count - 1 : 0);
        setPosition(position + 300);
    }

    const imagesGallerySimple = images.map((i, idx) => {
        return (
            <li key={i.id} className={count === idx ? 'big' : undefined}>
                <img src={i.src} alt=""></img>
            </li>
        )
    })

    return (
        <>
            <div className='gallery-simple'>
                <div className='gallery-simple-images'
                    style={{ transform: `translateX(${position}px)` }}>
                    {imagesGallerySimple}
                </div>

                <div className='gallery-textblock'>
                    <h6>{title}</h6>
                    <p className='card'>{text}</p>
                    <ScrollBtn disabledLeft={count < 1}
                        disabledRight={count > imagesGallerySimple.length - 2}
                        handleClickLeft={handleClickLeft}
                        handleClickRight={handleClickRight} />
                </div>
            </div>

            <GallerrySmallScreen title={title} text={text} images={images} />
        </>
    )
}