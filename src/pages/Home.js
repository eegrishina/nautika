import React from 'react';
import HomePage from '../components/HomePage';

export default function Home({ imgPath }) {
    return (
        <div className='container'>
            <HomePage imgPath={imgPath} />
        </div>
    )
}