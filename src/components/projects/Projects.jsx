import React, { useEffect, useState } from 'react';

import './css/Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        import('../../database/base.json')
            .then((module) => {
                setProjects(module.default.projects);
            })
            .catch((error) => console.error("Error loading projects:", error));
    }, []);

    return (
        <div>
            <h3 className="text-center title">PROJECTS</h3>
            <div className="flex justify-content-evenly wrap">
                {projects.map((item, i) => {
                  const imgPath = new URL(`../../assets/img/${item.source}`, import.meta.url).href;
                  return (
                    <a key={i} href={item.link} target="_blank" rel="noreferrer" className="link-project">
                        <div className="card">
                            <div className="projects_img_div">
                                <img className="projects_img" src={imgPath} alt={item.desc_img} />
                            </div>
                            <p className="projects_name">{item.name}</p>
                            <p className="projects_desc">{item.description}</p>
                        </div>
                    </a>
                  )
                })}
            </div>
        </div>
    );
};

export default Projects;
