import React from "react";
import Alphabet from "../alphabet/alphabet";
import { data } from "../data/constants";
import Filter from "../filter/filter";
import Form from "../form/form";
import Panel from "../panel/panel";
import Sections from "../sections/sections";
import s from "./main.module.scss";

export default function Main() {
  const [lang, setLang] = React.useState("RU");
  let [newData, setNewData] = React.useState([...data]);
  const [isPanelOpened, setIsPanelOpened] = React.useState(0);
  const [panelData, setPanelData] = React.useState({});
  const [panelWidth, setPanelWidth] = React.useState({ width: "0px" });
  const [note, setNote] = React.useState({});

  function handleLang(e) {
    setLang(e.target.textContent);
  }

  function filterData(word) {
    console.log(newData);
    const filteredData = data.filter((w) => w.letter === word);
    setNewData([...newData, ...filteredData]);
    console.log(newData);
  }

  function handlePanelData(section) {
    setPanelData(section);
  }

  function handlePanelOpen() {
    setIsPanelOpened(true);
    setPanelWidth({ ...panelWidth, width: "500px" });
    console.log(panelWidth);
  }

  function handlePanelClose() {
    setIsPanelOpened(false);
    setPanelWidth({ ...panelWidth, width: "0px" });
    hideNote();
    console.log(panelWidth);
  }

  function changePanelWidth(pixels) {
    setPanelWidth({ ...panelWidth, width: pixels });
  }

  function showNote(note, pixels) {
    setNote(note);
    changePanelWidth(pixels);
  }

  function hideNote() {
    setNote({});
  }

  return (
    <div className={s.main}>
      <Filter onHandleLang={handleLang} lang={lang} />
      <Sections
        lang={lang}
        data={newData}
        onHandlePanelData={handlePanelData}
        onHandlePanelOpen={handlePanelOpen}
        onHandlePanelClose={handlePanelClose}
        panelData={panelData}
        onHideNote={hideNote}
      />
      <div className={s.box}>
        <Form />
        <Alphabet
          onHandleLang={handleLang}
          lang={lang}
          onFilteredData={filterData}
        />
      </div>
      <Panel
        panelData={panelData}
        isPanelOpened={isPanelOpened}
        onHandlePanelOpen={handlePanelOpen}
        onHandlePanelClose={handlePanelClose}
        panelWidth={panelWidth}
        onShowNote={showNote}
        note={note}
      />
    </div>
  );
}
