import React from 'react';
import { CogWheelIcon, useFuncBlock } from '../../components';
import PropTypes from 'prop-types';

const WidgetLeftTable = () => {
  const { closedBlock, toggleClosedBlock } = useFuncBlock(false);
  return (
    <div className='widgets-table__column'>
      <div
        style={{ display: closedBlock ? 'none' : '' }}
        className='widgets-table__wrapper wrapper-global'>
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
              Each row is highlighted. You will never lost there. Just
              <code>.table-striped</code> it.
            </p>
          </div>
          <div className='widgets-table__content'>
            <table className='widgets-table__main table-striped table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='abc-checkbox'>
                      <input id='checkbox2' type='checkbox' className='form-check-input'></input>
                      <label></label>
                    </div>
                  </td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <span className='badge badge-danger'>Online</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='abc-checkbox'>
                      <input id='checkbox3' type='checkbox' className='form-check-input'></input>
                      <label className=''></label>
                    </div>
                  </td>
                  <td>
                    Jacob
                    <span className='ml-2 badge badge-warning'>ALERT!</span>
                  </td>
                  <td>Thornton</td>
                  <td>
                    <span className='badge badge-gray'>Away</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='abc-checkbox'>
                      <input id='checkbox4' type='checkbox' className='form-check-input'></input>
                      <label className=''></label>
                    </div>
                  </td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>
                    <span className='badge badge-danger'>Construct</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='widgets-table__item'>
          <div className='widgets-table__top'>
            <h3 className='widgets-table__subtitle'>Hover Table</h3>
            <p className='widgets-table__text'>
              Trace only what's really important. <code>.table-hover</code> is made for it.
            </p>
          </div>
          <div className='widgets-table__content'>
            <table className='widgets-table__main table-striped table table-hover'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>ottoto@example.com</td>
                  <td>
                    <span className='badge badge-gray'>Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>fat.thor@example.com</td>
                  <td>
                    <span className='badge badge-primary'>New</span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>larry@example.com</td>
                  <td>
                    <span className='badge badge-green'>Active</span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Peter</td>
                  <td>Horadnia</td>
                  <td>peter@example.com</td>
                  <td>
                    <span className='badge badge-gray'>Unconfirmed</span>
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
WidgetLeftTable.propTypes = {
  closedBlock: PropTypes.bool,
  toggleClosedBlock: PropTypes.func,
};
export default WidgetLeftTable;
