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
          <div className={style.containerText}>
            <div className={style.containerTitleImg}>
              <div>
                <img
                  className={style.avatarImg}
                  src={avatarImg}
                  alt="Avatar Img"
                ></img>
              </div>
              <div>
                <h2 className={style.title}>Hi, I'm Julio Cesar</h2>
              </div>
            </div>
            <div>
              <h3 className={style.subtitle}>Full Stack Developer</h3>
            </div>
            <div>
              <p>
                I am a person passionate about technology, proactive with a
                great desire to improve and willing to demonstrate all my
                skills.
              </p>
              <p>
                I define myself as a person who likes to learn new things, I am
                always looking for new challenges and i am willing to learn new
                things, i like to work in a team, help others and share
                knowledge.
              </p>
              <p>
                I invite you to know my portfolio, you can explore the different
                folders to discover more about me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
