import React from 'react';
import { Image } from 'antd';
import StatsTable from '@/components/pokemon/StatsTable';
import PropTypes from 'prop-types';

function DetailsChildren(props) {
  return (
    <>
      <div>详情</div>
      <Image></Image>
      <StatsTable></StatsTable>
    </>
  );
}

DetailsChildren.propTypes = {};

export default DetailsChildren;
