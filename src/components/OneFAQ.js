import React from 'react';
import { useState } from 'react';

export default function OneFAQ({ idx, question, answer }) {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
    }

    return (
        <li onClick={handleClick}>
            <span>{idx < 10 ? '0' + (idx + 1) : idx}</span>{question}
            {active && <p className='card'>{answer}</p>}
            <hr></hr>
        </li>
    )
}