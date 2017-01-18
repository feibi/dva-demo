import React from 'react';
import { connect } from 'dva';
import styles from './List.css';
import ListComponent from '../components/List/List';
import MainLayout from '../components/MainLayout/MainLayout';

function List() {
  return (
    <MainLayout location={location}>
      <div className="">
        <ListComponent />
      </div>
    </MainLayout>
  );
}


export default connect()(List);
