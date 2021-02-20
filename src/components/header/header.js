import React from "react";
import ReactDOM from "react-dom";
import s from "./header.module.scss";

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.logo}>Note Keeper</div>
      <div className={s.menu}>
        <nav className={s.nav}>
          <ul className={s.links}>
            <li className={s.link}>На главную</li>
            <li className={s.link}>Войти</li>
            <li className={s.link}>Зарегистрироваться</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
