import React from "react";
import Home from "./components/Home/Home";
import PowerOn from "./components/PowerOn/PowerOn";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PowerOn />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
