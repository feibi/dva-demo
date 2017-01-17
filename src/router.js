import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Detail from "./routes/Detail.js";

import Users from "./routes/Users.js";


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/detail" component={Detail} />
      <Route path="/users" component={Users} />
    </Router>
  );
}

export default RouterConfig;
