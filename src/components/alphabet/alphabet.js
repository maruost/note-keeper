import React from "react";
import ReactDOM from "react-dom";
import s from "./alphabet.module.scss";
import { alph_RU, alph_EN } from "../../data/constants";

export default function Alphabet(props) {
  const [lang, setLang] = React.useState(props.lang);

  function handleLang(e) {
    setLang(e.target.textContent);
  }

  function handleClick(e) {
    props.onFilteredData(e.target.textContent);
  }

  return (
    <div className={s.alpahabet}>
      <div className={s.box}>
        <p className={s.lang} onClick={handleLang}>
          RU
        </p>
        <p className={s.lang} onClick={handleLang}>
          EN
        </p>
      </div>
      <div className={s.words}>
        {lang === "RU"
          ? alph_RU.map((w) => (
              <p className={s.word} onClick={handleClick}>
                {w}
              </p>
            ))
          : alph_EN.map((w) => (
              <p className={s.word} onClick={handleClick}>
                {w}
              </p>
            ))}
      </div>
    </div>
  );
}
