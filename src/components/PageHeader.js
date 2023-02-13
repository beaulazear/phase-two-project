import React from "react";

export default function PageHeader({ currentUser, title, setLoggedOut }) {

    function handleLogout() {
        setLoggedOut()
    }
    return (
        <div className="pageHeaderDiv">
            <h1 className="pageHeaders">{title}</h1>
            <h2>Current User: {currentUser}</h2>
            <button onClick={handleLogout} className="button-18" role="button">Logout</button>
        </div>
    )
}