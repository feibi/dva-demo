import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';

import Detail from "./routes/Detail/Detail.js";

import Users from "./routes/Users/Users.js";


import List from "./routes/List/List.js";


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/detail" component={Detail} />
      <Route path="/users" component={Users} />
      <Route path="/list" component={List} />
    </Router>
  );
}

export default RouterConfig;
