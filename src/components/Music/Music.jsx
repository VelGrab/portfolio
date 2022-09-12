import React from "react";
import style from "./Music.module.css";
import FolderMusic from "../../images/ondas-sonoras.png";
import ReactPlayer from "react-player";
import Home from "../Home/Home";
import { Link } from "react-router-dom";

export default function Music() {
  return (
    <div>
      <Home />
      <div className={style.containerFolder}>
        <div className={style.containerLineSup}>
          <img
            className={style.folderImgInside}
            src={FolderMusic}
            alt="Folder Inside"
          />
          <p className={style.folderNameInside}>Music</p>
          <Link className={style.link} to="/home">
            <button className={style.buttonFolder}>X</button>
          </Link>
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
