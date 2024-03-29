import React from "react";
import { Link } from "react-router-dom";

export default function ServicesPrice({ title, path, data }) {
    let listData = data.map((i, idx) => {
        return (
            <div key={idx} className="priceitem-box">
                <h6>{i.title}</h6>
                <p className='card'>{i.text}</p>
                <button className={i.free ? "pill free" : "pill"}>{i.price}</button>
            </div>
        )
    });

    return (
        <div className="price-flexbox">
            <h4>{title}</h4>
            <div className="priceitem-flexbox">
                {listData}
            </div>
            <Link to={path}><button className="circle-btn btn-link"><i className="fas fa-arrow-right"></i></button></Link>
        </div>
    )
}