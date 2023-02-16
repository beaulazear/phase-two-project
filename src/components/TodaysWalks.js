import React, { useEffect, useState } from "react";
import WalkCard from "./WalkCard";
import TodaysWeather from "./TodaysWeather";
import PageNavLinks from "./PageNavLinks";
import PageHeader from "./PageHeader";

export default function TodaysWalks({ currentUser, setLoggedOut, dogs }) {

    const todaysWalkstitle = "Today's Walks"

    let todaysDate = new Date();
    let todaysWeekDay = todaysDate.getDay()
    let todaysWeekDayString = todaysWeekDay.toString()
    let todaysWalksArr = []

    dogs.map((dog) => {
        if (dog.days[todaysWeekDayString] === true) {
            todaysWalksArr.push(dog)
        }
    })

    if (!todaysWalksArr) return <p>...loading</p>

    return (
        <div className="todaysWalksDiv">
            <PageNavLinks />
            <PageHeader setLoggedOut={setLoggedOut} title={todaysWalkstitle} currentUser={currentUser} />
            <br></br>
            <TodaysWeather />
            {todaysWalksArr.map((dog, index) => (
                <ul key={index} className="walkCardUl">
                    <WalkCard dog={dog} />
                </ul>
            ))}
        </div>
    )
}