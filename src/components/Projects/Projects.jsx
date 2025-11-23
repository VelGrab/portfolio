import React from "react";
import style from "./Projects.module.css";
import FolderProjects from "../../images/folder_desktop.png";
import Home from "../Home/Home";
import NomadePortfolio from "../../images/Nomade_Portfolio2.png";
import VideogamesPortfolio from "../../images/videogamesPortfolio2.PNG";
import ratingPortfolio from "../../images/ratingPortfolio3.PNG";
import jcVideoOutside from "../../images/jcVideoOutside.png";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    name: "Nomade",
    link: "https://nomade-khaki.vercel.app/",
    thumbnail: NomadePortfolio,
  },
  {
    id: 2,
    name: "Videogames",
    link: "https://videogames-pi-ten.vercel.app/",
    thumbnail: VideogamesPortfolio,
  },
  {
    id: 3,
    name: "Rating Component",
    link: "https://velgrab.github.io/Interactive-rating-component-main/",
    thumbnail: ratingPortfolio,
  },
  {
    id: 4,
    name: "JC Video",
    link: "https://unique-caramel-fb9ccb.netlify.app/",
    thumbnail: jcVideoOutside,
  },
];

export default function Projects() {
  return (
    <div>
      <Home />
      <div className={`window-shell ${style.containerFolder}`}>
        <div className={style.containerLineSup}>
          <div className={style.lineLeft}>
            <img
              className={style.folderImgInside}
              src={FolderProjects}
              alt="Folder Inside"
            />
            <p className={style.folderNameInside}>Projects</p>
          </div>
          <div className={style.windowActions}>
            <Link className={style.link} to="/home">
              <button className={style.buttonFolder}>×</button>
            </Link>
          </div>
        </div>
        <div className={style.windowBody}>
          <div className={style.containerProjects}>
            {projectsData.map((project) => (
              <a
                key={project.id}
                className={style.projectItem}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={style.folderIcon}>
                  <div className={style.folderTab}></div>
                  <div className={style.folderBody}></div>
                </div>
                <span className={style.projectName}>{project.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
