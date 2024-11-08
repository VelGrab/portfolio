import React from "react";
import style from "./Skills.module.css";
import FolderImg from "../../images/folder_desktop.png";
import SvelteImg from "../../images/svelte-logo-cutout.svg";
import JavascriptImg from "../../images/javascript.png";
import HtmlImg from "../../images/html.png";
import CssImg from "../../images/css-3.png";
import NodeImg from "../../images/nodejs.png";
import ExpressImg from "../../images/expressjs.png";
import MongodbImg from "../../images/mongodb.png";
import MariaDBImg from "../../images/MariaDB.png";
import GitImg from "../../images/git-96.png";
import GithubImg from "../../images/github.png";
import DockerImg from "../../images/docker-96.png";
import SlackImg from "../../images/slack-new-96.png";
import TrelloImg from "../../images/trello-96.png";
import FigmaImg from "../../images/figma-96.png";
import GoImg from "../../images/go-logo.png";
import RubyImg from "../../images/ruby.png";
import NavicatImg from "../../images/Navicat-Logo.png";
import Home from "../Home/Home";
import { Link } from "react-router-dom";

export default function Skills() {
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
          <p className={style.folderNameInside}>Skills</p>
          <Link className={style.link} to="/home">
            <button className={style.buttonFolder}>X</button>
          </Link>
        </div>
        <div>
          <div>
            <h3 className={style.skills}>Technical Skills</h3>
          </div>
          <div className={style.containerAllImages}>
            <div className={style.containerReact}>
              <img
                className={style.reactImg}
                src={SvelteImg}
                alt="Svelte Img"
              ></img>
              <p className={style.paragraph}>Svelte</p>
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
              <p className={style.paragraph}>HTML</p>
            </div>
            <div className={style.containerCss}>
              <img className={style.cssImg} src={CssImg} alt="Css Img"></img>
              <p className={style.paragraph}>CSS</p>
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
                src={MariaDBImg}
                alt="MariaDB Img"
              ></img>
              <p className={style.paragraph}>MariaDB</p>
            </div>
            <div className={style.containerRuby}>
              <img className={style.rubyImg} src={RubyImg} alt="Ruby Img"></img>
              <p className={style.paragraph}>Ruby</p>
            </div>
            <div className={style.containerGo}>
              <img className={style.goImg} src={GoImg} alt="Go Img"></img>
              <p className={style.paragraph}>Go</p>
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
          <div className={style.containerNavicat}>
            <img
              className={style.navicatImg}
              src={NavicatImg}
              alt="Navicat Img"
            ></img>
            <p className={style.paragraph}>Navicat</p>
          </div>
        </div>
      </div>
    </div>
  );
}
