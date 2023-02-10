import React, { useEffect } from "react";

export default function TodaysDate() {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  

    // useEffect(() => {
    //     let currentDateObj = fetch
    // })

    return (
        <div id="todaysDateDiv">
            <h4 className="pageHeaders">Current date: {date}</h4>
        </div>
    )
}