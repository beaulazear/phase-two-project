import React from "react";
import { users } from "../data/users";

export default function Login({ setLoggedIn }) {

    function handleLogIn(e) {
        e.preventDefault()
        users.map((user) => {
            if (user.username === e.target.user_name.value && user.pass === e.target.password.value) {
                setLoggedIn()
            } else {
                console.log("Failed login attempt")
            }
        })
    }

    return (
        <div className="loginDiv">
            <h1>User Log In</h1>
            <p>Walk time is the perfect tool for the independant dog walker! Users log in below to gain access to your current schedule, check the weather for the day, and more!</p>
            <form id="loginForm" onSubmit={handleLogIn}>
                <input placeholder="Username" type="text" name="user_name" />
                <br></br><br></br>
                <input placeholder="Password" type="password" name="password" />
                <br></br><br></br>
                <button className="button-18" type="submit">Log In</button>
            </form>
        </div>
    )
}