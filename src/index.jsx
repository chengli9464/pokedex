import React from 'react';
import ReactDOM from 'react-dom/client';
// Antd组件库安装 汉化
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN.js'
import Login from './views/Login.jsx';
import App from './App.jsx'
import './index.sass'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    <div className='box'>你好！</div>
    <div>
      <App></App>
    </div>
  </ConfigProvider>
);
