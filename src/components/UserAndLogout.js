import React from "react";

export default function User({ setCurrentUser, currentUser }) {

    function handleLogout() {
        setCurrentUser(false)
    }

    return (
        <div className="UserAndLogoutDiv">
            <h2>Current User: {currentUser.username}</h2>
            <button onClick={handleLogout} className="button-18" role="button">Logout</button>
        </div>
    )
}