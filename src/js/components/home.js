import React from 'react';
// import React, {PropTypes} from 'react';
import Header from './header';
import Map from './map/map';
import Router, { RouteHandler } from 'react-router';

let Home = React.createClass ({

  render() {
    return (
      <div className="wrapper">
        <Header name="Voices of Nasvhille"/>
          <main>
           <RouteHandler {...this.props}/>
           </main>
      </div>
    );
  }
});

Home.contextTypes = {
  router: React.PropTypes.func
};

export default Home;
