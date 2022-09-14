import React from "react";
import { useState } from "react";
import style from "./PowerOn.module.css";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function PowerOn() {
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const changeState = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      return navigate("/home");
    }, 3000);
  };

  return (
    <div className={style.containerPower}>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.containerBtn}>
          <div className={style.blur}>
          </div>
          <button onClick={changeState} className={style.btnPower}>
            Power On
          </button>
        </div>
      )}
    </div>
  );
}
