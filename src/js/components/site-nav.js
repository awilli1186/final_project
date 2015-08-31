import React from 'react';
import Trigger from './modal';
import Menu from './slide-right';
import MenuItem from './menu-items';

class SiteNav extends React.Component {
  getInitialState(){
     return { show: false };
   }

   showRight() {
		this.refs.right.show();
	}


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
}

export default SiteNav;
//
// <button onClick={this.showRight}>Show Right Menu!</button>
//   <Menu ref="right" alignment="right">
//     <MenuItem hash="first-page">First Page</MenuItem>
//     <MenuItem hash="second-page">Second Page</MenuItem>
//     <MenuItem hash="third-page">Third Page</MenuItem>
//   </Menu>
