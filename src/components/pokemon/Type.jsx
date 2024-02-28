// 属性框组件 传属性数组
import React from 'react';
import PropTypes from 'prop-types';
import '@/style/type_en.less';

function Type(props) {
  const { type } = props;
  return (
    <>
      {type.map((item, index) => {
        return (
          <span className={item} key={index}>
            <div style={{ height: '20px' }}>
              <img
                src={`type/${item}_icon.png`}
                alt={`${item} icon.png`}
                width='20'
                height='20'
              />
            </div>
            <span className='normal-in'>
              <div>
                <span className='type-name'>{item}</span>
              </div>
            </span>
          </span>
        );
      })}
    </>
  );
}

Type.propTypes = {
  type: PropTypes.array.isRequired,
};

export default Type;
