import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm , Button} from 'antd';
import { PAGE_SIZE } from '../../constants';
import styles from './List.css';
import {listColumns} from './config'
function List({ dispatch,list: dataSource,loading,pageChangeHandler}) {

  let {currentPage,total,pageSize}=dataSource

  return (
    <div className={styles.normal}>
      <div>
        <Table
          columns={listColumns}
          dataSource={dataSource.list}
          bordered
          rowKey={record => record.id}
          loading={loading}
          pagination={false}
          size="middle"
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          onChange={pageChangeHandler}
          current={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list } = state;
  return {
    loading: state.loading.models.list,
    list
  };
}

export default connect(mapStateToProps)(List);
