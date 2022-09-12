import React from "react";
import { useState } from "react";
import style from "./Skills.module.css";
import FolderImg from "../../images/folder_desktop.png";
import ReactImg from "../../images/react.png";
import JavascriptImg from "../../images/javascript.png";
import HtmlImg from "../../images/html.png";
import CssImg from "../../images/css-3.png";
import NodeImg from "../../images/nodejs.png";
import ExpressImg from "../../images/expressjs.png";
import MongodbImg from "../../images/mongodb.png";
import PostgresqlImg from "../../images/postgresql.png";
import GitImg from "../../images/git-96.png";
import GithubImg from "../../images/github.png";
import DockerImg from "../../images/docker-96.png";
import SlackImg from "../../images/slack-new-96.png";
import TrelloImg from "../../images/trello-96.png";
import FigmaImg from "../../images/figma-96.png";

export default function Skills() {
  const [open, setOpen] = useState(false);

  const handleClickFolder = () => {
    setOpen(!open);
    if (open) {
      document.getElementById("folderSkills").style.display = "none";
    } else {
      document.getElementById("folderSkills").style.display = "block";
    }
  };

  const handleClose = () => {
    document.getElementById("folderSkills").style.display = "none";
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickFolder} className={style.cotainerSkills}>
        <img className={style.folderImg} src={FolderImg} alt="Folder" />
        <p className={style.folderName}>Skills</p>
      </div>
      <div id="folderSkills" className={style.containerFolder}>
        <div className={style.containerLineSup}>
          <img
            className={style.folderImgInside}
            src={FolderImg}
            alt="Folder Inside"
          />
          <p className={style.folderNameInside}>Skills</p>
          <button onClick={handleClose} className={style.buttonFolder}>
            X
          </button>
        </div>
        <div>
          <div>
            <h3 className={style.skills}>Technical Skills</h3>
          </div>
          <div className={style.containerAllImages}>
            <div className={style.containerReact}>
              <img
                className={style.reactImg}
                src={ReactImg}
                alt="React Img"
              ></img>
              <p className={style.paragraph}>React</p>
            </div>
            <div className={style.containerJs}>
              <img
                className={style.jsImg}
                src={JavascriptImg}
                alt="Javascript Img"
              ></img>
              <p className={style.paragraph}>JavaScript</p>
            </div>
            <div className={style.containerHtml}>
              <img className={style.htmlImg} src={HtmlImg} alt="Html Img"></img>
              <p className={style.paragraph}>Html</p>
            </div>
            <div className={style.containerCss}>
              <img className={style.cssImg} src={CssImg} alt="Css Img"></img>
              <p className={style.paragraph}>Css</p>
            </div>
            <div className={style.containerNode}>
              <img className={style.nodeImg} src={NodeImg} alt="Node Img"></img>
              <p className={style.paragraph}>NodeJs</p>
            </div>
            <div className={style.containerExpress}>
              <img
                className={style.expressImg}
                src={ExpressImg}
                alt="Express Img"
              ></img>
              <p className={style.paragraph}>Express</p>
            </div>
            <div className={style.containerMongo}>
              <img
                className={style.mongoImg}
                src={MongodbImg}
                alt="Mongodb Img"
              ></img>
              <p className={style.paragraph}>MongoDB</p>
            </div>
            <div className={style.containerPostgre}>
              <img
                className={style.postgreImg}
                src={PostgresqlImg}
                alt="Postgresql Img"
              ></img>
              <p className={style.paragraph}>PostgreSQL</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className={style.skills}>Tools</h3>
        </div>
        <div className={style.containerAllTools}>
          <div className={style.containerGit}>
            <img className={style.gitImg} src={GitImg} alt="Git Img"></img>
            <p className={style.paragraph}>Git</p>
          </div>
          <div className={style.containerGithub}>
            <img
              className={style.githubImg}
              src={GithubImg}
              alt="Github Img"
            ></img>
            <p className={style.paragraph}>Github</p>
          </div>
          <div className={style.containerDocker}>
            <img
              className={style.dockerImg}
              src={DockerImg}
              alt="Docker Img"
            ></img>
            <p className={style.paragraph}>Docker</p>
          </div>
          <div className={style.containerSlack}>
            <img
              className={style.slackImg}
              src={SlackImg}
              alt="Slack Img"
            ></img>
            <p className={style.paragraph}>Slack</p>
          </div>
          <div className={style.containerTrello}>
            <img
              className={style.trelloImg}
              src={TrelloImg}
              alt="Trello Img"
            ></img>
            <p className={style.paragraph}>Trello</p>
          </div>
          <div className={style.containerFigma}>
            <img
              className={style.figmaImg}
              src={FigmaImg}
              alt="Figma Img"
            ></img>
            <p className={style.paragraph}>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}
