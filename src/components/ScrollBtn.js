import { React } from 'react';

export default function ScrollBtn({ disabledLeft, disabledRight, handleClickRight, handleClickLeft }) {
    return (
        <div className='scroll-btn'>
            <button className='circle-btn' id='left'
                disabled={disabledLeft}
                onClick={handleClickRight}>
                <i className='fas fa-arrow-right'></i>
            </button>
            <button className='circle-btn' id='right'
                disabled={disabledRight}
                onClick={handleClickLeft}>
                <i className='fas fa-arrow-right'></i>
            </button>
        </div>
    )
}