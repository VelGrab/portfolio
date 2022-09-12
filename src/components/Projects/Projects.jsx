import React from 'react'
import style from './Projects.module.css'
import FolderProjects from '../../images/folder_desktop.png'
import Home from "../Home/Home";
import NomadePortfolio from "../../images/Nomade_Portfolio.PNG";
import VideogamesPortfolio from "../../images/videogamesPortfolio.PNG";
import ratingPortfolio from "../../images/ratingPortfolio.PNG";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <Home />
      <div className={style.containerFolder}>
        <div className={style.containerLineSup}>
          <img className={style.folderImgInside} src={FolderProjects} alt="Folder Inside" />
          <p className={style.folderNameInside}>Projects</p>
          <Link className={style.link} to="/home">
            <button className={style.buttonFolder}>X</button>
          </Link>
        </div>
        <div className={style.containerProjects}>
          <a className={style.targetA} href='https://nomade-khaki.vercel.app/' target='__blank'>
          <div className={style.containerOne}>
            <img className={style.nomadeImg} src={NomadePortfolio} alt='Nomade Img'></img>
            <p className={style.projectName}>Nomade</p>
          </div>
          </a>
          <a className={style.targetA} href='https://videogames-pi-ten.vercel.app/' target='__blank'>
          <div className={style.containerTwo}>
            <img className={style.nomadeImg} src={VideogamesPortfolio} alt='Videogames Img'></img>
            <p className={style.projectName}>Games Box</p>
          </div>
          </a>
          <a className={style.targetA} href='https://velgrab.github.io/Interactive-rating-component-main/' target='__blank'>
          <div className={style.containerThree}>
            <img className={style.nomadeImg} src={ratingPortfolio} alt='Rating Img'></img>
            <p className={style.projectName}>Rating Component</p>
          </div>
          </a>
        </div>
      </div>
    </div>
  )
}
