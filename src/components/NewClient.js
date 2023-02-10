import { func } from "prop-types";
import React from "react";

export default function NewClient() {

    function requestFormSubmit(event) {

        event.preventDefault();

        //Takes new client form data and makes a new object with it. Adds that object to an array. Later this should be changed to a database post request to store client requests.
        
        let requestFormDataArr =[]
        let requestFormData = {
            name: event.target.name.value,
            email: event.target.email.value,
            request: event.target.request.value
        }
        requestFormDataArr.push(requestFormData)
        console.log(requestFormDataArr)
    }

    return (
        <div className="loginDiv">
            <h1>Request Information</h1>
            <p>Are you in need of a new animal care routine, or are you an aspiring professional pet sitter? If so, fill out the form below, and I will be in touch shortly! Please visit my website <a href="https://beaulazear.com/">www.beaulazear.com</a> for additional Information.</p>
            <form onSubmit={requestFormSubmit}>
                <input placeholder="Name" type="text" name="name" />
                <br></br><br></br>
                <input placeholder="Email" type="text" name="email"/>
                <br></br><br></br>
                <p>Tell me about yourself, and the services you're requesting!</p><textarea type="textarea" name="request"/>
                <br></br><br></br>
                <button className="button-18" type="submit">Submit</button>
            </form>
        </div>
    )
}