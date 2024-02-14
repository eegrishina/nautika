import React from 'react';
import FirstScreen from './FirstScreen';
import TextBlock from './TextBlock';
import Journey from './Journey';

export default function HomePage({ imgPath }) {
    return (
        <>
            <FirstScreen imgPath={imgPath} />
            <TextBlock />
            <Journey />
        </>
    );
}