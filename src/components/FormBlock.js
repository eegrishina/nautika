import React from "react";
import Form from "./Form";

export default function FormBlock({ idForm, titles, imgLink, formType }) {
    const title = titles.map((i, idx) => {
        return (
            <span key={idx} className={i.blue ? "blue" : undefined}>{i.title}</span>
        )
    })

    return (
        <div id={"anchor-form-" + idForm} className={"form-container " + formType}>
            {(formType === 'discount' ? (
                <>
                    <div className="form-info">
                        <h3>{title}</h3>
                        <div className="form-img">
                            <img src={imgLink} alt=""></img>
                        </div>
                    </div>
                    <Form />
                </>
            ) : (
                <>
                    <h3 className="small-screen">{title}</h3>
                    <div className="form-img">
                        <img src={imgLink} alt=""></img>
                    </div>
                    <div className="form-info">
                        <h3>{title}</h3>
                        <Form />
                    </div>
                </>
            ))}
        </div>
    )
}