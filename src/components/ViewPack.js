import React from "react";
import { dogs } from "../data/dogs";
import WalkCard from "./WalkCard";

export default function ViewPack() {

    return (
        <div id="viewPackDiv">
            <h1 className="pageHeaders">View Pack</h1>
            {dogs.map((dog,index) => (
                <ul key={index} className="walkCardUl">
                    <WalkCard dog={dog} />
                </ul>
            ))}
        </div>
    )
}