import React from "react";
import FolderImg from "../../images/desktop-computer.png";
import style from "./ThisPc.module.css";
import avatarImg from "../../images/Avatar1remove.png";
import Home from "../Home/Home";
import { Link } from "react-router-dom";

export default function ThisPc() {
  return (
    <div>
      <Home />
      <div className={style.containerFolder}>
        <div className={style.containerLineSup}>
          <img
            className={style.folderImgInside}
            src={FolderImg}
            alt="Folder Inside"
          />
          <p className={style.folderNameInside}>This Pc</p>
          <Link className={style.link} to="/home">
            <button className={style.buttonFolder}>X</button>
          </Link>
        </div>
        <div>
          <div className={style.avatarContainer}>
            <img
              className={style.avatarImg}
              src={avatarImg}
              alt="Avatar Img"
            ></img>
          </div>
          <div className={style.containerText}>
            <div className={style.containerTitleImg}>
              <div>
                <h2 className={style.title}>Hi, I'm Julio Cesar</h2>
              </div>
            </div>
            <div>
              <h3 className={style.subtitle}>Full Stack Developer</h3>
            </div>
            <div>
              <p>
                I am a passionate technology enthusiast, proactive, and always
                eager to improve. I am keen to showcase my skills and
                capabilities.
              </p>
              <p>
                I define myself as a lifelong learner, constantly seeking new
                challenges and opportunities for growth. I enjoy working in
                teams, helping others, and sharing knowledge.
              </p>
              <p>
                I invite you to explore my portfolio. Feel free to browse
                through the different sections to learn more about me and my
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
