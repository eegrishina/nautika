import React from "react";
import Form from "./Form";

export default function FormBlock({ titles, imgLink, formPosition }) {
    const title = titles.map((i, idx) => {
        return (
            <span key={idx} className={i.blue ? "blue" : undefined}>{i.title}</span>
        )
    })

    return (
        (formPosition === 'right' ? (
            <div className="form-container">
                <div className="form-info">
                    <h3>{title}</h3>
                    <img src={imgLink} alt=""></img>
                </div>
                <Form />
            </div>
        ) : (
            <div className="form-container">
                <div className="form-info">
                    <h3>{title}</h3>
                    <Form />
                </div>
                <img src={imgLink} alt=""></img>
            </div>
        ))
    )
}