import React from 'react';
import Header from './header';
import Footer from './footer';
import Map from './map/map';
import Router, { RouteHandler } from 'react-router';

let Home = React.createClass ({

  render() {
    return (
      <div className="wrapper-for-content-outside-of-footer">
      <header>
        <Header />
      </header>
      <main>
        <RouteHandler {...this.props}/>
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
    );
  }
});

Home.contextTypes = {
  router: React.PropTypes.func
};

export default Home;
