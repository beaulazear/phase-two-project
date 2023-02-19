import React from "react";

export default function PageHeader({ title }) {
    return (
        <div className="pageHeaderDiv">
            <h1 className="pageHeaders">{title}</h1>
        </div>
    )
}