import React from 'react';
import Trigger from './modal';
import About from './about';

let Header  = React.createClass ({
  getInitialState(){
     return { show: false };
   },

   showRight() {
		this.refs.right.show();
	},


  render() {
    return (
      <header className='top'>
        <h1>Voices of Nashville</h1>

        <nav>
          <a href="/about" >About Page</a>
          <Trigger/>
        </nav>
      </header>
    )
  }
})

export default Header;
