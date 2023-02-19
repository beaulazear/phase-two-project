import React from "react";
import { NavLink } from "react-router-dom";

export default function PageNavLinks() {

    return (
        <div className="navLinksDiv">
            <ul id="navLinkUl">
                <NavLink to="/" className="button-18">Todays Walks</NavLink>
                <NavLink to="/viewpack" className="button-18">View Pack</NavLink>
                <NavLink to="/addnewdog" className="button-18">Add New Dog</NavLink>
            </ul>
        </div>
    )
}
