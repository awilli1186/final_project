import React from 'react';
import Router, { Route, DefaultRoute, RouteHandler, Link } from 'react-router';

import Home from './components/home';
import Map from './components/map/map';
import Admin from './components/views/admin';
import AdminDashboard from './components/views/admin-dashboard';

let routes = (
  <Route handler={Home} path='/'>
    <DefaultRoute handler={Map} />
    <Route name='map' path='map' handler={Map} />
    <Route name='admin' path='admin' handler={Admin} />
    <Route name='admindash' path='admindash' handler={AdminDashboard} />
  </Route>
);


Router.run(routes, Router.HashLocation, (Handler, state) => {
  React.render(<Handler {...state}/>, document.querySelector('.app'));
});
