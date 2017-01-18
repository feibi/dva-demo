import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm , Button} from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';
import UserModal from './UserModal';
function Users({ dispatch,list: dataSource,loading, total, page: current }) {
  function deleteHandler(id) {
  console.warn(`TODO: ${id}`);
    dispatch({
      type: 'users/remove',
      payload: id,
    });
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/users',
      query: { page },
    }));
  }

function createHandler(values) {
  dispatch({
    type: 'users/create',
    payload: values
  });
}

  function editHandler(id, values) {
    //console.log(id,values)
   dispatch({
     type: 'users/patch',
     payload: { id, values },
   });
 }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
      width:50,
      sorter: (a, b) => a.id - b.id
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      children: [
        {
          title: 'Street',
          dataIndex: 'street',
          key: 'street',
          render:(text,record)=><span>{record.address.street}</span>,
          width: 200
        },{
          title:'Suite',
          dataIndex:'suite',
          key:'suite',
          render:(text,record)=><span>{record.address.suite}</span>,
        }
      ]
    },
    {
      title: 'Operation',
      key: 'operation',
      fixed: 'right',
      width: 150,
      render: (text,  record) => (
        <span className={styles.operation}>
          <UserModal record={record} onOk={editHandler.bind(null, record.id)}>
            <a>Edit </a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <UserModal record={{}} onOk={createHandler} >
            <Button type="primary">Create User</Button>
          </UserModal>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          bordered
          rowKey={record => record.id}
          loading={loading}
          pagination={false}
          scroll={{ x: 1300 }}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          onChange={pageChangeHandler}
          current={current}
          pageSize={PAGE_SIZE}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    loading: state.loading.models.users,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Users);
