import { useEffect, useRef, useState } from "react";

const DarkLightMode = () => {
    
        const [mode, setMode] =useState('light');
        const windowRef = useRef(null);

        useEffect(() =>{
            windowRef.current = window.self;
        }, []);

        const toggleMode = () =>{
            setMode((mode === 'light') ? "dark" : "light")
 };

    return (
        <div>
            <p>Current window mode is : {mode}</p>
            <button onClick={toggleMode}>{mode}</button>
            <div
                ref={windowRef}
                style={mode === "light" ? {background:'white', width:"500px",height:'100vh'} : {background:'black', width:'1400px', height:'100vh'}}
            >This is contnent of window</div>
        </div>
    );
};

export default DarkLightMode;