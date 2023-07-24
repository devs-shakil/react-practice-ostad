import { useState } from "react";

const Counter = () => {
    const [number, setNumber] =useState(0);
    const changeNumber = () =>{
        setNumber(number + 1);
    }
    return (
        <div>
            <h1>Number: {number}</h1>
            <button onClick={changeNumber}>Increment</button>
        </div>
    );
};

export default Counter;