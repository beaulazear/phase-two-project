import React, { useEffect, useState } from "react";


export default function TodaysWeather() {

    const [currentTempature, setCurrentTempature] = useState(null)
    const [currentFeelsLike, setCurrentFeelsLike] = useState(null)
    const MY_WEATHER_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => getLatAndLong(), [])
    
    function getLatAndLong() {
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=brooklyn,ny,us&limit=1&appid=${MY_WEATHER_KEY}`)
        .then((resp) => resp.json())
        .then((locationData) => {
            let lat = locationData[0].lat.toString()
            let lon = locationData[0].lon.toString()
            getCurrentWeather(lat, lon)
        })
    }

    function getCurrentWeather(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${MY_WEATHER_KEY}`)
            .then((resp) => resp.json())
            .then((weatherData) => {
                convertTempThenSet(weatherData.main.temp.toString(), weatherData.main.feels_like.toString())
            })
    }

    function convertTempThenSet(tempInK, feelsLikeK) {
        let tempInF = Math.round((tempInK - 273.15) * 9 / 5 + 32);
        let feelsLikeF = Math.round((feelsLikeK - 273.15) * 9 / 5 + 32);
        setCurrentTempature(tempInF)
        setCurrentFeelsLike(feelsLikeF)
    }

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    if (!currentFeelsLike) return <h4>Loading ....</h4>

    return (
        <div className="todaysWeatherDiv">
            <p>Here is the weather in Brooklyn, NYC:
            <br></br>
            <br></br>
                It is currently {currentTempature}°F, but it feels like {currentFeelsLike}°F
                <br></br>
                prepare accordingly!
                <br></br>
                <br></br>
                Today's Date: {date}</p>
        </div>
    )
}