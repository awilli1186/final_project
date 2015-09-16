import React from 'react';
import Router, { Link } from 'react-router';

class LoginButton extends React.Component {

  render() {
    return(
      <Link id='logbtn' to="admin" className="btn btn-primary">ADMIN LOGIN</Link>
    )
  }
}

export default LoginButton;
