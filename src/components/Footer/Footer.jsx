import React from "react";
import { useState } from "react";
import style from "./Footer.module.css";
import windows from "../../images/ventanas.png";
import search from "../../images/search.png";
import task from "../../images/task.png";
import vsCode from "../../images/icons8-visual-studio-code-2019-48.png";
import folder from "../../images/folder.png";
import FolderImg from "../../images/desktop-computer.png";
import FolderSkills from "../../images/folder_desktop.png";
import FolderProjects from "../../images/folder_desktop.png";
import FolderMusic from "../../images/ondas-sonoras.png";
import FolderContact from "../../images/correo.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Footer() {
  const [hour, setHour] = useState("");
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleVsCode = () => {
    navigate("/code-editor");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (input === "") {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡No ingresaste nada!",
      });
    }
    setInput(e.target.value);
    window.open(`https://www.google.com/search?q=${input}`);
    setInput("");
  };

  const updateTime = () => {
    setHour(new Date().toLocaleTimeString());
  };

  setInterval(updateTime, 1000);

  const handlePopUpWindow = () => {
    if(document.getElementById('window').style.display === 'block'){
      document.getElementById('window').style.display = 'none'
    } else {
      document.getElementById('window').style.display = 'block'
    }
  };

  return (
    <div className={style.container}>
      <div>
        <img
          onClick={handlePopUpWindow}
          className={style.imageWindows}
          src={windows}
          alt="Img Windows"
        ></img>
      </div>
      <div id="window" className={style.popUpContainerWindow}>
        <div className={style.thisPcFolder}>
          <Link className={style.link} to='/thispc'>
          <img src={FolderImg} alt='ThisPc Img'></img>
          <p>This Pc</p>
          </Link>
        </div>
        <div className={style.folderProjects}>
          <Link className={style.link} to='/skills'>
          <img src={FolderSkills} alt='FolderSkills Img'></img>
          <p>Skills</p>
          </Link>
        </div>
        <div className={style.folderSkills}>
          <Link className={style.link} to='/projects'>
          <img src={FolderProjects} alt='FolderProjects Img'></img>
          <p>Projects</p>
          </Link>
        </div>
        <div className={style.folderContact}>
          <Link className={style.link} to='/contact'>
          <img src={FolderContact} alt='FolderContact Img'></img>
          <p>Contact</p>
          </Link>
        </div>
        <div className={style.folderMusic}>
          <Link className={style.link} to='/music'>
          <img src={FolderMusic} alt='FolderMusic Img'></img>
          <p>Music</p>
          </Link>
        </div>
      </div>
      <div className={style.containerInput}>
        <form onSubmit={handleSearch}>
          <img
            className={style.imageSearch}
            src={search}
            alt="Img Search"
          ></img>
          <input
            className={style.input}
            type="text"
            placeholder="Type here to search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </form>
      </div>
      <div>
        <img className={style.taskImage} src={task} alt="img task"></img>
      </div>
      <div>
        <img
          onClick={handleVsCode}
          className={style.imageVsCode}
          src={vsCode}
          alt="Img VsCode"
        ></img>
      </div>
      <div>
        <img className={style.imageFolder} src={folder} alt="Img VsCode"></img>
      </div>
      <div className={style.hourContainer}>
        <p className={style.hour}>{hour}</p>
      </div>
    </div>
  );
}
