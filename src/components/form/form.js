import React from "react";
import ReactDOM from "react-dom";
import s from "./form.module.scss";

export default function Form() {
  return (
    <div className={s.form}>
      <div className={s.wrapper}>
        <form className={s.box}>
          <h3 className={s.title}>Название</h3>
          <input className={s.input} />
          <h3 className={s.title}>Раздел</h3>
          <input className={s.input} />
          <h3 className={s.title}>Описание</h3>
          <textarea className={s.textarea}></textarea>
          <button className={s.button}>Добавить</button>
        </form>
      </div>
    </div>
  );
}
