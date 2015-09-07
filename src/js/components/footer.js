import React from 'react';
import Trigger from './modal';
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

      <div className='footer'>
          <a href="/admin" >Admin</a>
      </div>
    )
  }
})

export default Footer;
