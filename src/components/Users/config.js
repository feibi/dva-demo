import React from 'react';
module.exports= [
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
      <span >
        查看
      </span>
    ),
  },
];
