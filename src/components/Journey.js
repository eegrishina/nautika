import React from 'react';
import JourneyBtn from './JourneyBtn';
import api from '../api';

export default function Journey() {
    return (
        <div className='journey'>
            <div className='journey-flexbox'>
                <h3><span>Форматы</span> приключений</h3>
                <div className='journey-buttons'>
                    {api.map(item => {
                        if (item.journey) {
                            return (
                                <JourneyBtn key={item.id} title={item.title} text={item.text} path={item.id} />
                            )
                        }
                    })}
                </div>
            </div>
            <img className='journey-img' src='./images/journey.png' alt=''></img>
        </div>
    )
}