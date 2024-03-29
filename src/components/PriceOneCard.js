import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function PriceOneCard({ cardTitle, cardText, cardPrice, cardTime, cardBtn, imgVisible, imgLink }) {
    const [hoverClass, setHoverClass] = useState(false);
    const [size, setSize] = useState("30px");
    const [opacity, setOpacity] = useState(0);

    return (
        <div className="card-container"
            onMouseOver={() => {
                setHoverClass(true)
                setSize("40px")
                setOpacity(1)
            }}
            onMouseOut={() => {
                setHoverClass(false)
                setSize("30px")
                setOpacity(0)
            }}
        >
            <div className="card-cols">
                <h4 style={{ fontSize: size }}>{cardTitle}</h4>
                <p className='card'>{cardText}</p>
                <div className={imgVisible === "block" ? "card-btns with-img" : "card-btns"}>
                    <div className="card-btns-pills">
                        <div className="pill pill-price">{cardPrice}</div>
                        <div className="pill pill-time">{cardTime}</div>
                    </div>
                    {hoverClass && <button className="btn-red-arrow" style={{ opacity: opacity }}><Link to='/training'>{cardBtn} <i className="fas fa-arrow-right"></i></Link></button>}
                </div>
            </div>
            <div className="card-img" style={{ display: imgVisible }}>
                <img src={imgLink} alt=""></img>
            </div>
        </div>
    )
}