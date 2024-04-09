import React from 'react';
import JourneyBtn from './JourneyBtn';
import { api } from '../api';

export default function Journey() {
    return (
        <div className='journey'>
            <div className='journey-flexbox'>
                <h3><span className='blue'>Форматы</span> приключений</h3>
                <div className='journey-buttons'>
                    {api.map(i => {
                        return i.journey && (
                            <JourneyBtn key={i.id} title={i.title} text={i.text} path={i.id} />
                        )
                    })}
                </div>
            </div>
            <div className='side-img'>
                <img src='./images/journey.png' alt=''></img>
            </div>
        </div>
    )
}