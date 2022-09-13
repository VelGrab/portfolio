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

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u7twcmm",
        "template_jfu8j97",
        form.current,
        "KVgfIgB8_bGnvHii0"
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
      <div className={style.containerFolder}>
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
          <form className={style.form} ref={form} onSubmit={sendEmail}>
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
