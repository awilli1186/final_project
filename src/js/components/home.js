import React from 'react';
import Header from './header';
import Footer from './footer';
import Router, { RouteHandler } from 'react-router';

let Home = React.createClass ({

  render() {
    return (
      <div>
      <div className="wrapper">
      <header>
        <Header />
      </header>
      <main>
        <RouteHandler {...this.props}/>
      </main>
      </div>
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
