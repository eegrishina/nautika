import React from "react";
import { Link } from "react-router-dom";

export default function ServicesPrice({ title, path, data }) {
    let listData = data.map(i => {
        return (
            <div className="priceitem-box">
                <h6>{i.title}</h6>
                <p>{i.text}</p>
                <button className={i.free ? "free" : ""}>{i.price}</button>
            </div>
        )
    });

    return (
        <div className="price-flexbox">
            <h5>{title}</h5>
            <div className="priceitem-flexbox">
                {listData}
            </div>
            <Link to={path}><button className="circle-btn"><i className="fas fa-arrow-right"></i></button></Link>
        </div>
    )
}