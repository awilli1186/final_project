import React from 'react';
import SiteNav from './site-nav';
import Map from './map/map';

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <SiteNav name="Voices of Nasvhille"/>
          <Map />
      </div>
    )
  }
}

export default App;
