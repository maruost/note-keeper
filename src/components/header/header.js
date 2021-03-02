import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import s from "./header.module.scss";

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.logo}>Note Keeper</div>
      <div className={s.menu}>
        <nav className={s.nav}>
          <ul className={s.links}>
            <li className={s.link}>На главную</li>
            <NavLink to="/login" className={s.link}>
              Войти
            </NavLink>
            <NavLink to="/registration" className={s.link}>
              Зарегистрироваться
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}
