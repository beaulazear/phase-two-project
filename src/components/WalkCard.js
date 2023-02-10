import React from "react";

export default function WalkCard({ dog }) {

    let todaysDate = new Date()
    let todaysDay = todaysDate.getDay()

    return (
        <div className="dogCard">
            <h1>{dog.name}</h1>
            <h3>{dog.address}</h3>
            <p>{dog.name} gets walked at {dog.walkTime} for {dog.walkDuration}.</p>
            <p>{dog.bio}</p>
        </div>
    )
}