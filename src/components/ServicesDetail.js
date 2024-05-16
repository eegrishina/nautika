import React from "react";
import { infoPrice } from "../api";
import ServicesPrice from "./ServicesPrice";

export default function ServicesDetail() {
    const listInfoPrice = infoPrice.map(i => {
        return (
            <ServicesPrice key={i.id} title={i.title} data={i.data} path={i.id} />
        )
    })

    return (
        <div className="services-detail">
            {listInfoPrice}
        </div>
    )
}
