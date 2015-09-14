import React from 'react';
import Trigger from './modal';
import About from './views/about';

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
        <a className="logo" href="/map" ><h1>Voices of Nashville</h1></a>
        <nav>
          <a href="/about" >About Page</a>
          <Trigger/>
        </nav>
      </div>
    )
  }
})

export default Header;
