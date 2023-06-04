import React, { useState } from "react";
import "../styles/App.css";

export default function App() {
    const [theme,setTheme]=useState("light")
    const HandleonChange=(event)=>{
        setTheme((prev)=>prev==="light"?"dark":"light")
    }
    return (
        <div className="App">
            <h1>Newton School</h1>
            <div>
                <form>
                    <label>UserName</label>
                    <input type="text"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button>Login</button>
                </form>
            </div>
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <input type="checkbox" id="switch" onChange={HandleonChange}/>
            <label htmlFor="switch" className="label">
                Toggle
            </label>
        </div>
    );
}
