import { Breadcrumb, Layout } from 'antd';
import React from 'react';
import HeadComponent from '../masterheader';
import FooterComponent from '../masterfooter';
const { Content } = Layout; 

const App = () => (
  <Layout className="layout">
    <HeadComponent />
    <Content style={{ padding: '0 10px', minHeight: '75vh' }} >
      <Breadcrumb style={{ margin: '16px 0', }} >
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>All Pack BOM Worksheets</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{backgroundColor:"#fdfcff",padding:"10px 10px"}}>Content</div>
    </Content>
    <FooterComponent />
  </Layout>
);

export default App;
