import React from 'react';
import { connect } from 'dva';
import styles from './List.css';
import ListComponent from '../../components/List/List';
import WrappedSearchForm from '../../components/List/SearchForm';
import MainLayout from '../../components/MainLayout/MainLayout';
import { routerRedux } from 'dva/router';

function List({dispatch}) {
  const searchProps={
    onSearch (fieldsValue) {
      dispatch({
        type: 'list/fetch',
        payload: fieldsValue
      })
    },
  }

  const listProps={
    pageChangeHandler(page){
      console.log(page)
      dispatch(routerRedux.push({
          pathname: '/list',
          query: { page },
      }));
    }
  }
  return (
    <MainLayout location={location}>
      <WrappedSearchForm {...searchProps}/>
      <ListComponent {...listProps}/>
    </MainLayout>
  );
}

function mapStateToProps ({ users }) {
  return { users }
}

export default connect(mapStateToProps)(List);
