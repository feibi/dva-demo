import * as appService from '../services/app';
export default {
  namespace: 'app',
  state: {

  },
  reducers: {
    getMenu(state,{menuData} ) {
      return { ...state, menuData };
    },
  },
  effects: {
    *fetch({ }, { call, put }) {

     const { data } = yield call(appService.fetch);
     const menuData=data.result.YUNYING[0].children
     yield put({type:"getMenu",menuData})

    console.log(menuData,'data')
    },
  },
  subscriptions: {
    setup({ dispatch, history },done) {
      dispatch({type: 'fetch'})
      console.log('app')
    },
  },
};
