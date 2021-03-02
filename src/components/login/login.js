import React from "react";
import ReactDOM from "react-dom";
import { NavLink, withRouter } from "react-router-dom";
import s from "./login.module.scss";
import api from "../../utils/api";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    if (!this.state.email || !this.state.password) {
      console.log("okggg");
      return;
    }
    console.log("okggg");
    api
      .signin({
        partOfUrl: "/signin",
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        api
          .getUserData({
            partOfUrl: "me",
          })
          .then((res) => {
            localStorage.setItem("name", res.data.name);
            console.log(localStorage.getItem("name"));
            this.setState({ email: "", password: "" }, () => {
              this.props.handleLogin();
              this.props.history.push("/my-notes");
            });
          });
      })

      .catch((err) => console.log(err.message));
  };

  render() {
    return (
      <div className={s.login}>
        <h1 className={s.greeting}>
          Привет! Войди, чтобы управлять заметками.
        </h1>
        <div className={s.wrapper}>
          <form className={s.form} onSubmit={this.handleSubmit}>
            <h3 className={s.title}>Email</h3>
            <input
              className={s.input}
              name="email"
              type="email"
              placeholder="Введи email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <h3 className={s.title}>Пароль</h3>
            <input
              className={s.input}
              name="password"
              type="password"
              placeholder="Введи пароль"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <button className={s.button} onSubmit={this.handleSubmit}>
              Войти
            </button>
          </form>
          <p className={s.question}>
            Ещё нет аккаунта?{" "}
            <NavLink className={s.entry} to="/registration">
              Зарегистрироваться
            </NavLink>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);

// export default function Login() {
//   return (
//     <div className={s.login}>
//       <h1 className={s.greeting}>
//         Привет! Войдите, чтобы управлять заметками.
//       </h1>
//       <Form titles={["Email", "Пароль"]} button={"Войти"} />
//       <p className={s.question}>Ещё нет аккаунта?</p>
//       <NavLink to="/registration" className={s.signin}>
//         Зарегистрироваться
//       </NavLink>
//     </div>
//   );
// }
