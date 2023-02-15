import React, { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import PageNavLinks from "./PageNavLinks";
import WalkCard from "./WalkCard";

export default function AddNewDog({ setLoggedOut, currentUser }) {

    const newDogTitle = "Add New Dog"

    const [currentDogArr, setCurrentDogArr] = useState(null)

    function updateDogArr(newDog) {
        setCurrentDogArr([...currentDogArr, newDog])
    }

    useEffect(() => {
        fetch('http://localhost:3000/dogs')
        .then((resp) => resp.json())
        .then((data) => setCurrentDogArr(data))
    },[])

    const [dogName, setDogName] = useState(null)
    const [dogAddress, setDogAddress] = useState(null)
    const [dogWalkDuration, setDogWalkDuration] = useState(null)
    const [dogWalkTime, setDogWalkTime] = useState(null)
    const [dogBio, setDogBio] = useState(null)

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

    let dog = {
        name: dogName,
        address: dogAddress,
        walkTime: dogWalkTime,
        walkDuration: dogWalkDuration,
        bio: dogBio
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
        .then((data) => updateDogArr(data))
    }

    if (!currentDogArr) return <p>...loading</p>

    return (
        <div className="addNewDogDiv">
            <PageNavLinks />
            <PageHeader setLoggedOut={setLoggedOut} title={newDogTitle} currentUser={currentUser} />
            <br></br>
            <div className="homeAndFormDivs">
                <h1>New Dog Form</h1>
                <form onSubmit={handleNewDogFormSubmit}>
                    <input onChange={handleAddDogName} placeholder="Animal's name" type="text" name="animalname" />
                    <br></br><br></br>
                    <input onChange={handleAddDogAddress} placeholder="Address of walk location" type="text" name="address" />
                    <br></br><br></br>
                    <input onChange={handleAddDogWalkDuration} placeholder="Walk duration" type="text" name="walkduration" />
                    <br></br><br></br>
                    <input onChange={handleAddDogWalkTime} placeholder="Time of walk" type="text" name="walktime" />
                    <br></br><br></br>
                    <textarea onChange={handleAddDogBio} rows={8} cols={40} placeholder="Additional information needed for the walk!" name="bio" />
                    <br></br>
                    <button className="button-18" type="submit">Submit</button>
                    <br></br>
                    <p>See below for an example of what the dog card will look like! Once submitted, your new dog will be added to the database.</p>
                </form>
            </div>
            <br></br>
            <WalkCard dog={dog}/>
            <br></br>
            <h2 className="dogListHeader">Here is a list of names for every dog currently in the database!</h2>
            {currentDogArr.map((dog) => {
                return <li className="dogNameList">{dog.name}, {dog.address}</li>
            })}
            <br></br>
        </div>
    )
}