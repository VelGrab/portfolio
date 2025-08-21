import React from "react";
import { useRef } from "react";
import style from "./Contact.module.css";
import FolderContact from "../../images/correo.png";
import Home from "../Home/Home";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Linkedin from "../../images/linkedin.png";
import Github from "../../images/github.png";
import Curriculum from "../../images/curriculum.png";
import pdf from "../../images/cvJulioPena.pdf";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_ID = process.env.REACT_APP_EMAILJS_PUBLIC_ID;

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_ID
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 2500,
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <Home />
      <div className={`window-shell ${style.containerFolder}`}>
        <div className={style.containerLineSup}>
          <div className={style.lineLeft}>
            <img
              className={style.folderImgInside}
              src={FolderContact}
              alt="Folder Inside"
            />
            <p className={style.folderNameInside}>Contact</p>
          </div>
          <div className={style.windowActions}>
            <Link className={style.link} to="/home">
              <button className={style.buttonFolder}>×</button>
            </Link>
          </div>
        </div>
        <div className={style.windowBody}>
          <form className={style.form} ref={form} onSubmit={sendEmail}>
            <h2 className={style.formTitle}>Get In Touch</h2>
            <p className={style.formSubtitle}>
              I'd love to hear from you. Send me a message and I'll respond as
              soon as possible.
            </p>
            <div>
              <input
                required={true}
                placeholder="Name"
                type="text"
                name="name"
                className={style.input}
              />
            </div>
            <div>
              <input
                required={true}
                placeholder="Email"
                type="text"
                name="email"
                className={style.input}
              />
            </div>
            <div>
              <textarea
                placeholder="Type here your message"
                name="message"
                className={style.inputArea}
                required={true}
              />
            </div>
            <input className={style.button} type="submit" value="Send" />
          </form>
          <div className={style.containerSocials}>
            <div>
              <a
                href="https://www.linkedin.com/in/julio-cesar-pena/"
                target="__blank"
              >
                <img
                  className={style.linkedin}
                  src={Linkedin}
                  alt="Linkedin"
                ></img>
                <p className={style.text}>Linkedin</p>
              </a>
            </div>
            <div className={style.containerCv}>
              <img
                className={style.curriculum}
                src={Curriculum}
                alt="Curriculum"
              ></img>
              <button className={style.buttonCV}>
                <a
                  href={pdf}
                  target="__blank"
                  rel="noopener noreferrer"
                  download={pdf}
                  className={style.textCV}
                >
                  Download CV
                </a>
              </button>
            </div>
            <div>
              <a href="https://github.com/VelGrab" target="__blank">
                <img className={style.github} src={Github} alt="Github"></img>
                <p className={style.text}>Github</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
