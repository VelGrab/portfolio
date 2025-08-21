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
      <div className={`window-shell ${style.containerFolder}`}>
        <div className={style.containerLineSup}>
          <div className={style.lineLeft}>
            <img
              className={style.folderImgInside}
              src={FolderMusic}
              alt="Folder Inside"
            />
            <p className={style.folderNameInside}>Music</p>
          </div>
          <div className={style.windowActions}>
            <Link className={style.link} to="/home">
              <button className={style.buttonFolder}>×</button>
            </Link>
          </div>
        </div>
        <div className={style.windowBody}>
        <div className={style.containerPlayer}>
          <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            url="https://www.youtube.com/watch?v=1Oz2GRt-I2g"
            config={{
              youtube: {
                playerVars: {
                  showinfo: 1,
                  rel: 0
                }
              }
            }}
          />
  </div>
  </div>
      </div>
    </div>
  );
}
