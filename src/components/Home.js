import React from "react";
import Login from "./Login";
import NewClient from "./NewClient";

export default function Home({ setLoggedIn, setUser, users, setCurrentUser }) {
    
    return (
        <div>
            <h1 className="pageHeaders">justWalks</h1>
            <Login setCurrentUser={setCurrentUser} users={users} setUser={setUser} setLoggedIn={setLoggedIn} />
            <br></br>
            <NewClient />
            <br></br>
        </div>
    )
}