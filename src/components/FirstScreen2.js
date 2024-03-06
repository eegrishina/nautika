import React from 'react';

export default function FirstScreen2({ imgPath, title, small, style, btns }) {
    const buttons = btns.map((i, idx) => {
        return (
            <button key={idx} className={i.class ? i.class + ' main-btn' : 'main-btn'}>{i.text}</button>
        )
    })

    return (
        <div className='main-info'>
            <div className='main-info-flex'>
                <div className='main-info-column'>
                    <h1>{title}</h1>
                    <small style={style}>{small}</small>
                    <div className='main-btnblock'>{buttons}</div>
                </div>
                <img className='main-img' src={imgPath} alt=''></img>
            </div>
        </div>
    );
}