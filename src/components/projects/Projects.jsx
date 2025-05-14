import React, { useEffect, useState } from "react";

import "./css/Projects.css";

import Project from "../project/Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenModalIndex(index);
  };

  const handleClose = () => {
    setOpenModalIndex(null);
  };

  useEffect(() => {
    import("../../database/base.json")
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
          const imgPath = new URL(
            `../../assets/img/${item.source}`,
            import.meta.url
          ).href;
          return (
            <div key={i}>
              <div className="card">
                <div>
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="link-project"
                  >
                    <div className="projects_img_div">
                      <img
                        className="projects_img"
                        src={imgPath}
                        alt={item.desc_img}
                      />
                    </div>
                    <p className="projects_name">{item.name}</p>
                    <p className="projects_desc">{item.description}</p>
                  </a>
                </div>
                <div className="p-link-buttons flex justify-content-center">
                  <div className={"p-link " + (item.text ? 'show' : 'p-hide')}>
                      <div className="p-button" onClick={() => item.text ? handleOpen(i) : {}}>
                        More...
                      </div>
                  </div>
                </div>

                {openModalIndex === i && (
                  <Project onClose={handleClose} item={item} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
