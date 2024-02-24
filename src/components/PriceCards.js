import React from "react";
import PriceOneCard from "./PriceOneCard";

export default function PriceCards({ mainTitles, mainText, discount, props }) {
    const titles = mainTitles.map((i, idx) => {
        return (
            <h3 key={idx} className={i.blue ? "blue" : "darkblue"}>{i.title}</h3>
        )
    })
    const cards = props.map((i, idx) => {
        return (
            <PriceOneCard key={idx} cardTitle={i.cardTitle} cardText={i.cardText} cardPrice={i.cardPrice} cardTime={i.cardTime} cardBtn={i.cardBtn} />
        )
    })

    return (
        <div className="price-cards-container">
            <div className="price-cards-left">
                {titles}
                <p>{mainText}</p>
                <small>{discount}</small>
            </div>
            <div className="price-cards-right">
                {cards}
            </div>
        </div>
    )
}