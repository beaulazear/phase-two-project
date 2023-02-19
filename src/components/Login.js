import React, { useState } from "react";

export default function Login({ users, setCurrentUser }) {

    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    function handleUsernameInput(e) {
        setUsernameInput(e.target.value)
    }
    function handlePasswordInput(e) {
        setPasswordInput(e.target.value)
    }

    function handleLogIn(e) {
        e.preventDefault()

        const foundUser = users.find((user) => user.username === usernameInput && user.pass === passwordInput)

        if (!foundUser) {
            window.alert("Invalid username or password")
        } else {
            setCurrentUser(foundUser)
        }
    }

    return (
        <div className="homeAndFormDivs">
            <h1>User Log In</h1>
            <p>Walk time is the perfect tool for the independant dog walker! Users log in below to gain access to your current schedule, check the weather for the day, and more!</p>
            <form id="loginForm" onSubmit={handleLogIn}>
                <input onChange={handleUsernameInput} placeholder="Username" type="text" name="user_name" />
                <br></br><br></br>
                <input onChange={handlePasswordInput} placeholder="Password" type="password" name="password" />
                <br></br><br></br>
                <button className="button-18" type="submit">Log In</button>
            </form>
        </div>
    )
}