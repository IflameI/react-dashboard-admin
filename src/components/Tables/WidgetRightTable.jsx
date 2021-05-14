import React from 'react';
import {
  CogWheelIcon,
  GraphicIconBlue,
  GraphicIconGreen,
  GraphicIconOrange,
  GraphicIconYellow,
  useFuncBlock,
} from '../../components';
import PropTypes from 'prop-types';

const WidgetRightTable = () => {
  const { closedBlock, toggleClosedBlock } = useFuncBlock(false);

  return (
    <div style={{ display: closedBlock ? 'none' : '' }} className='widgets-table__column'>
      <div className='widgets-table__wrapper wrapper-global'>
        <div className='widgets-table__item'>
          <div className='widgets-table__top'>
            <div className='widgets-table__head header__global'>
              <h5 className='widgets-table__title'>
                Table <small>Styles</small>
              </h5>
              <div className='widgets-table__icons'>
                <button>
                  <CogWheelIcon />
                </button>
                <button onClick={toggleClosedBlock}>x</button>
              </div>
            </div>
            <h3 className='widgets-table__subtitle'>Stripped Table</h3>
            <p className='widgets-table__text'>
              Each row is highlighted.You will never lost there. That's how all of us learned in
              school the table should look like. Just add <code>.table-bordered</code> to it.
            </p>
          </div>
          <div className='widgets-table__content'>
            <table className='widgets-table__main table-striped table table-bordered'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Sales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>On the Road</td>
                  <td>$25 224.2</td>
                  <td>
                    <GraphicIconBlue />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>HP Core i7</td>
                  <td>$87 346.1</td>
                  <td>
                    <GraphicIconGreen />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Let's Dance</td>
                  <td>$57 944.6</td>
                  <td>
                    <GraphicIconYellow />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Air Pro</td>
                  <td>$118 533.1</td>
                  <td>
                    <GraphicIconOrange />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='widgets-table__item'>
          <div className='widgets-table__top'>
            <h3 className='widgets-table__subtitle'>Overflow Table</h3>
            <p className='widgets-table__text'>
              Add any non-bordered .table within a widget for a seamless design. Awesome look for no
              cost. Just wrap the table with simple css className
              <code>.widget-table-overflow</code> inside of widget
            </p>
          </div>
          <div className='widgets-table__content widget-table-overflow'>
            <table className='widgets-table__main table-striped table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Sales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>On the Road</td>
                  <td>$25 224.2</td>
                  <td>
                    <GraphicIconBlue />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>HP Core i7</td>
                  <td>$87 346.1</td>
                  <td>
                    <GraphicIconOrange />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Let's Dance</td>
                  <td>$57 944.6</td>
                  <td>
                    <GraphicIconGreen />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Air Pro</td>
                  <td>$118 533.1</td>
                  <td>
                    <GraphicIconYellow />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
WidgetRightTable.propTypes = {
  closedBlock: PropTypes.bool,
  toggleClosedBlock: PropTypes.func,
};
export default WidgetRightTable;
