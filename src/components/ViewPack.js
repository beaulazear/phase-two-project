import React, { useEffect, useState } from "react";
import WalkCard from "./WalkCard";
import PageNavLinks from "./PageNavLinks";
import PageHeader from "./PageHeader";

export default function ViewPack({ currentUser, setLoggedOut }) {

    let [dogArr, setDogArr] = useState(null)

    const viewPackTitle = "View Pack"

    useEffect(() => {
        fetch('http://localhost:3000/dogs')
            .then((resp) => resp.json())
            .then((data) => setDogArr(data))
    }, [])

    if (!dogArr) return <p>...loading</p>

    return (
        <div className="viewPackDiv">
            <PageNavLinks />
            <PageHeader setLoggedOut={setLoggedOut} title={viewPackTitle} currentUser={currentUser} />
            {dogArr.map((dog, index) => (
                <ul key={index} className="walkCardUl">
                    <WalkCard dog={dog} />
                </ul>
            ))}
        </div>
    )
}