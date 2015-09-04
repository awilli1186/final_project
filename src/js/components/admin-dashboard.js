import React, { PropTypes } from 'react'
import User from '../user';

class AdminDashboard extends React.Component {
  render () {
    let message = "Please log in.";

    if (User.loggedIn) {
      message = `Welcome ${User.username}. This is your dashboard.`;
    }

    return (
      <section className="dashboard">
        <h2>Dashboard</h2>
        <p>{message}</p>
         <a href="/" >Home</a>
      </section>
    )
  }
}

export default AdminDashboard;
