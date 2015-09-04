
class User {
  constructor() {
    this.loggedIn = false;
    this.username = 'Anonymous';
    this.email = null;
    this.phone = null;
  }

  login() {
    this.loggedIn = true;
    return this;
  }

  logout() {
    this.loggedIn = false;
    return this;
  }

  setData(data) {
    let user = data.attributes;
    this.username = user.username;
    this.email = user.email;
    this.phone = user.phone;
    return this;
  }
}

export default new User();
