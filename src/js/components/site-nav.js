import React from 'react';
import Trigger from './modal';

class SiteNav extends React.Component {
  getInitialState(){
     return { show: false };
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
