import { Layout, Menu  } from 'antd';
import { layoutStyle, siderStyle, headerStyle, contentStyle, footerStyle } from './styles';
import { getMenuItem } from './tools/meme-menu';

const { Header, Footer, Sider, Content } = Layout;

const menuItems = getMenuItem();

export default function MemeGenerate() {
  return (
    <Layout style={layoutStyle}>
      <Sider width="12%" style={siderStyle}>
        <Menu items={menuItems}/>
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
  </Layout>
  )
}
