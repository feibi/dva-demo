import React from 'react';
import { connect } from 'dva';
import styles from './Detail.css';

function Detail() {
  return (
    <div className={styles.normal}>
      Route Component: Detail
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Detail);
