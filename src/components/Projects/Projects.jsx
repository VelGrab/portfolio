import React from "react";
import style from "./Projects.module.css";
import FolderProjects from "../../images/folder_desktop.png";
import Home from "../Home/Home";
import NomadePortfolio from "../../images/Nomade_Portfolio2.png";
import VideogamesPortfolio from "../../images/videogamesPortfolio2.PNG";
import ratingPortfolio from "../../images/ratingPortfolio3.PNG";
import nomadeInside from "../../images/Nomade_Portfolio.PNG"
import ratingInside from "../../images/ratingPortfolio.PNG"
import videogamesInside from "../../images/videogamesPortfolio.PNG"
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <Home />
      <div className={style.containerFolder}>
        <div className={style.containerLineSup}>
          <img
            className={style.folderImgInside}
            src={FolderProjects}
            alt="Folder Inside"
          />
          <p className={style.folderNameInside}>Projects</p>
          <Link className={style.link} to="/home">
            <button className={style.buttonFolder}>X</button>
          </Link>
        </div>
        <div className={style.containerProjects}>
          <div className={style.containerOne}>
            <a
              className={style.targetA}
              href="https://nomade-khaki.vercel.app/"
              target="__blank"
            >
              <img
                className={style.nomadeImg}
                src={NomadePortfolio}
                alt="Nomade Img"
              ></img>
              <img className={style.nomadeInside} src={nomadeInside} alt='inside img'></img>
            </a>
          </div>
          <div className={style.containerTwo}>
            <a
              className={style.targetA}
              href="https://videogames-pi-ten.vercel.app/"
              target="__blank"
            >
              <img
                className={style.nomadeImg}
                src={VideogamesPortfolio}
                alt="Videogames Img"
              ></img>
              <img className={style.videogameInside} src={videogamesInside} alt='inside img'></img>
            </a>
          </div>
          <div className={style.containerThree}>
            <a
              className={style.targetA}
              href="https://velgrab.github.io/Interactive-rating-component-main/"
              target="__blank"
            >
              <img
                className={style.nomadeImg}
                src={ratingPortfolio}
                alt="Rating Img"
              ></img>
              <img className={style.ratingInside} src={ratingInside} alt='inside img'></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
