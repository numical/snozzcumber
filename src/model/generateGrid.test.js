'use strict';
const tap = require('tap');
require('tapdate')();
const model = require('./exampleModel.js');
const { calculateDate } = require('./datetime.js');
const generateGrid = require('./generateGrid.js');

const { dates } = model;
const { epoch, intervalType, intervalCount } = dates;

const numCols = intervalCount + 2;
const grid = generateGrid(model);
tap.equal(grid.length, 2, 'example grid has 2 rows');
grid.map((row, index) => {
  tap.equal(row.length, numCols, `example row ${index} has ${numCols} columns`);
});

const firstRow = grid[0];
tap.equal(firstRow[0], 'Date', 'first row is labelled Date');
tap.dateSame(firstRow[1], model.dates.epoch, 'first row first value is epoch');
const endDate = calculateDate(epoch, intervalType, intervalCount);
tap.dateSame(firstRow[intervalCount + 1], endDate, 'first row last value is end date');

const secondRow = grid[1];
tap.equal(secondRow[0], 'Cash Balance', 'second row is labelled Cash Balance');
tap.equal(secondRow.slice(1).every((value) => value === 10000), true, 'second row values all 10000');
