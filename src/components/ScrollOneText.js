import React from "react";

export default function ScrollOneText({ title, text }) {
    return (
        <div className="one-text-container">
            <hr></hr>
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    )
}