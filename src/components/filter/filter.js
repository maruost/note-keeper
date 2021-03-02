import React from "react";
import ReactDOM from "react-dom";
import s from "./filter.module.scss";
import { alph_RU, alph_EN } from "../../data/constants";

export default function Filter(props) {
  return (
    <div className={s.filter}>
      <div className={s.box}>
        <div className={s.lang} onClick={props.onHandleLang}>
          RU
        </div>
        <span className={s.span}>-</span>
        <div className={s.lang} onClick={props.onHandleLang}>
          EN
        </div>
      </div>
    </div>
  );
}
