import React from 'react';
import Header from './header';
import Footer from './footer';
import Map from './map/map';
import Router, { RouteHandler } from 'react-router';

let Home = React.createClass ({

  render() {
    return (
      <main className="home">
        <Header />
           <RouteHandler {...this.props}/>
          <Footer />
      </main>
    );
  }
});

Home.contextTypes = {
  router: React.PropTypes.func
};

export default Home;
