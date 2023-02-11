import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

export default function PageNavLinks({ setLoggedOut }) {

    function handleLogout(event) {
        setLoggedOut()
    }

    return (
        <div className="navLinksDiv">
            <ul id="webNavLinks">
                <NavLink to="/" className="button-18">Todays Walks</NavLink>
                <NavLink to="/viewpack" className="button-18">View Pack</NavLink>
            </ul>
            <button onClick={handleLogout} className="button-18" role="button">Logout</button>
        </div>
    )
}


{/* <ul id="webNavLinks">
<button className="button-18">Todays Walks</button>
<button className="button-18">Todays Weather</button>
<button className="button-18">View Pack</button>
<button onClick={handleLogout} className="button-18" role="button">Logout</button>
</ul> */}
