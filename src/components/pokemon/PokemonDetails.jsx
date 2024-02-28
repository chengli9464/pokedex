import React from 'react';
import { Tabs } from 'antd';
import DetailsChildren from '@/components/pokemon/DetailsChildren';
import PropTypes from 'prop-types';

function PokemonDetails(props) {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <div>头部切换宝可梦</div>
      <div>
        <Tabs
          onChange={onChange}
          type='card'
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: `Tab ${id}`,
              key: id,
              children: <DetailsChildren></DetailsChildren>,
            };
          })}
        />
      </div>
      <div>图片</div>
      <div>种族值</div>
      <div>属性</div>
      <div>特性</div>
      <div>技能池</div>
    </>
  );
}

PokemonDetails.propTypes = {};

export default PokemonDetails;
