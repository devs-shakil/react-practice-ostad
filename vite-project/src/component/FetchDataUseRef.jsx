import React, {useRef} from "react";
const FetchDataUseRef = () => {
    const expensiveResult = useRef(null);
    const output = useRef(null)
    
    const callApi = async () =>{
        const response = await fetch('https://dummyjson.com/products')
        expensiveResult.current = await response.json();

    }
    
    const showData = () =>{
        output.current.innerText = JSON.stringify(expensiveResult.current)
    }

    return (
        <div>
            <p ref={output}></p>
            <button onClick={callApi}>Call Api</button>            
            <button onClick={showData}>Show Data</button>
            
            
        </div>
    );
};

export default FetchDataUseRef;