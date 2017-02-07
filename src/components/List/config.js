import React from 'react';
import { Icon} from 'antd';
import style from "./List.css"
export const listColumns = [
  {
    title: '编号',
    dataIndex: 'number',
    key: 'number',
    fixed: 'left',
    width:80,
    render:(text,record)=>{
      return (<a>{text}</a>)
    }
  },
  {
    title: '门店',
    dataIndex: 'storeName',
    key: 'storeName',
  },
  {
    title: '客房编号',
    dataIndex: 'roomNumber',
    key: 'roomNumber',
    render:(text,record)=>{
      return (<a>{text}</a>)
    }
  },
  {
    title: '合同编号',
    dataIndex: 'contractNumber',
    key: 'contractNumber',
    render:(text,record)=>{
      return (<a>{text}</a>)
    }
  },
  {
    title: '租客',
    dataIndex: 'tenantName',
    key: 'tenantName',
  },
  {
    title: '创建时间',
    dataIndex: 'createDate',
    key: 'createDate',
  },
  {
    title: '状态',
    dataIndex: 'statusName',
    key: 'statusName',
  },
  {
    title: '账单编号',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
    render:(text,record)=>{
      return (<a>{text}</a>)
    }
  },
  {
    title: '账期',
    dataIndex: 'orderTerm',
    key: 'orderTerm',
  },
  {
    title: '账单状态',
    dataIndex: 'orderStatusName',
    key: 'orderStatusName',
  },
  {
    title: '账单日',
    dataIndex: 'rentStart',
    key: 'rentStart',
  },
  {
    title: '进度',
    dataIndex: 'processName',
    key: 'processName',
  },
  {
    title: '耗时',
    dataIndex: 'costDay',
    key: 'costDay',

  },
  {
    title:'操作',
    key:'operation',
    fixed: 'right',
    width:120,
    render:(text,record,index)=>{
      return (
        <div className={style.operation}>
          <a title="查看详情"><Icon type="eye-o" /></a>
          <a><Icon type="edit" /></a>
          <a><Icon type="delete" /></a>
          <a title="结算"><Icon type="calculator" /></a>
        </div>
      )
    }
  }
];
