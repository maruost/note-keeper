import { React, useState, useEffect } from "react";
import Alphabet from "../alphabet/alphabet";
import { dataBySections } from "../../data/constants";
import Filter from "../filter/filter";
import Form from "../form/form";
import Panel from "../panel/panel";
import Sections from "../sections/sections";
import Popup from "../popup/popup";
import Header from "../header/header";
import api from "../../utils/api";
import s from "./main.module.scss";

export default function Main(props) {
  const [lang, setLang] = useState("RU");
  let [newData, setNewData] = useState([...props.notes]);
  const [isPanelOpened, setIsPanelOpened] = useState(0);
  const [panelData, setPanelData] = useState({});
  const [panelWidth, setPanelWidth] = useState({ width: "0px" });
  const [note, setNote] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  // let [notes, setNotes] = useState([]);

  // rendering saved notes
  useEffect(() => {
    api
      .getInitialNotes("notes")
      .then((res) => props.handleNotes([...props.notes, res]))
      .catch((err) => console.log(err));
  }, []);

  //adding new note by submit
  function handleAddNote(data) {
    const { title, section, link, description, language, letter } = data;
    api
      .addNewNote("notes", title, section, link, description, language, letter)
      .then((res) => {
        console.log(res);
        props.handleNotes([...props.notes, res]);
        console.log("notes:", props.notes);
      })
      .catch((err) => console.log(err));
  }

  function handleNoteLike(noteToLike) {
    setIsLiked(!isLiked);
  }

  function handleLang(e) {
    setLang(e.target.textContent);
  }

  function filterData(word) {
    console.log(newData);
    const filteredData = dataBySections.filter((w) => w.letter === word);
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
        notes={props.notes}
      />
      <div className={s.box}>
        <Form handleAddNote={handleAddNote} />
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
        onHandlePopup={props.onHandlePopup}
        onHandleNoteLike={handleNoteLike}
      />
      <Popup isPopupOpened={props.isPopupOpened} />
    </div>
  );
}
