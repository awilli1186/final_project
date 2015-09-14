import React from 'react';
import Trigger from './modal';
import About from './views/about';
import AboutModal from './about_modal';

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
        <a className="logo" href="/map" ><img src={"./images/VON1.png"} alt='Voices of Nashville' /></a>
        <nav>
          <AboutModal />
          <Trigger />
        </nav>
      </div>
    )
  }
})

export default Header;
