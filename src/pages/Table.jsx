import React from 'react';
import { BigTable, WidgetLeftTable, WidgetRightTable } from '../components';

const Table = () => {
  return (
    <section className='table'>
      <div className='table__row'>
        <BigTable />
      </div>
      <div className='table__widgets widgets-table'>
        <div className='widgets-table__row'>
          <WidgetLeftTable />
          <WidgetRightTable />
        </div>
      </div>
    </section>
  );
};

export default Table;
