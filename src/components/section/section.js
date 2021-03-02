import React from "react";
import ReactDOM from "react-dom";
import s from "./section.module.scss";

export default function Section(props) {
  const data = props.litera;

  return (
    <div className={s.section}>
      <h4 className={s.litera}>{data.letter}</h4>
      <p className={s.counter}>{data.names.length}</p>
      <div className={s.box}>
        {data.names.map((name) => {
          return (
            <p
              className={s.name}
              onClick={() => {
                props.onHandlePanelData(name);
                props.onHandlePanelOpen();
                props.onHideNote();
              }}
            >
              {name.section}
            </p>
          );
        })}
      </div>
    </div>
  );
}
