import React, {Component} from 'react';
import {connect} from 'dva';
import {
  Form,
  Select,
  Row,
  Col,
  Input,
  Button,
  Icon,
  DatePicker
} from 'antd';
import moment from 'moment';
import styles from './SearchForm.css'
const FormItem = Form.Item;
const Option = Select.Option;
const {MonthPicker, RangePicker} = DatePicker;
const dateFormat = 'YYYY/MM/DD';
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };
  }
  handleSearch = (e) => {
    e.preventDefault();
    const {form,dispatch,onSearch}=this.props;
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      const rangeValue = values['createDate'];
      const fieldsValue = {
        ...values,
        'createDate': rangeValue && [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')]
      }

      onSearch(fieldsValue)
      console.log('Received values of form: ', fieldsValue);
    });
  }
  toggle = () => {
    const {expand} = this.state;
    this.setState({
      expand: !expand
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  dateChange = (dates, dateStrings) => {
    console.log(dates, dateStrings)
  }

  render() {
    const expand = this.state.expand;
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      // labelCol: {
      //   span: 5
      // },
      // wrapperCol: {
      //   span: 19
      // }
    };
    const colLayout = {
      xs: 12,
      md: 6,
      lg: 4
    }
    let {store, status, checkoutType} = this.props
    return (
      <Form className='searchSection' onSubmit={this.handleSearch}>
        <Row gutter={20}>
          <Col {...colLayout} key={0}>
            <FormItem {...formItemLayout}>
              {getFieldDecorator(`query`)(<Input placeholder="编号、客房编号、合同编号"/>)}
            </FormItem>
          </Col>
          <Col {...colLayout} key={1}>
            <FormItem {...formItemLayout}>
              {getFieldDecorator(`storeId`)(
                <Select showSearch placeholder="门店" optionFilterProp="filterValue" onChange={this.handleChange} filterOption={(input, option) => option.props.filterValue.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {store && store.map(d => <Option key={d.id} filterValue={d.name} value={d.id} filterOption>{d.name}</Option>)
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col {...colLayout} key={2}>
            <FormItem {...formItemLayout}>
              {getFieldDecorator(`status`)(
                <Select showSearch placeholder="状态" optionFilterProp="children" onChange={this.handleChange} filterOption={(input, option) => option.props.filterValue.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {status && status.map(d => <Option key={d.id} filterValue={d.name} value={d.id} filterOption>{d.name}</Option>)
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col {...colLayout} key={3}>
            <FormItem {...formItemLayout}>
              {getFieldDecorator(`ctype`)(
                <Select showSearch placeholder="类型" optionFilterProp="children" onChange={this.handleChange} filterOption={(input, option) => option.props.filterValue.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {checkoutType && checkoutType.map(d => <Option key={d.id} filterValue={d.name} value={d.id} filterOption>{d.name}</Option>)
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col {...colLayout} lg={5} key={4}>
            <FormItem {...formItemLayout}>
              {getFieldDecorator(`createDate`)(<RangePicker format={dateFormat} onChange={this.dateChange}/>)}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{
            textAlign: 'right'
          }}>
            <Button type="primary" htmlType="submit">搜索</Button>
            <Button style={{
              marginLeft: 8
            }} onClick={this.handleReset}>
              清除
            </Button>
            <a style={{
              marginLeft: 8,
              fontSize: 12
            }} onClick={this.toggle}>
              更多
              <Icon type={expand
                ? 'up'
                : 'down'}/>
            </a>
          </Col>
        </Row>
      </Form>
    )
  }
}
const WrappedSearchForm = Form.create()(SearchForm)
function mapStateToProps(state) {
  const {search} = state
  return {store: search.store, status: search.status, checkoutType: search.checkoutType};
}

export default connect(mapStateToProps)(WrappedSearchForm);
