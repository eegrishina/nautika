import React from "react";

export default function ScrollOneText({ title, text }) {
    return (
        <div className="one-text-container">
            <hr></hr>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}