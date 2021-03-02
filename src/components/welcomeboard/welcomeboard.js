import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import Header from "../header/header";
import s from "./welcomeboard.module.scss";

export default function WelcomeBoard() {
  return (
    <div className={s.welcome}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Note Keeper</h1>
        <h3 className={s.subtitle}>
          приложение, в котором можно создавать и хранить важные заметки
        </h3>
        <NavLink to="/registration" className={s.link}>
          <button className={s.button}>Начать работу</button>
        </NavLink>
      </div>
    </div>
  );
}
