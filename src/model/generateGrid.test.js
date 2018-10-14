'use strict';
const tap = require('tap');
require('tapdate')();
const model = require('./exampleModel.js');
const generateGrid = require('./generateGrid.js');

const { dates } = model;
const { intervalCount } = dates;

const numCols = intervalCount + 2;
const grid = generateGrid(model);
tap.equal(grid.length, 3, 'example grid has 3 rows');
grid.map((row, index) => {
  tap.equal(row.length, numCols, `example row ${index} has ${numCols} columns`);
});

const firstRow = grid[0];
tap.equal(firstRow[0], 'Date', 'first row is labelled Date');

const secondRow = grid[1];
tap.equal(secondRow[0], 'Cash Balance', 'second row is labelled Cash Balance');

const thirdRow = grid[2];
tap.equal(thirdRow[0], 'Savings', 'second row is labelled Savings');
