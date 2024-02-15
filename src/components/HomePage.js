import React from 'react';
import FirstScreen from './FirstScreen';
import TextBlock from './TextBlock';
import Journey from './Journey';
import Statistics from './Statistics';

export default function HomePage({ imgPath }) {
    return (
        <>
            <FirstScreen imgPath={imgPath} />
            <TextBlock />
            <Journey />
            <Statistics />
        </>
    );
}