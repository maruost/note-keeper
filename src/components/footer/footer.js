import React from "react";
import ReactDOM from "react-dom";
import s from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={s.footer}>
      <p className={s.copyrigth}>&#169; 2021 Остапенко Мария</p>
    </div>
  );
}
