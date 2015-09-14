import React from 'react';
import {Parse} from 'parse';

class LogoutButton extends React.Component {
  onLogout() {
    Parse.User.logOut();
    this.context.router.transitionTo('admin');
  }

  render() {
    return(
      <button id='logout' className="btn btn-primary" onClick={this.onLogout.bind(this)} >Logout</button>
    )
  }
}

LogoutButton.contextTypes = {
    router: React.PropTypes.func
};

export default LogoutButton;
