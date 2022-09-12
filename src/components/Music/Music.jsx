import React from "react";
import { useState } from "react";
import style from "./Music.module.css";
import FolderMusic from "../../images/ondas-sonoras.png";
import ReactPlayer from "react-player";

export default function Music() {
  const [open, setOpen] = useState(false);

  const handleClickFolder = () => {
    setOpen(!open);
    if(open){
      document.getElementById("folderMusic").style.display = "none";
    } else {
      document.getElementById("folderMusic").style.display = "block";
    }
  };

  const handleClose = () => {
    document.getElementById("folderMusic").style.display = "none";
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickFolder} className={style.cotainerSocial}>
        <img className={style.folderImg} src={FolderMusic} alt="Folder" />
        <p className={style.folderName}>Music</p>
      </div>
      <div id="folderMusic" className={style.containerFolder}>
        <div className={style.containerLineSup}>
          <img
            className={style.folderImgInside}
            src={FolderMusic}
            alt="Folder Inside"
          />
          <p className={style.folderNameInside}>Music</p>
          <button onClick={handleClose} className={style.buttonFolder}>
            X
          </button>
        </div>
        <div className={style.containerPlayer}>
          <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            url="https://www.youtube.com/watch?v=WibjzL3fF1o&list=RDCb5TOFmLJnM&index=27&ab_channel=Elderbrook"
          />
        </div>
      </div>
    </div>
  );
}
