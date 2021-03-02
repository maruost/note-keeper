import React from "react";
import ReactDOM from "react-dom";
import s from "./sections.module.scss";
import Section from "../section/section";
import { alph_RU, alph_EN, dataBySections } from "../../data/constants";

export default function Sections(props) {
  return (
    <div className={s.sections}>
      {props.data.map((literal, i) => {
        return (
          <Section
            litera={'A'}
            key={1}
            onHandlePanelData={props.onHandlePanelData}
            onHandlePanelOpen={props.onHandlePanelOpen}
            onHandlePanelClose={props.onHandlePanelClose}
            panelData={props.panelData}
            onHideNote={props.onHideNote}
          />
        );
      })}
    </div>
  );
}

// {props.data.map((literal, i) => {
//   return (
//     <Section
//       literal={literal}
//       key={i}
//       onHandlePanelData={props.onHandlePanelData}
//       onHandlePanelOpen={props.onHandlePanelOpen}
//       onHandlePanelClose={props.onHandlePanelClose}
//       panelData={props.panelData}
//       onHideNote={props.onHideNote}
//     />
//   );


// export default function Sections(props) {
//   return (
//     <div className={s.sections}>
//       {props.lang === "RU" ?
//       alph_RU.map((literal, i) => {
//         return <Section literal={literal} key={i} />;
//       })
//       :
//       alph_EN.map((literal, i) => {
//         return <Section literal={literal} key={i} />;
//       })}
//     </div>
//   );
// }
