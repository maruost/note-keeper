import "./App.css";
import { React, useState, useEffect } from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Popup from "./components/popup/popup";
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import s from "./app.module.scss";
import WelcomeBoard from "./components/welcomeboard/welcomeboard";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import api from "./utils/api";
import { dataBySections } from "./data/constants";

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  let [notes, setNotes] = useState([]);
  let [db, setDB] = useState([...dataBySections]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  // useEffect(() => {
  //   api
  //     .getInitialNotes("notes")
  //     .then((res) => setNotes([...notes, ...res]))
  //     .catch((err) => console.log(err));
  // }, []);

  function handleDB(data) {
    setDB(data);
  }

  function handleNotes(data) {
    setNotes(data);
  }

  function handlePopup() {
    setIsPopupOpened(!isPopupOpened);
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleTokenCheck() {
    if (localStorage.getItem("name")) {
      console.log(localStorage.getItem("name"));
      setLoggedIn(true);
    }
  }

  // function handleAddNote(data) {
  //   const { title, section, link, description, language, letter } = data;
  //   api
  //     .addNewNote("notes", title, section, link, description, language, letter)
  //     .then((res) => {
  //       console.log(res);
  //       setNotes([...notes, res]);
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <div className={s.app}>
      <Header />
      <div className={s.content}>
        <Switch>
          <Route exact path="/">
            <WelcomeBoard />
          </Route>
          <ProtectedRoute
            path="/my-notes"
            component={Main}
            loggedIn={loggedIn}
            onHandlePopup={handlePopup}
            isPopupOpened={isPopupOpened}
            handleNotes={handleNotes}
            handleDB={handleDB}
            notes={notes}
            db={db}
          />
          {/* <Route exact path="/my-notes">
            <Main onHandlePopup={handlePopup} isPopupOpened={isPopupOpened} />
          </Route> */}
          <Route exact path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/my-notes" /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
