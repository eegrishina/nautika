import { React, useState } from 'react';
import { Link } from "react-router-dom";
import ScrollBtn from './ScrollBtn';

export default function GallerryBig({ images }) {
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState(0);

    function handleClickLeft() {
        setCount(count + 1);
        setPosition(position - 300);
    }

    function handleClickRight() {
        setCount(count - 1);
        setPosition(position + 300);
    }

    const galleryItem = images.map((i, idx) => {
        return (
            <div key={idx} className={i.gridSize ? 'gallery-container ' + i.gridSize : 'gallery-container'}>
                <div className='gallery-item'>
                    <div className='gallery-img'>
                        {i.src === '' ?
                            <div className='gallery-photo-textblock w-2'>
                                <h6>Внесите краски в свою жизнь и в жизнь своих близких</h6>
                                <p className='card'>У нас вы можете преобрести подарочные сертификаты на любую из предоставляемых услуг. Подарите своим близким незабываемые морские впечатления!</p>
                                <Link to='/certificates'><button className='main-btn'>Оформить сертификат</button></Link>
                            </div> :
                            <img src={i.src} alt=''></img>}
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className='gallery-big'>
            <div className='gallery-big-title'>
                <h3>подарочные <span className='blue'>сертификаты</span></h3>
                <ScrollBtn disabledLeft={count < 1}
                    disabledRight={count > 3}
                    handleClickLeft={handleClickLeft}
                    handleClickRight={handleClickRight} />
            </div>
            <div className='gallery-big-photos'
                style={{ transform: `translateX(${position}px)` }}>
                {galleryItem}
            </div>
        </div>
    )
}