import React, { useEffect } from "react";
import { dogs } from "../data/dogs";
import WalkCard from "./WalkCard";
import TodaysWeather from "./TodaysWeather";

export default function TodaysWalks() {


    let todaysDate = new Date();
    let todaysWeekDay = todaysDate.getDay()
    let todaysWeekDayString = todaysWeekDay.toString()

    let todaysWalksArr = []
    dogs.forEach((dog) => {
        if (dog.days[todaysWeekDayString] === true) {
            todaysWalksArr.push(dog)
        }
    })

    return (
        <div className="todaysWalksDiv">
            <h1 className="pageHeaders" >Today's Walks</h1>
            <TodaysWeather />
            {todaysWalksArr.map((dog, index) => (
                <ul key={index} className="walkCardUl">
                    <WalkCard dog={dog} />
                </ul>
            ))}
        </div>
    )
}