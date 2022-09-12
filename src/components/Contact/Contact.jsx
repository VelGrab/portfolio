import React from "react";
import style from "./Contact.module.css";
import FolderContact from "../../images/correo.png";
import Home from "../Home/Home";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <Home />
      <div id="folderContact" className={style.containerFolder}>
        <div className={style.containerLineSup}>
          <img
            className={style.folderImgInside}
            src={FolderContact}
            alt="Folder Inside"
          />
          <p className={style.folderNameInside}>Contact</p>
          <Link className={style.link} to="/home">
            <button className={style.buttonFolder}>X</button>
          </Link>
        </div>
        <div>
          <h5>Hola bienvenido</h5>
        </div>
      </div>
    </div>
  );
}
