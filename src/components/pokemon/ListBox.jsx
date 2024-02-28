/* 宝可梦盒子组件 */
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';
import Type from '@/components/pokemon/Type';
import '@/style/type_en.less';
import '@/components/pokemon/ListBox.less';

export default function ListBox(props) {
  const { name, id, type } = props.item;
  const url = props.item.imgUrl?.official.front_default
    ? props.item.imgUrl?.official.front_default
    : props.item.imgUrl?.home.front_default;

  const newId = (id) => {
    if (Number(id) >= 0 && Number(id) <= 9) return `#000${id}`;
    else if (Number(id) >= 10 && Number(id) <= 99) return `#00${id}`;
    else if (Number(id) >= 100 && Number(id) <= 999) return `#0${id}`;
    else if (Number(id) >= 1000 && Number(id) <= 9999) return `#${id}`;
  };

  return (
    <div
      style={{
        padding: '15px',
        margin: '15px',
        gridGap: '30px',
      }}>
      <Image
        width={200}
        src={url}
        fallback='loadFailed.png'
        placeholder={<Image preview={false} src='loadFailed.png' width={200} />}
        alt={name}
        preview={false}
      />
      <div className='id-style'>{newId(id)}</div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Type type={type} />
      </div>
      <div className='name-style'>{name}</div>
    </div>
  );
}

Type.propTypes = {
  // 传每个宝可梦数据的对象进来
  item: PropTypes.object,
};
