import React, { useState } from "react";
import PageHeader from "./PageHeader";
import PageNavLinks from "./PageNavLinks";
import WalkCard from "./WalkCard";

export default function AddNewDog({ setLoggedOut, currentUser, dogs, updateCurrentDogArr }) {

    const newDogTitle = "Add New Dog"

    const [dogName, setDogName] = useState('')
    const [dogAddress, setDogAddress] = useState('')
    const [dogWalkDuration, setDogWalkDuration] = useState('')
    const [dogWalkTime, setDogWalkTime] = useState('')
    const [dogBio, setDogBio] = useState('')
    const [mondayChecked, setMondayChecked] = useState(false)
    const [tuesdayChecked, setTuesdayChecked] = useState(false)
    const [wednesdayChecked, setWednesdayChecked] = useState(false)
    const [thursdayChecked, setThursdayChecked] = useState(false)
    const [fridayChecked, setFridayChecked] = useState(false)

    function handleAddDogName(e) {
        setDogName(e.target.value)
    }
    function handleAddDogAddress(e) {
        setDogAddress(e.target.value)
    }
    function handleAddDogWalkDuration(e) {
        setDogWalkDuration(e.target.value)
    }
    function handleAddDogWalkTime(e) {
        setDogWalkTime(e.target.value)
    }
    function handleAddDogBio(e) {
        setDogBio(e.target.value)
    }
    function handleMondayCheckBox() {
        setMondayChecked(!mondayChecked)
    }
    function handleTuesdayCheckBox() {
        setTuesdayChecked(!tuesdayChecked)
    }
    function handleWednesdayCheckBox(e) {
        setWednesdayChecked(!wednesdayChecked)
    }
    function handleThursdayCheckBox() {
        setThursdayChecked(!thursdayChecked)
    }
    function handleFridayCheckBox() {
        setFridayChecked(!fridayChecked)
    }

    let dog = {
        name: dogName,
        address: dogAddress,
        walkTime: dogWalkTime,
        walkDuration: dogWalkDuration,
        bio: dogBio,
        days: {
            "1": mondayChecked,
            "2": tuesdayChecked,
            "3": wednesdayChecked,
            "4": thursdayChecked,
            "5": fridayChecked
        }
    }

    function handleNewDogFormSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:3000/dogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dog)
        })
        .then((resp) => resp.json())
        .then((data) => {
            updateCurrentDogArr(data)

            //resetting the controlled form by changing state
            setDogAddress('')
            setDogBio('')
            setDogName('')
            setDogWalkDuration('')
            setDogWalkTime('')
            setFridayChecked(false)
            setThursdayChecked(false)
            setWednesdayChecked(false)
            setTuesdayChecked(false)
            setMondayChecked(false)

            window.alert('Dog has been submitted!')
        })
    }

    if (!dogs) return <p>...loading</p>

    return (
        <div className="addNewDogDiv">
            <PageNavLinks />
            <PageHeader setLoggedOut={setLoggedOut} title={newDogTitle} currentUser={currentUser} />
            <br></br>
            <div className="homeAndFormDivs">
                <h1>New Dog Form</h1>
                <form onSubmit={handleNewDogFormSubmit}>
                    <input onChange={handleAddDogName} placeholder="Animal's name" value={dogName} type="text" name="animalname" />
                    <br></br><br></br>
                    <input onChange={handleAddDogAddress} placeholder="Address of walk location" value={dogAddress} type="text" name="address" />
                    <br></br><br></br>
                    <input onChange={handleAddDogWalkDuration} placeholder="Walk duration" value={dogWalkDuration} type="text" name="walkduration" />
                    <br></br><br></br>
                    <input onChange={handleAddDogWalkTime} placeholder="Time of walk" type="text" value={dogWalkTime} name="walktime" />
                    <br></br><br></br>
                    <textarea value={dogBio} onChange={handleAddDogBio} rows={8} cols={40} placeholder="Additional information needed for the walk!" name="bio" />
                    <br></br>
                    <p>Select which day/days walks are needed!</p>
                    <input checked={!!mondayChecked} id="monday" type="checkbox" name="monday" value={mondayChecked} onChange={handleMondayCheckBox}/>
                    <label htmlFor="monday">Monday</label>
                    <br></br>
                    <input checked={!!tuesdayChecked}id="tuesday" type="checkbox" name="tuesday" value={tuesdayChecked} onChange={handleTuesdayCheckBox}/>
                    <label htmlFor="tuesday">Tuesday</label>
                    <br></br>
                    <input checked={!!wednesdayChecked} id="wednesday" type="checkbox" name="wednesdayChecked" value={wednesdayChecked} onChange={handleWednesdayCheckBox}/>
                    <label htmlFor="wednesday">Wednesday</label>
                    <br></br>
                    <input checked={!!thursdayChecked} id="thursday" type="checkbox" name="thursday" value={thursdayChecked} onChange={handleThursdayCheckBox}/>
                    <label htmlFor="thursday">Thursday</label>
                    <br></br>
                    <input checked={!!fridayChecked} id="friday" type="checkbox" name="friday" value={fridayChecked} onChange={handleFridayCheckBox}/>
                    <label htmlFor="friday">Friday</label>
                    <br></br>
                    <button className="button-18" type="submit">Submit</button>
                    <p>See below for an example of what the dog card will look like! Once submitted, your new dog will be added to the database.</p>
                </form>
            </div>
            <br></br>
            <WalkCard dog={dog}/>
            <br></br>
        </div>
    )
}