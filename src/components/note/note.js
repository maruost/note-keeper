import React from "react";
import ReactDOM from "react-dom";
import s from "./note.module.scss";
import { cutDescription } from "../../utils/utils";

export default function Note(props) {
  const note = props.note;

  function handleLike() {
    props.onHandleNoteLike(note);
  }
  return (
    <div className={s.box}>
      <div className={s.note} onClick={() => props.onShowNote(note, "1000px")}>
        <h4 className={s.title}>{note.note}</h4>
        <p className={s.description}>{cutDescription(note.description, 100)}</p>
      </div>
      <div className={s.like} onClick={handleLike}></div>
    </div>
  );
}
