'use strict';
const tap = require('tap');
const model = require('./exampleModel.js');
const calculateRowValues = require('./calculateRowValues.js');

const { dates } = model;
const { intervalCount } = dates;

const rowValues = calculateRowValues(model, model.rows[0]);
const numCols = intervalCount + 1;

tap.equal(rowValues.length, numCols, 'row has value for every interavl boundary');

tap.equal(rowValues.every((value) => value === 10000), true, 'row values all 10000');
