import React from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';

const PaginationComponents = (props) => {
  const { changePages, refreshPage } = props;
  const onChange = (pageNumber) => {
    changePages(pageNumber);
  };
  return (
    <>
      <Pagination
        defaultCurrent={
          localStorage.getItem('page') ? localStorage.getItem('page') : 1
        }
        {...(refreshPage ? { current: 1 } : {})}
        total={1025}
        onChange={onChange}
        showQuickJumper={true}
        showSizeChanger={false}
        style={{ textAlign: 'center' }}
      />
    </>
  );
};

PaginationComponents.propTypes = {
  // 传获取页码的函数
  changePages: PropTypes.func,
  //是否刷新页码
  refreshPage: PropTypes.bool,
};
export default PaginationComponents;
