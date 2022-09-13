import React from 'react'
import {useState, useEffect} from "react";

function Projects(props) {
    const [projects, setProjects] = useState(null);

    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects");
        const data = await response.json();
        setProjects(data);
    }

    useEffect(() => {
        getProjectsData()},
        []);

    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <a href={project.git}>
                    <button>Github</button>
                </a>
            </div>
        ));
    };

  return (
    projects ? loaded() : <h1>Loading...</h1>
  )
}

export default Projects