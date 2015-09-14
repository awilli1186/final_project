import React from 'react';
import Router, { Route, DefaultRoute, RouteHandler, Link } from 'react-router';

import Home from './components/home';
import About from './components/views/about';
import Map from './components/map/map';
import Admin from './components/views/admin';
import AdminDashboard from './components/views/admin-dashboard';

let routes = (
  <Route handler={Home} path='/voices_of_nashville'>
    <DefaultRoute handler={Map} />
    <Route name='map' path='map' handler={Map} />
    <Route name='about' path='about' handler={About} />
    <Route name='admin' path='admin' handler={Admin} />
    <Route name='admindash' path='admindash' handler={AdminDashboard} />
  </Route>
);


Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler {...state}/>, document.querySelector('.app'));
});
