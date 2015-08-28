import React from 'react';
import SiteNav from './site-nav';

class App extends React.Component {
  render() {
    let comments = {
      foo: 'foo'
    };
    return (
      <div className="wrapper">
        <SiteNav name="Voices of Nasvhille"/>
      </div>
    )
  }
}

export default App;
