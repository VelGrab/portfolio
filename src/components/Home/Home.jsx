import React from "react";
import FolderImg from "../../images/desktop-computer.png";
import FolderSkills from "../../images/folder_desktop.png";
import FolderProjects from "../../images/folder_desktop.png";
import FolderMusic from "../../images/ondas-sonoras.png";
import FolderContact from "../../images/correo.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={style.containerFoldersDesktop}>
        <Link className={style.link} to="/thispc">
          <div className={style.cotainerThisPc}>
            <img className={style.folderImg} src={FolderImg} alt="Folder" />
            <p className={style.folderName}>This Pc</p>
          </div>
        </Link>
        <Link className={style.link} to="/skills">
          <div className={style.cotainerSkills}>
            <img className={style.folderImg} src={FolderSkills} alt="Folder" />
            <p className={style.folderName}>Skills</p>
          </div>
        </Link>
        <Link className={style.link} to="/projects">
          <div className={style.cotainerProjects}>
            <img
              className={style.folderImg}
              src={FolderProjects}
              alt="Folder"
            />
            <p className={style.folderName}>Projects</p>
          </div>
        </Link>
        <Link className={style.link} to="/contact">
          <div className={style.cotainerContact}>
            <img className={style.folderImg} src={FolderContact} alt="Folder" />
            <p className={style.folderName}>Contact</p>
          </div>
        </Link>
        <Link className={style.link} to="/music">
          <div className={style.cotainerContact}>
            <img className={style.folderImg} src={FolderMusic} alt="Folder" />
            <p className={style.folderName}>Music</p>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
