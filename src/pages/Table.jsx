import React from 'react';
import { BigTable, WidgetLeftTable, WidgetRightTable } from '../components';

const Table = () => {
  return (
    <section class='table'>
      <div class='table__row'>
        <BigTable />
      </div>
      <div class='table__widgets widgets-table'>
        <div class='widgets-table__row'>
          <WidgetLeftTable />
          <WidgetRightTable />
        </div>
      </div>
    </section>
  );
};

export default Table;
