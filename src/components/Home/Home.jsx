import React from "react";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import ThisPc from "../ThisPc/ThisPc";
import Contact from "../Contact/Contact";
import "./Home.css";
import Loader from "../Loader/Loader";
import Projects from "../Projects/Projects";
import Music from '../Music/Music'
import Skills from "../Skills/Skills";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Footer />
          <div className="containerFoldersDesktop">
            <ThisPc />
            <Skills />
            <Projects />
            <Contact />
            <Music />
          </div>
        </div>
      )}
    </div>
  );
}