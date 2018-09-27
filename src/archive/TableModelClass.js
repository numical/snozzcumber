import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import generateGrid from '../model/generateGrid.js';

const dimensions = {
  rowHeight: 50,
  minHeight: 200
};

const formatDate = (date) => {
  const month = date.getMonth() + 1;
  const year = String(date.getFullYear()).slice(2);
  return (month < 10) ? `0${month}/${year}` : `${month}/${year}`;
};

const generateGridProps = (model) => {
  const grid = generateGrid(model);
  const columns = grid[0].map((field, index) => ({
    key: index,
    name: (index === 0) ? '' : formatDate(field)
  }));
  const rows = grid.slice(1).map((row) => row.reduce(
    (acc, value, index) => {
      acc[index] = value;
      return acc;
    },
    {}
  ));
  const rowsCount = rows.length;
  const rowGetter = (index) => rows[index];

  return {
    columns,
    rowGetter,
    rowsCount,
    ...dimensions
  };
};

class TableModel extends Component {
  constructor (props) {
    super(props);
    const { model } = props;
    this.state = {
      model,
      gridProps: generateGridProps(model)
    };
  }

  render () {
    const { gridProps } = this.state;
    return (
      <div>
        <ReactDataGrid {...gridProps} />
      </div>
    );
  }
}

export default TableModel;
