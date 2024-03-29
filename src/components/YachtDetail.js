import React from 'react';
import { useState } from 'react';

export default function YachtDetail({ details }) {
    const [counter, setCounter] = useState(1);

    const aboutYacht = details
        .filter(i => i.id === counter)
        .map(i => {
            return (
                <p key={i.id}><span className='blue'>{i.name}</span>{i.info}</p>
            )
        })

    const listLi = details[counter - 1].list.map((i, idx) => <li key={idx} className='card'>{i}</li>)

    let srcBigImg = './images/detail-img/big' + counter + '.png';
    let srcSmallImg = './images/detail-img/small' + counter + '.png';

    function handleClickLeft() {
        setCounter(counter + 1);
    }

    function handleClickRight() {
        setCounter(counter - 1);
    }

    return (
        <div className='yacht-detail'>
            <img className='detail-big-img' src={srcBigImg} alt=''></img>
            <div className='detail-textblock'>
                <h5>О нашем флоте</h5>
                {aboutYacht}
                <h5>Параметры</h5>
                <ul>{listLi}</ul>
                <div className='scroll-btn'>
                    <button className='circle-btn' id='left'
                        disabled={counter === 1}
                        onClick={handleClickRight}>
                        <i className='fas fa-arrow-right'></i>
                    </button>
                    <button className='circle-btn' id='right'
                        disabled={counter > 2}
                        onClick={handleClickLeft}>
                        <i className='fas fa-arrow-right'></i>
                    </button>
                </div>
            </div>
            <div className='detail-left-side'>
                <div className='counter'>0{counter} / 03</div>
                <img className='detail-small-img' src={srcSmallImg} alt=''></img>
            </div>
        </div>
    )
}