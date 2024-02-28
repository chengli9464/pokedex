import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
// Antd组件库安装 汉化
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN.js';
import List from '@/components/pokemon/List.jsx';
import Main from '@/views/Main.jsx';

import '@/index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ConfigProvider locale={zhCN}>
    <>
      <RouterProvider router={router} />
      <List></List>
      {/* <Main /> */}
    </>
  </ConfigProvider>
);
