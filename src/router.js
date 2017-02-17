import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import Detail from "./routes/Detail/Detail.js";
import Users from "./routes/Users/Users.js";
import List from "./routes/List/List.js";


const routes = [
    {
      path: '/',
      component: IndexPage,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          cb(null, {component: IndexPage})
        })
      },
      childRoutes: [
        {
          path: 'detail',
          name: 'detail',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, Detail)
            })
          }
        }, {
          path: 'users',
          name: 'users',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, Users)
            })
          }
        }, {
          path: '/list',
          name: 'list',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, List)
            })
          }
        }
      ]
    }
  ]

// {
//     path: '*',
//     name: 'error',
//     getComponent (nextState, cb) {
//       require.ensure([], require => {
//         cb(null, require('./routes/error'))
//       })
//     }
//   }
// <Router history={history} routes={routes}>
//   <Route path="/" component={IndexPage} />
//   <Route path="/detail" component={Detail} />
//   <Route path="/users" component={Users} />
//   <Route path="/list" component={List} />
// </Router>
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Router history={history} routes={routes}>
        <Route path="/" component={IndexPage} />
        <Route path="/detail" component={Detail} />
        <Route path="/users" component={Users} />
        <Route path="/list" component={List} />
      </Router>
    </Router>
  );
}

export default RouterConfig;
