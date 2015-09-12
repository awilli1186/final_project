import React from 'react';

import Parse from '../../parse';
import User from '../../user';

class Admin extends React.Component {
  onSubmit() {
    let self = this;
    let data = {
      username: React.findDOMNode(this.refs.username).value,
      password: React.findDOMNode(this.refs.password).value
    }

    if (!(data.username && data.password)) {
      alert('Please complete the login form.')
      return;
    }

    Parse.User.logIn(data.username, data.password, {
      success: function(user) {
        User.setData(user).login();
        self.context.router.transitionTo('admindash');
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
      }
    });
  }

  render () {
    return (
      <section className="login">
        <h2>Admin Login</h2>
        <input ref="username" type="text" placeholder="Username"/>
        <input ref="password" type="password" placeholder="Password"/>
        <button className='btn btn-primary' ref="login" onClick={this.onSubmit.bind(this)}>Login</button>
         <a className='home' href="map" >Home</a>
      </section>
    );
  }
}

Admin.contextTypes = {
  router: React.PropTypes.func
};

export default Admin;
