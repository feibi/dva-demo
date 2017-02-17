import * as searchService from '../services/search';
export default {
  namespace : 'search',
  state : {},
  reducers : {
    save(state, {data: list}) {
      return {
        ...state,
        ...list
      };
    }
  },
  effects : {
    *fetchStore({}, {call, put, s}) {
      const {data} = yield call(searchService.fetchStore, {});
      // const { status } = yield call(searchService.fetchStatus);
      if (data.result) {
        yield put({
          type: 'save',
          data: {
            store: data.result
          }
        });
      }
    },
    *fetchStatus({}, {call, put}) {
      const {data} = yield call(searchService.fetchStatus, {});
      // const { status } = yield call(searchService.fetchStatus);
      if (data.result) {
        yield put({
          type: 'save',
          data: {
            status: data.result
          }
        });
      }
    },
    *fetchCheckoutType({}, {call, put}) {
      const {data} = yield call(searchService.fetchCheckoutType, {});
      // const { status } = yield call(searchService.fetchStatus);
      if (data.result) {
        yield put({
          type: 'save',
          data: {
            checkoutType: data.result
          }
        });
      }
    },
    *toSearch({}, {call, put}) {

    }
  },
  subscriptions : {
    setup({
      dispatch,
      history
    }, done) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/list') {
          dispatch({type: 'fetchStore'});
          dispatch({type: 'fetchStatus'});
          dispatch({type: 'fetchCheckoutType'});
        }
      });
    }
  }
};
