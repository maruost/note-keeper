import React from "react";
import ReactDOM from "react-dom";
import s from "./popup.module.scss";
import Form from "../form/form";

export default function Popup(props) {
  return (
    <div className={props.isPopupOpened ? s.popup : `${s.popup} ${s.hidden}`}>
      <div className={s.box}>
        <Form titles={["Название", "Ссылка", "Описание"]} button={"Добавить"} />
      </div>
    </div>
  );
}
