import React from 'react';
import Trigger from './modal';
import Router, { RouteHandler, Link } from 'react-router';

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
          <Link to="/admin" >ADMIN</Link>
      </div>
    )
  }
})

export default Footer;
