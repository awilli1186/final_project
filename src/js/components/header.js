import React from 'react';
import Trigger from './modal';
import About from './about';
import Router, { RouteHandler } from 'react-router';

let Header  = React.createClass ({
  getInitialState(){
     return { show: false };
   },

   showRight() {
		this.refs.right.show();
	},


  render() {
    return (
      <div className='top'>
        <h1>Voices of Nashville</h1>

        <nav>
          <Trigger/>
          <a href="/about" >About Page</a>
          <a href="/" >Home</a>
          <a href="/admin" >Admin</a>
          <a href="/admindash" >Admin Dashboard</a>

        </nav>
      </div>
    )
  }
})

export default Header;
