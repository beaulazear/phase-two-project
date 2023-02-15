import React from "react";

export default function WalkCard({ dog }) {

    if (!dog.name) return <h2>Dog card will load here once you start filling out the form!</h2>

    return (
        <div className="dogCard">
            <h1>{dog.name}</h1>
            <h3>{dog.address}</h3>
            <p>{dog.name} gets walked at {dog.walkTime} for {dog.walkDuration}.</p>
            <p>{dog.bio}</p>
        </div>
    )
}