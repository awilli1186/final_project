import React from 'react';
import Trigger from './modal';
import About from './about';
import Router, { RouteHandler } from 'react-router';

let Footer  = React.createClass ({
  getInitialState(){
     return { show: false };
   },

   showRight() {
		this.refs.right.show();
	},


  render() {
    return (

      <footer className='footer'>
          <a href="/admin" >Admin</a>
      </footer>
    )
  }
})

export default Footer;
