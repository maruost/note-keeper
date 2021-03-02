class MainApi {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  _checkStatus = (res) => {
    if (!res.ok) {
      return Promise.reject(res.status);
    } else {
      return res.json();
    }
  };

  signup = ({ partOfUrl, email, password, name }) => {
    return fetch(`/${partOfUrl}`, {
      method: "POST",
      credentials: "include",
      headers: this.headers,
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    }).then((res) => this._checkStatus(res));
  };

  signin = ({ partOfUrl, email, password }) => {
    return fetch(`${partOfUrl}`, {
      method: "POST",
      credentials: "include",
      headers: this.headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => {
      this._checkStatus(res);
    });
  };

  getUserData = ({ partOfUrl }) => {
    return fetch(`/users/${partOfUrl}`, {
      method: "GET",
      credentials: "include",
      headers: this.headers,
    }).then((res) => this._checkStatus(res));
  };

  getInitialNotes = (partOfUrl) => {
    return fetch(`/${partOfUrl}`, {
      headers: this.headers,
    }).then((res) => this._checkStatus(res));
  };

  addNewNote = (
    partOfUrl,
    title,
    section,
    link,
    description,
    language,
    letter
  ) => {
    return fetch(`/${partOfUrl}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        title: title,
        section: section,
        link: link,
        description: description,
        language: language,
        letter: letter,
      }),
    }).then((res) => this._checkStatus(res));
  };
}

const config = {
  // url: "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000/"
  },
};

const api = new MainApi(config);
export default api;
