import * as listService from '../services/list';
export default {
  namespace: 'list',
  state: {

  },
  reducers: {
    save(state, { payload: { data: list } }) {
      return { ...state, ...list };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {

     const { data } = yield call(listService.fetch, { page });

     if(data.result){
       yield put({
         type: 'save',
         payload: {
           data:data.result
         },
       });
     }else{
       
     }
    },
  },
  subscriptions: {
    setup({ dispatch, history },done) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/list') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
