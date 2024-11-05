import React from "react";
import Home from "./components/Home/Home";
import PowerOn from "./components/PowerOn/PowerOn";
import ThisPc from "./components/ThisPc/ThisPc";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Music from "./components/Music/Music";
import Footer from "./components/Footer/Footer";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<PowerOn />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/thispc" element={<ThisPc />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/music" element={<Music />} />
        <Route exact path="/code-editor" element={<CodeEditor />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;