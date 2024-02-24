import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function PriceOneCard({ cardTitle, cardText, cardPrice, cardTime, cardBtn }) {
    const [hoverClass, setHoverClass] = useState(false);
    const [size, setSize] = useState("30px");

    return (
        <div className="card-container"
            onMouseOver={() => {
                setHoverClass(true)
                setSize("40px")
            }}
            onMouseOut={() => {
                setHoverClass(false)
                setSize("30px")
            }}
        >
            <h5 style={{ fontSize: size }}>{cardTitle}</h5>
            <p>{cardText}</p>
            <div className="card-btns">
                <div className="card-btns-pills">
                    <div className="pill pill-price">{cardPrice}</div>
                    <div className="pill pill-time">{cardTime}</div>
                </div>
                {hoverClass && <button className="btn-red-arrow"><Link to='/training'>{cardBtn} <i className="fas fa-arrow-right"></i></Link></button>}
            </div>
        </div>
    )
}