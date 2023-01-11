import React from 'react';
import { Layout, Menu, Tooltip  } from 'antd';
import { Link, Redirect } from "react-router-dom";
import { LogoutOutlined } from '@ant-design/icons';
const { Header } = Layout;

var Var_AppVersion = localStorage.getItem('session_version');
var Var_UserName = localStorage.getItem('session_username');

const loginValidation = () => {
   
  if(Var_UserName === null)
  {
      return <Redirect to={"/login/"} />
  }

};

const HeadComponent = () => (
    <Header style={{backgroundColor:"#9254de",paddingLeft:"0px",paddingRight:"0px"}}>
    {loginValidation()}
    
    <div onClick={()=>window.location.href = "/login"} style={{float:"right",color:"white",backgroundColor:"#cf1322",paddingInline:"20px",cursor:"pointer"}}><Tooltip placement="bottom" title={"Sign Out"}><LogoutOutlined style={{fontSize:"20px"}} /></Tooltip></div>
    <div style={{float:"right",color:"white",backgroundColor:"#391085",paddingInline:"20px"}}>{Var_UserName}</div>
    <div style={{float:"right"}}>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={'0'}>
              <Menu.Item key="0"><Link to="/dashboard" /><span>Dashboard</span></Menu.Item>
              <Menu.Item key="1"><Link to="/settings" /><span>Settings</span></Menu.Item>
              <Menu.Item key="2"><Link to="/users" /><span>Users</span></Menu.Item>
        </Menu>
    </div>
    <div style={{float:"left",color:"white",backgroundColor:"#531dab",paddingInline:"20px"}}>PVH PACKING BOM AUTOMATION {Var_AppVersion}</div>
    
    
  </Header>
  );
  
  export default HeadComponent;