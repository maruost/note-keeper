import "./App.css";
import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import s from "./app.module.scss";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
