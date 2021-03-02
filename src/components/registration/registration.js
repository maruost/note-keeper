import React from "react";
import ReactDOM from "react-dom";
import { NavLink, withRouter } from "react-router-dom";
import s from "./registration.module.scss";
import api from "../../utils/api";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
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
    console.log("sfds");
    if (this.state.password === this.state.confirmPassword) {
      console.log("ok");
      api
        .signup({
          partOfUrl: "signup",
          email: this.state.email,
          password: this.state.password,
          name: this.state.username,
        })
        .then((res) => {
          this.props.history.push("/login");
        })
        .catch((err) => console.log(err.message));
    }
  };

  render() {
    return (
      <div className={s.registration}>
        <h1 className={s.greeting}>
          Привет! Зарегистрируйся, чтобы управлять заметками.
        </h1>
        <div className={s.wrapper}>
          <form className={s.form} onSubmit={this.handleSubmit}>
            <h3 className={s.title}>Имя</h3>
            <input
              className={s.input}
              name="username"
              type="text"
              placeholder="Введи имя"
              value={this.state.username}
              onChange={this.handleChange}
            />
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
            <h3 className={s.title}>Подтверждение пароля</h3>
            <input
              className={s.input}
              name="confirmPassword"
              type="password"
              placeholder="Введи пароль ещё раз"
              onChange={this.handleChange}
              value={this.state.confirmPassword}
            />
            <button className={s.button} onSubmit={this.handleSubmit}>
              Зарегистрироваться
            </button>
          </form>
          <p className={s.question}>
            Уже есть аккаунт?{" "}
            <NavLink className={s.entry} to="/login">
              Войти
            </NavLink>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Registration);
