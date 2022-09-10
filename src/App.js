import React from "react";
import Home from "./components/Home/Home";
import PowerOn from "./components/PowerOn/PowerOn";
import Loader from './components/Loader/Loader';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PowerOn />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/loader" element={<Loader />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
