import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function JourneyBtn({ title, text, path }) {
    const [hoverClass, setHoverClass] = useState(false);

    return (
        <div className='journey-container'
            onMouseOver={() => setHoverClass(true)}
            onMouseOut={() => setHoverClass(false)}
        >
            <h4>{title}</h4>
            <p>{text}</p>
            {hoverClass && <small><Link to={path}>Подробнее</Link></small>}
        </div>
    )
}