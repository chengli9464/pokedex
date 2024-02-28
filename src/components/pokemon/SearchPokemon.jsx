import React, { useState } from 'react';
import { Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

function SearchPokemon(props) {
  const [inputValue, setInputValue] = useState('');

  const changeValue = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div>
      <SearchOutlined style={{ fontSize: 20 }} />
      <Space />
      <Input
        placeholder='请输入关键字'
        value={inputValue}
        onChange={changeValue}
        style={{ width: 200, height: 30 }}></Input>
    </div>
  );
}

SearchPokemon.propTypes = {};

export default SearchPokemon;
