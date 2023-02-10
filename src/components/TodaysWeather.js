import React, { useEffect, useState } from "react";
import TodaysDate from "./TodaysDate";


export default function TodaysWeather() {

    const [currentWeather, setCurrentWeather] = useState(null)
    const [currentTempature, setCurrentTempature] = useState(null)
    const [currentFeelsLike, setCurrentFeelsLike] = useState(null)
    const MY_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => getLatAndLong(), [])

    function getCurrentWeather(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MY_KEY}`)
            .then((resp) => resp.json())
            .then((weatherData) => {
                convertTempThenSet(weatherData.main.temp.toString(), weatherData.main.feels_like.toString())
                setCurrentWeather(weatherData)
            })
    }

    function getLatAndLong() {
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=brooklyn,ny,us&limit=1&appid=${MY_KEY}`)
            .then((resp) => resp.json())
            .then((locationData) => {

                let lat = locationData[0].lat.toString()
                let lon = locationData[0].lon.toString()

                getCurrentWeather(lat, lon)
            })
    }

    function convertTempThenSet(tempInK, feelsLikeK) {
        let tempInF = Math.round((tempInK - 273.15) * 9 / 5 + 32);
        let feelsLikeF = Math.round((feelsLikeK - 273.15) * 9 / 5 + 32);
        setCurrentTempature(tempInF)
        setCurrentFeelsLike(feelsLikeF)
    }

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    if (!currentWeather && !currentFeelsLike) return <h4>Loading ....</h4>

    return (
        <div id="todaysWeatherDiv">
            <p className="pageHeaders">Location: Brooklyn NY<br></br>
                It is currently {currentTempature} °F, and it feels like {currentFeelsLike} °F
                <br></br>
                prepare accordingly!
                <br></br>
                <br></br>
                Current Date: {date}</p>
        </div>
    )
}