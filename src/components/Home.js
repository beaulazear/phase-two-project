import React from "react";
import Login from "./Login";
import NewClient from "./NewClient";

export default function Home({ setLoggedIn, setUser }) {
    return (
        <div className="pageHeaders">
            <h1>justWalks</h1>
            <Login setUser={setUser} setLoggedIn={setLoggedIn} />
            <br></br>
            <NewClient />
            <br></br>
        </div>
    )
}