import React from 'react';
import Trigger from './modal';
import About from './views/about';
import AboutModal from './about_modal';
import Router, { RouteHandler, Link } from 'react-router';

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
        <Link className="logo" to="/map" ><img src={"./images/VOICES_LOGO1.png"} alt='Voices of Nashville' /></Link>
        <nav>
          <AboutModal />
          <Trigger />
        </nav>
      </div>
    )
  }
})

export default Header;
