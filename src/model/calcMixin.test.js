'use strict';
const tap = require('tap');
const { createExampleModel } = require('./factory.js');

const model = createExampleModel();
const { dates, rows } = model;
const { intervalCount } = dates;

const rowValues = model.calculateRowValues(rows[0]);
const numCols = intervalCount + 1;

tap.equal(rowValues.length, numCols, 'row has value for every interavl boundary');

tap.equal(rowValues.every((value) => value === 10000), true, 'row values all 10000');
