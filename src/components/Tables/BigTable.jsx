import React from 'react';
import { CogWheelIcon, useFuncBlock } from '../../components';
const BigTable = () => {
  const { closedBlock, toggleClosedBlock } = useFuncBlock(false);

  return (
    <div class='table__column'>
      <div style={{ display: closedBlock ? 'none' : '' }} class='table__item'>
        <div class='table__head header__global'>
          <h5 class='table__title'>
            Table <small>Styles</small>
          </h5>
          <div class='table__icons'>
            <button>
              <CogWheelIcon />
            </button>
            <button onClick={toggleClosedBlock}>x</button>
          </div>
        </div>
        <table class='table-main'>
          <thead>
            <tr class='table-main__head'>
              <th class='table-main__title'>#</th>
              <th>Picture</th>
              <th>Description</th>
              <th class='table-main__title'>Info</th>
              <th class='table-main__title'>Date</th>
              <th class='table-main__title'>Size</th>
              <th class='table-main__title'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img
                  class='table-main__img'
                  src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
                  alt=''
                  height='50'></img>
              </td>
              <td>Palo Alto</td>
              <td>
                <p>
                  <small>
                    Type:<span>&nbsp; JPEG</span>
                  </small>
                </p>
                <p>
                  <small>
                    Dimensions:<span>&nbsp; 200x150</span>
                  </small>
                </p>
              </td>
              <td class='text-muted'>September 14, 2012</td>
              <td class='text-muted'>45.6 KB</td>
              <td class='width-150'>
                <div class='progress-bar'>
                  <span class='progress-bar-fill' style={{ width: '75%' }}></span>
                </div>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>
                <img
                  class='table-main__img'
                  src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
                  alt=''
                  height='50'></img>
              </td>
              <td>The Sky</td>
              <td>
                <p>
                  <small>
                    Type:<span>&nbsp; PSD</span>
                  </small>
                </p>
                <p>
                  <small>
                    Dimensions:<span>&nbsp; 2400x1455</span>
                  </small>
                </p>
              </td>
              <td class='text-muted'>November 14, 2012</td>
              <td class='text-muted'>15.3 MB</td>
              <td class='width-150'>
                <div class='progress-bar'>
                  <span class='progress-bar-fill' style={{ width: '75%' }}></span>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <img
                  class='table-main__img'
                  src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
                  alt=''
                  height='50'></img>
              </td>
              <td>Down the road</td>
              <td>
                <p>
                  <small>
                    Type:<span>&nbsp; JPEG</span>
                  </small>
                </p>
                <p>
                  <small>
                    Dimensions:<span>&nbsp; 200x150</span>
                  </small>
                </p>
              </td>
              <td class='text-muted'>September 14, 2012</td>
              <td class='text-muted'>49.0 KB</td>
              <td class='width-150'>
                <div class='progress-bar'>
                  <span class='progress-bar-fill' style={{ width: '75%' }}></span>
                </div>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <img
                  class='table-main__img'
                  src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
                  alt=''
                  height='50'></img>
              </td>
              <td>The Edge</td>
              <td>
                <p>
                  <small>
                    Type:<span>&nbsp; PNG</span>
                  </small>
                </p>
                <p>
                  <small>
                    Dimensions:<span>&nbsp; 210x160</span>
                  </small>
                </p>
              </td>
              <td class='text-muted'>September 15, 2012</td>
              <td class='text-muted'>69.1 KB</td>
              <td class='width-150'>
                <div class='progress-bar'>
                  <span class='progress-bar-fill' style={{ width: '75%' }}></span>
                </div>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <img
                  class='table-main__img'
                  src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
                  alt=''
                  height='50'></img>
              </td>
              <td>Fortress</td>
              <td>
                <p>
                  <small>
                    Type:<span>&nbsp; JPEG</span>
                  </small>
                </p>
                <p>
                  <small>
                    Dimensions:<span>&nbsp; 1452x1320</span>
                  </small>
                </p>
              </td>
              <td class='text-muted'>October 01, 2012</td>
              <td class='text-muted'>2.3 MB</td>
              <td class='width-150'>
                <div class='progress-bar'>
                  <span class='progress-bar-fill' style={{ width: '75%' }}></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class='table__footer'>
          <p>Basic table with styled content</p>
        </div>
      </div>
    </div>
  );
};

export default BigTable;
