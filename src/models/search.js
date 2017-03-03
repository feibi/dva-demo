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
    // *toSearch({}, {call, put}) {
    //
    // }
    *fetch({}, {call, put}) {
      // [store,status,checkoutType]
      const [store,status,checkoutType] = yield [
        call(searchService.fetchStore),
        call(searchService.fetchStatus),
        call(searchService.fetchCheckoutType)
      ];
      yield put({
        type: 'save',
        data: {
            store:store&&store.data&&store.data.result,
            status:status&&status.data&&status.data.result,
            checkoutType:checkoutType&&checkoutType.data&&checkoutType.data.result
        }
      });
    },
  },
  subscriptions : {
    setup({
      dispatch,
      history
    }, done) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/list') {
          //dispatch({type: 'fetch'});
        }
      });
    }
  }
};
