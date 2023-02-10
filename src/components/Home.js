import React from "react";
import Login from "./Login";
import NewClient from "./NewClient";

export default function Home({ setLoggedIn }) {
    return (
        <div className="loginHeader">
            <h1>justWalks</h1>
            <Login setLoggedIn={setLoggedIn} />
            <br></br>
            <NewClient />
            <br></br>
        </div>
    )
}