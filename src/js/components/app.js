import React from 'react';
import SiteNav from './site-nav';
import Map from './map'

class App extends React.Component {
  render() {
    let comments = {
      foo: 'foo'
    };
    return (
      <div className="wrapper">
        <SiteNav name="Voices of Nasvhille"/>
          <Map />
      </div>
    )
  }
}

export default App;
