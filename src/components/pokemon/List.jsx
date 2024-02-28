import React, { useEffect, useState } from 'react';
import ListBox from '@/components/pokemon/ListBox';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { getPokemonList } from '@/apis/getPokemonList';
import PaginationComponents from '@/components/layout/PaginationComponents';
import { getPokemonInfo } from '@/utils/getPokemonInfo.js';
import { getPokemonSortSlice } from '@/apis/getPokemonAll.js';
import SearchPokemon from '@/components/pokemon/SearchPokemon.jsx';

export default function List() {
  // 定义空列表盒子
  const [arr, setArr] = useState(
    Array(10).fill({
      url: '',
      id: '',
      type: [],
      name: '',
    })
  );
  // 页码
  const [pages, setPages] = useState(0);
  // 排序方式
  const [sortingMethod, setSortingMethod] = useState('id');
  // 刷新页码
  const [refreshPage, setRefreshPage] = useState(false);
  // 排序方式标题
  const [title, setTitle] = useState('按编号排序');
  // 下拉菜单
  const items = [
    {
      label: (
        <div
          onClick={() => {
            changePages(1);
            setRefreshPage(true);
            setTitle('按编号排序');
            setSortingMethod('id');
          }}>
          按编号排序
        </div>
      ),
      key: '0',
    },
    {
      label: (
        <div
          onClick={() => {
            changePages(1);
            setRefreshPage(true);
            setTitle('按名字排序');
            setSortingMethod('name');
          }}>
          按名字排序
        </div>
      ),
      key: '1',
    },
    {
      label: (
        <div
          onClick={() => {
            changePages(1);
            setRefreshPage(true);
            setTitle('按属性排序');
            setSortingMethod('type');
          }}>
          按属性排序
        </div>
      ),
      key: '2',
    },
  ];

  const changePages = (page, refreshPages = false) => {
    if (refreshPages === true) {
      localStorage.setItem('page', 1);
      setPages(1);
    }
    localStorage.setItem('page', page);
    setPages(page);
  };

  useEffect(() => {
    // 把页码信息存到localStorage
    const page = localStorage.getItem('page')
      ? localStorage.getItem('page')
      : 1;
    if (sortingMethod === 'id') {
      // 获取宝可梦后端数据，分页获取 组件第一次刷新结束 根据id排序
      getPokemonList(page).then((res) => {
        // 重写res.data数组，取需要的字段
        const result = getPokemonInfo(res.data);
        // 禁止刷新页码组件
        setRefreshPage(false);
        // 更新数组 刷新视图
        setArr(result);
      });
    } else if (sortingMethod === 'name') {
      getPokemonSortSlice('name').then((res) => {
        const result = getPokemonInfo(res[page - 1]);
        setRefreshPage(false);
        setArr(result);
      });
    } else if (sortingMethod === 'type') {
      getPokemonSortSlice('type').then((res) => {
        const result = getPokemonInfo(res[page - 1]);
        setRefreshPage(false);
        setArr(result);
      });
    }
  }, [pages, sortingMethod]);

  return (
    // 设置盒子格网使每行展示五个
    <>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
          {title}
          <Space />
          <DownOutlined />
        </a>
      </Dropdown>
      <SearchPokemon></SearchPokemon>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '20px',
          width: '1100px',
        }}>
        {/* 循环每个展示宝可梦的盒子 */}
        {arr.map((item, index) => {
          return <ListBox key={index} item={item} />;
        })}
      </div>
      <PaginationComponents
        changePages={changePages}
        refreshPage={refreshPage}
      />
    </>
  );
}
