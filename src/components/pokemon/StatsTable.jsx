import React from 'react';
import PropTypes from 'prop-types';

function StatsTable(props) {
  return (
    <>
      <table className=''>
        <tbody>
          <React.Fragment>
            <tr>
              <th colSpan={'2'} rowSpan={'2'}>
                Stat
              </th>
              <th colSpan={'2'}>Range</th>
            </tr>
            <tr>
              <th>At Lv.50</th>
              <th>At lv.100</th>
            </tr>
            <tr>
              <th>
                <div>Hp:</div>
                <div>45</div>
              </th>
              <td>
                <div>长度</div>
              </td>
              <td>105 - 152</td>
              <td>200 - 294</td>
            </tr>
            <tr>
              <th>
                <div>Attack:</div>
                <div>45</div>
              </th>
              <td>
                <div>长度</div>
              </td>
              <td>105 - 152</td>
              <td>200 - 294</td>
            </tr>
            <tr>
              <th>
                <div>Sp. Atk:</div>
                <div>45</div>
              </th>
              <td>
                <div>长度</div>
              </td>
              <td>105 - 152</td>
              <td>200 - 294</td>
            </tr>
            <tr>
              <th>
                <div>Defense:</div>
                <div>45</div>
              </th>
              <td>
                <div>长度</div>
              </td>
              <td>105 - 152</td>
              <td>200 - 294</td>
            </tr>
            <tr>
              <th>
                <div>Sp. Atk:</div>
                <div>45</div>
              </th>
              <td>
                <div>长度</div>
              </td>
              <td>105 - 152</td>
              <td>200 - 294</td>
            </tr>
            <tr>
              <th>
                <div>Sp. Def:</div>
                <div>45</div>
              </th>
              <td>
                <div>长度</div>
              </td>
              <td>105 - 152</td>
              <td>200 - 294</td>
            </tr>
            <tr>
              <th>
                <div>Sp. Atk:</div>
                <div>45</div>
              </th>
              <td>
                <div>长度</div>
              </td>
              <td>105 - 152</td>
              <td>200 - 294</td>
            </tr>
            <tr>
              <th>
                <div>Speed:</div>
                <div>45</div>
              </th>
              <td>
                <div>长度</div>
              </td>
              <td>105 - 152</td>
              <td>200 - 294</td>
            </tr>
            <tr>
              <th>
                <div>Total:</div>
                <div>318</div>
              </th>
            </tr>
          </React.Fragment>
        </tbody>
      </table>
    </>
  );
}

StatsTable.propTypes = {};

export default StatsTable;
