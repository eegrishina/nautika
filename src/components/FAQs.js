import React from 'react';
import OneFAQ from './OneFAQ';

export default function FAQs({ props }) {
    const faqs = props.map((i, idx) => {
        return (
            <>
                <OneFAQ key={i.id} idx={idx} question={i.question} answer={i.answer} />
                <hr></hr>
            </>
        )
    })

    return (
        <div className='faq-container'>
            <h3>Популярные <span className='blue'>вопросы</span></h3>
            <ul>{faqs}</ul>
        </div>
    )
}