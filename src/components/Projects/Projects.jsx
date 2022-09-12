import React from 'react'
import { useState } from 'react';
import style from './Projects.module.css'
import FolderProjects from '../../images/folder_desktop.png'

export default function Projects() {
  const [open, setOpen] = useState(false);

  const handleClickFolder = () => {
    setOpen(!open);
    if(open){
      document.getElementById("folderProjects").style.display = "none";
    } else {
      document.getElementById("folderProjects").style.display = "block";
    }
  };

  const handleClose = () => {
    document.getElementById("folderProjects").style.display = "none";
    setOpen(false);
  };
  return (
    <div>
      <div onClick={handleClickFolder} className={style.cotainerSocial}>
        <img className={style.folderImg} src={FolderProjects} alt="Folder" />
        <p className={style.folderName}>Projects</p>
      </div>
      <div id='folderProjects' className={style.containerFolder}>
        <div className={style.containerLineSup}>
          <img className={style.folderImgInside} src={FolderProjects} alt="Folder Inside" />
          <p className={style.folderNameInside}>Projects</p>
          <button onClick={handleClose} className={style.buttonFolder}>X</button>
        </div>
        <div>
          <h5>Hola bienvenido</h5>
        </div>
      </div>
    </div>
  )
}
