import React from "react";
import { dogs } from "../data/dogs";
import WalkCard from "./WalkCard";
import PageNavLinks from "./PageNavLinks";
import PageHeader from "./PageHeader";

export default function ViewPack({ currentUser, setLoggedOut }) {

    const viewPackTitle="View Pack"

    return (
        <div className="viewPackDiv">
            <PageNavLinks />
            <PageHeader setLoggedOut={setLoggedOut} title={viewPackTitle} currentUser={currentUser} />
            {dogs.map((dog, index) => (
                <ul key={index} className="walkCardUl">
                    <WalkCard dog={dog} />
                </ul>
            ))}
        </div>
    )
}