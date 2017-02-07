import React, {Component} from 'react';
import {connect} from 'dva';
import {Menu, Icon} from 'antd';
import { Link } from 'dva/router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const getMenus = function (menuArray, parentPath) {
  parentPath = parentPath || '/'
  return menuArray.map((item,index) => {
    if (item.children) {
      return (
        <Menu.SubMenu key={item.id} title={<span>{ item.heading}</span>}>
          {getMenus(item.children)}
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.id}>
          <Link to={parentPath + item.sref.split('.').join('/')}>

            {item.title}
          </Link>
        </Menu.Item>
      )
    }
  })
}

class TreeMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      current: '1'
    }
  }
  handleClick(e){
    this.setState({
        current: e.key,
      });
  }
  render() {
    let { menuData ,loading}=this.props;

    let menus=[];
    if(!menuData){
      return (
        <div>loading</div>
      )
    }
    let menuItems=getMenus(menuData)
    return (
      <Menu
        onClick={this.handleClick}
        theme="dark"
        defaultOpenKeys={menuItems.map(item => item.key)}
        selectedKeys={[this.state.current]}
        mode="inline">
        {menuItems}
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.users,
    menuData:state.app.menuData
  };
}
export default connect(mapStateToProps)(TreeMenu);
