import dva from 'dva';
import createLoading from 'dva-loading'
import { useRouterHistory , browserHistory } from 'dva/router';
import { createHashHistory } from 'history';
import { message } from 'antd';
import './index.css';

// 1. Initialize
const app = dva({
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
  onError(e) {
     message.error(e.message, /* duration */3);
  }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require("./models/app"));

app.model(require("./models/users"));

app.model(require("./models/list"));

app.model(require("./models/detail"));

app.model(require("./models/search"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
