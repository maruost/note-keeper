import React from "react";
import s from "./panel.module.scss";
import { data } from "../data/constants";
import { cutDescription } from "../../utils/utils";
import likeIcon from "../../vendor/images/like.svg";
import Note from "../note/note";

export default function Panel(props) {
  const data = props.panelData;
  const note = props.note;

  const [isLiked, setIsLiked] = React.useState(false);

  function toggleLike() {
    setIsLiked(!isLiked);
  }

  function addVideo(link) {
    console.log(link);
    if (!link.includes("youtube")) {
      return (
        <a className={s["full-note-link"]} href="#">
          {link}
        </a>
      );
    } else {
      return (
        <iframe
          width="400"
          height="225"
          src={`https://www.youtube.com/embed/${link.split("v=")[1]}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      );
    }
  }

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
                  return <Note note={note} onShowNote={props.onShowNote} />;
                })
              : 0}
          </div>
        </div>
        <div className={s["full-note"]}>
          <h4 className={s["full-note-title"]}>{note.note}</h4>
          <div className={s["link-box"]}>
            {note.link ? addVideo(note.link) : 0}
          </div>
          <p className={s["full-note-description"]}>{note.description}</p>
        </div>
        <button className={s["add-button"]}>+</button>
      </div>
    </div>
  );
}
