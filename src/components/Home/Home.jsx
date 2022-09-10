import React from "react";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import ThisPc from "../ThisPc/ThisPc";
import SocialNetwork from "../SocialNetwork/SocialNetwork.jsx";
import Contact from "../Contact/Contact";
import "./Home.css";
import Loader from "../Loader/Loader";
import Projects from "../Projects/Projects";
import Music from '../Music/Music'

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
            <SocialNetwork />
            <Projects />
            <Contact />
            <Music />
          </div>
        </div>
      )}
    </div>
  );
}
