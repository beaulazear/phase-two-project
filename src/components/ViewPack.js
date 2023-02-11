import React from "react";
import { dogs } from "../data/dogs";
import WalkCard from "./WalkCard";

export default function ViewPack({ currentUser }) {

    return (
        <div id="viewPackDiv">
            <h1 className="pageHeaders">View Pack</h1>
            <h2 className="pageHeaders">Current User: {currentUser}</h2>
            {dogs.map((dog,index) => (
                <ul key={index} className="walkCardUl">
                    <WalkCard dog={dog} />
                </ul>
            ))}
        </div>
    )
}