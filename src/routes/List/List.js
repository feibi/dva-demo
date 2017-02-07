import React from 'react';
import { connect } from 'dva';
import styles from './List.css';
import ListComponent from '../../components/List/List';
import WrappedSearchForm from '../../components/List/SearchForm';
import MainLayout from '../../components/MainLayout/MainLayout';

function List() {
  return (
    <MainLayout location={location}>

      <div className="">
        <WrappedSearchForm/>
        <ListComponent />
      </div>
    </MainLayout>
  );
}


export default connect()(List);
