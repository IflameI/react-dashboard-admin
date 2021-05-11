import React from 'react';
import {
  CogWheelIcon,
  GraphicIconBlue,
  GraphicIconGreen,
  GraphicIconOrange,
  GraphicIconYellow,
} from '../components';

const Table = () => {
  return (
    <section class='table'>
      <div class='table__row'>
        <div class='table__column'>
          <div class='table__item'>
            <div class='table__head header__global'>
              <h5 class='table__title'>
                Table <small>Styles</small>
              </h5>
              <div class='table__icons'>
                <button>
                  <CogWheelIcon />
                </button>
                <button>x</button>
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
      </div>
      <div class='table__widgets widgets-table'>
        <div class='widgets-table__row'>
          <div class='widgets-table__column'>
            <div class='widgets-table__wrapper wrapper-global'>
              <div class='widgets-table__item'>
                <div class='widgets-table__top'>
                  <div class='widgets-table__head header__global'>
                    <h5 class='widgets-table__title'>
                      Table <small>Styles</small>
                    </h5>
                    <div class='widgets-table__icons'>
                      <button>
                        <CogWheelIcon />
                      </button>
                      <button>x</button>
                    </div>
                  </div>
                  <h3 class='widgets-table__subtitle'>Stripped Table</h3>
                  <p class='widgets-table__text'>
                    Each row is highlighted. You will never lost there. Just
                    <code>.table-striped</code> it.
                  </p>
                </div>
                <div class='widgets-table__content'>
                  <table class='widgets-table__main table-striped table'>
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
                          <div class='abc-checkbox'>
                            <input
                              id='checkbox2'
                              type='checkbox'
                              class='form-check-input'
                              checked=''></input>
                            <label for='checkbox2' class=''></label>
                          </div>
                        </td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                          <span class='badge badge-danger'>Online</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class='abc-checkbox'>
                            <input id='checkbox3' type='checkbox' class='form-check-input'></input>
                            <label for='checkbox3' class=''></label>
                          </div>
                        </td>
                        <td>
                          Jacob
                          <span class='ml-2 badge badge-warning'>ALERT!</span>
                        </td>
                        <td>Thornton</td>
                        <td>
                          <span class='badge badge-gray'>Away</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class='abc-checkbox'>
                            <input id='checkbox4' type='checkbox' class='form-check-input'></input>
                            <label for='checkbox4' class=''></label>
                          </div>
                        </td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>
                          <span class='badge badge-danger'>Construct</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class='widgets-table__item'>
                <div class='widgets-table__top'>
                  <h3 class='widgets-table__subtitle'>Hover Table</h3>
                  <p class='widgets-table__text'>
                    Trace only what's really important. <code>.table-hover</code> is made for it.
                  </p>
                </div>
                <div class='widgets-table__content'>
                  <table class='widgets-table__main table-striped table table-hover'>
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
                          <span class='badge badge-gray'>Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>fat.thor@example.com</td>
                        <td>
                          <span class='badge badge-primary'>New</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>larry@example.com</td>
                        <td>
                          <span class='badge badge-green'>Active</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Peter</td>
                        <td>Horadnia</td>
                        <td>peter@example.com</td>
                        <td>
                          <span class='badge badge-gray'>Unconfirmed</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class='widgets-table__column'>
            <div class='widgets-table__wrapper wrapper-global'>
              <div class='widgets-table__item'>
                <div class='widgets-table__top'>
                  <div class='widgets-table__head header__global'>
                    <h5 class='widgets-table__title'>
                      Table <small>Styles</small>
                    </h5>
                    <div class='widgets-table__icons'>
                      <button>
                        <CogWheelIcon />
                      </button>
                      <button>x</button>
                    </div>
                  </div>
                  <h3 class='widgets-table__subtitle'>Stripped Table</h3>
                  <p class='widgets-table__text'>
                    Each row is highlighted.You will never lost there. That's how all of us learned
                    in school the table should look like. Just add <code>.table-bordered</code> to
                    it.
                  </p>
                </div>
                <div class='widgets-table__content'>
                  <table class='widgets-table__main table-striped table table-bordered'>
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
            </div>
            <div class='widgets-table__wrapper widgets-table__wrapper-separate wrapper-global'>
              <div class='widgets-table__item'>
                <div class='widgets-table__top'>
                  <div class='widgets-table__head header__global'>
                    <h5 class='widgets-table__title'>
                      Table <small>Styles</small>
                    </h5>
                    <div class='widgets-table__icons'>
                      <button>
                        <CogWheelIcon />
                      </button>
                      <button>x</button>
                    </div>
                  </div>
                  <h3 class='widgets-table__subtitle'>Overflow Table</h3>
                  <p class='widgets-table__text'>
                    Add any non-bordered .table within a widget for a seamless design. Awesome look
                    for no cost. Just wrap the table with simple css class
                    <code>.widget-table-overflow</code> inside of widget
                  </p>
                </div>
                <div class='widgets-table__content widget-table-overflow'>
                  <table class='widgets-table__main table-striped table'>
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
        </div>
      </div>
    </section>
  );
};

export default Table;
