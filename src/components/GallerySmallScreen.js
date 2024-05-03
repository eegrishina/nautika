import { React } from 'react';
import { Link } from "react-router-dom";

export default function GallerrySmallScreen({ title, text, link, textBtn, images, styleScrollBtn }) {

    const imagesSmallScreen = images
        .filter((i) => i.src !== '')
        .map((i, idx) => {
            return (
                <div key={idx} className='gallery-img'>
                    <img src={i.src} alt=''></img>
                </div>
            )
        })

    return (
        <div className='gallery-small-screen'>
            <div className='images-small-screen'
                style={styleScrollBtn}>
                {imagesSmallScreen}
            </div>
            <div className='gallery-textblock'>
                <h6>{title}</h6>
                <p className='card'>{text}</p>
                <Link to={link}><button className='main-btn'>{textBtn}</button></Link>
            </div>
        </div>
    )
}