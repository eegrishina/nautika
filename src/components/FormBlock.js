import React from "react";
import Form from "./Form";

export default function FormBlock({ titles, imgLink, formPosition }) {
    const title = titles.map((i, idx) => {
        return (
            <h3 key={idx} className={i.blue ? "blue" : undefined}>{i.title}</h3>
        )
    })

    return (
        (formPosition === 'right' ? (
            <div className="form-container">
                <div className="form-info">
                    {title}
                    <img src={imgLink} alt=""></img>
                </div>
                <Form />
            </div>
        ) : (
            <div className="form-container">
                <div className="form-info">
                    {title}
                    <Form />
                </div>
                <img src={imgLink} alt=""></img>
            </div>
        ))
    )
}