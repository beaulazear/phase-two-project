import React, { useState } from "react";

export default function Test() {
    //counter starts at 0, increments everytime you hit submit
    const [count, setCount] = useState(0)
    //state variable for input to help with form reset
    const [input, setInput] = useState("")

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    function handleButtonClick(e){
        e.preventDefault()
        setCount(count + input.length)
        setInput("")
    }

    return (
        <div className="testDiv">
            <form>
            <input type="text" value={input} onChange={handleInputChange}></input>
            <button onClick={handleButtonClick}>Click Me!</button>
            <p>{count}</p>
            </form>
        </div>
    )
}


// Create a controlled form that has a text input, a button that says click me and a counter that starts at 0. Every time you hit submit when there is text in the input box the counter should increment by that amount and the input field should reset.