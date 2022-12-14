import React, { useState } from "react";
import './App.css'


function App(){
    // getting the current time 
    let time = new Date().toLocaleTimeString();
    
    // getting the current time on ctime contant
    const [cTime,setcTime] = useState(time);

    // function will be executed after every second
    const updateTime = () =>{
        time = new Date().toLocaleTimeString();
        setcTime(time);
    }

    setInterval(updateTime,1000);

    return (
        <div>
            <h1> {cTime} </h1>
        </div>
    )
}


export default App;