import React from "react";
import ReactDOM from "react-dom";
import api from "../../utils/api";
import s from "./form.module.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      section: "",
      link: "",
      description: "",
      language: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state.title);
  };

  setLang(str) {
    if (/[а-яА-Я]/i.test(str)) {
      return "RU";
    } else if (/[a-zA-Z]/i.test(str)) {
      return "EN";
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddNote({
      title: this.state.title,
      section: this.state.section,
      link: this.state.link,
      description: this.state.description,
      language: this.setLang(this.state.section),
      letter: this.state.section[0].toUpperCase(),
    });
  };

  render() {
    return (
      <div className={s.form}>
        <div className={s.wrapper}>
          <form className={s.box} onSubmit={this.handleSubmit}>
            <h3 className={s.title}>Название</h3>
            <input
              className={s.input}
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <h3 className={s.title}>Раздел</h3>
            <input
              className={s.input}
              name="section"
              value={this.state.section}
              onChange={this.handleChange}
            />
            <h3 className={s.title}>Ссылка</h3>
            <input
              className={s.input}
              name="link"
              value={this.state.link}
              onChange={this.handleChange}
            />
            <h3 className={s.title}>Описание</h3>
            <textarea
              className={s.textarea}
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
            <button className={s.button} onSubmit={this.handleSubmit}>
              Добавить
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
