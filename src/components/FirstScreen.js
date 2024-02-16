import React from 'react';

export default function FirstScreen({ imgPath, title, small, btn }) {
    return (
        <div className='main-info'>
            <h1>{title}</h1>
            <div className='main-column'>
                <small>{small}</small>
                <img className='main-img' src={imgPath} alt=''></img>
                <div className='main-btnblock'>
                    <button className='main-btn'>{btn}</button>
                </div>
            </div>
        </div>
    );
}