import React from 'react'
import style from './Projects.module.css'
import FolderProjects from '../../images/folder_desktop.png'
import Home from "../Home/Home";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <Home />
      <div id='folderProjects' className={style.containerFolder}>
        <div className={style.containerLineSup}>
          <img className={style.folderImgInside} src={FolderProjects} alt="Folder Inside" />
          <p className={style.folderNameInside}>Projects</p>
          <Link className={style.link} to="/home">
            <button className={style.buttonFolder}>X</button>
          </Link>
        </div>
        <div>
          <h5>Hola bienvenido</h5>
        </div>
      </div>
    </div>
  )
}
