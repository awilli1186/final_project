import React from 'react';
import Trigger from './modal';

let SiteNav  = React.createClass ({
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
          <Trigger/>

        </nav>
      </header>
    )
  }
})

export default SiteNav;
