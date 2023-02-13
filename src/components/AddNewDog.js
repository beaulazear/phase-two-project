import React, { useEffect } from "react";
import { dogs } from "../data/dogs";
import PageHeader from "./PageHeader";
import PageNavLinks from "./PageNavLinks";

export default function AddNewDog({ setLoggedOut, currentUser }) {

    const newDogTitle = "Add New Dog"
    
    // this code causes site to crash, white screen with no rendering error, except in console.

    // useEffect(() => {
    //     fetch('http://localhost:3000/dogs')
    //     .then((resp) => resp.json())
    //     .then((data) => console.log(data))
    // })

    function handleNewDogFormSubmit(e) {
        e.preventDefault()

        let newDogObj = {
            name: e.target.animalname.value,
            address: e.target.address.value,
            walkTime: e.target.walktime.value,
            walkDuration: e.target.walkduration.value,
            bio: e.target.bio.value
        }

        // post regquest to http://localhost:3000/dogs, fetch currently not working with json-server 
        
        console.log(newDogObj)
    }
    
    return (
        <div className="addNewDogDiv">
            <PageNavLinks />
            <PageHeader setLoggedOut={setLoggedOut} title={newDogTitle} currentUser={currentUser} />
            <br></br>
            <div className="homeAndFormDivs">
                <h1>New Dog Form</h1>
                <form onSubmit={handleNewDogFormSubmit}>
                    <input placeholder="Animal's name" type="text" name="animalname" />
                    <br></br><br></br>
                    <input placeholder="Address of walk location" type="text" name="address" />
                    <br></br><br></br>
                    <input placeholder="Walk duration" type="text" name="walkduration" />
                    <br></br><br></br>
                    <input placeholder="Time of walk" type="text" name="walktime" />
                    <br></br><br></br>
                    <textarea rows={8} cols={40} placeholder="Additional information needed for the walk!" name="bio"/>
                    <br></br>
                    <button className="button-18" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )

}