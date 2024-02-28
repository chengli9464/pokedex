import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import TagsSwitcher from '@/components/layout/TagSwitcher';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  { label: 'Main Page', key: '1', icon: '' },
  {
    label: 'Pokédex',
    key: '2',
    icon: '',
    children: [
      { label: 'National Pokédex', key: '2-1', icon: '' },
      {
        label: 'Regional Pokédex',
        key: '2-2',
        icon: '',
        children: [
          { label: 'Kanto Pokédex', key: '2-2-1', icon: '' },
          { label: 'New Pokédex', key: '2-2-2', icon: '' },
          { label: 'Hoenn Pokédex', key: '2-2-3', icon: '' },
          { label: 'Sinnoh Pokédex', key: '2-2-4', icon: '' },
          { label: 'Unova Pokédex ', key: '2-2-5', icon: '' },
          { label: 'Kalos Pokédex', key: '2-2-6', icon: '' },
          { label: 'Alola Pokédex', key: '2-2-7', icon: '' },
          {
            label: 'Galar Pokédex',
            key: '2-2-8',
            icon: '',
            children: [
              { label: 'Galar Pokédex', key: '2-2-8-1', icon: '' },
              { label: 'Isle of Armor Pokédex', key: '2-2-8-2', icon: '' },
              { label: 'Crown Tundra Pokédex', key: '2-2-8-3', icon: '' },
            ],
          },
          { label: 'Hisui Pokédex', key: '2-2-9', icon: '' },
          {
            label: 'Paldea Pokédex',
            key: '2-2-10',
            icon: '',
            children: [
              { label: 'Paldea Pokédex', key: '2-2-10-1', icon: '' },
              { label: 'Kitakami Pokédex', key: '2-2-10-2', icon: '' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Type',
    key: '3',
    icon: '',
    children: [{ label: 'Type chart', key: '3-1', icon: '' }],
  },
  { label: 'Ability', key: '4', icon: '' },
  { label: 'Moves', key: '5', icon: '' },
  { label: 'Items', key: '6', icon: '' },
];
const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={'280px'}>
        <div className='demo-logo-vertical' />
        <Menu
          theme='dark'
          defaultSelectedKeys={['1']}
          mode='inline'
          items={items}
        />
      </Sider>
      <Layout>
        <Header />
        <Content>
          {/* 面包屑 */}
          <TagsSwitcher />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Main;
