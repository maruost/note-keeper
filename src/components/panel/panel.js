import React from "react";
import s from "./panel.module.scss";
import { data } from "../data/constants";
import { cutDescription } from "../../utils/utils";

export default function Panel(props) {
  const data = props.panelData;
  const note = props.note;

  return (
    <div className={s.panel} style={props.panelWidth}>
      <div className={s["panel-wrapper"]}>
        <button className={s.button} onClick={props.onHandlePanelClose}>
          {">"}
        </button>
        <div className={s.wrapper}>
          <h3 className={s.section}>{data.section}</h3>
          <div className={s.notes}>
            {data.notes
              ? data.notes.map((note) => {
                  return (
                    <div
                      className={s.note}
                      onClick={() => props.onShowNote(note, "1000px")}
                    >
                      <h4 className={s.title}>{note.note}</h4>
                      <p className={s.description}>
                        {cutDescription(note.description, 100)}
                      </p>
                    </div>
                  );
                })
              : 0}
          </div>
        </div>
        <div className={s["full-note"]}>
          <h4 className={s["full-note-title"]}>{note.note}</h4>
          <a className={s["full-note-link"]} href="#">
            {note.link}
          </a>
          <p className={s["full-note-description"]}>{note.description}</p>
        </div>
        <button className={s["add-button"]}>+</button>
      </div>
    </div>
  );
}
