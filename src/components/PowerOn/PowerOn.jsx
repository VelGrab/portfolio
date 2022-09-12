import React from "react";
import { useState } from "react";
import style from "./PowerOn.module.css";
import { Link } from "react-router-dom";

export default function PowerOn() {
  return (
    <div className={style.containerPower}>-
      <Link to="/home">
          <button className={style.btnPower}>Power On</button>
      </Link>
    </div>
  );
}

