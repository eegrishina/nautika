import React from "react";
import { useState } from "react";
import ChooseOneYacht from "./ChooseOneYacht";
import { apiYacht } from "../api";

export default function ChooseYacht() {
    // const [yacht, setYacht] = useState(apiYacht);

    // function handleClick(eventId) {
    //     setYacht(yacht.map(y => {
    //         if (eventId === y.id) {
    //             return {
    //                 name: y.name,
    //                 description: y.description,
    //             }
    //         }
    //     }))
    // }
    // onClick = { handleClick } name = { yacht.name } description = { yacht.description }

    return (
        <div className="choose-yacht">
            <img className="side-img" src="./images/choose-yacht.png" alt=""></img>
            <ChooseOneYacht />
        </div>
    )
}