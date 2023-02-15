import React, { useEffect, useState } from "react";
import WalkCard from "./WalkCard";
import TodaysWeather from "./TodaysWeather";
import PageNavLinks from "./PageNavLinks";
import PageHeader from "./PageHeader";

export default function TodaysWalks({ currentUser, setLoggedOut }) {

    const [todaysWalks, setTodaysWalks] = useState(null)
    const todaysWalkstitle = "Today's Walks"

    useEffect(() => {
        fetch('http://localhost:3000/dogs')
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)

            let todaysDate = new Date();
            let todaysWeekDay = todaysDate.getDay()
            let todaysWeekDayString = todaysWeekDay.toString()

            let todaysWalksArr = []

            data.forEach((dog) => {
                if (dog.days[todaysWeekDayString] === true) {
                    todaysWalksArr.push(dog)
                }
            })
            setTodaysWalks(todaysWalksArr)
        })
    }, [])

    if (!todaysWalks) return <p>...loading</p>

    return (
        <div className="todaysWalksDiv">
            <PageNavLinks />
            <PageHeader setLoggedOut={setLoggedOut} title={todaysWalkstitle} currentUser={currentUser} />
            <br></br>
            <TodaysWeather />
            {todaysWalks.map((dog, index) => (
                <ul key={index} className="walkCardUl">
                    <WalkCard dog={dog} />
                </ul>
            ))}
        </div>
    )
}