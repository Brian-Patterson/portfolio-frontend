import React from 'react'
import {useState, useEffect} from "react";

function About(props) {
    const [about, setAbout] = useState(null);

    const getAboutData = async () => {
        const response = await fetch("https://portfolioqemo.herokuapp.com/about");
        const data = await response.json();
        console.log(data)
        setAbout(data);
    }
    
    useEffect(() => {
        getAboutData()},
        []);

    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    );

console.log(loaded())
console.log(about.bio)


return about ? loaded() : <h1>Loading...</h1>;
};


export default About