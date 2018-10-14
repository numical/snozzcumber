'use strict';
const { MONTH } = require('./interval.js');

const tap = require('tap');
require('tapdate')();
const model = require('./exampleModel.js');

tap.dateSame(model.dates.epoch, new Date(2016, 0, 1), 'Example model epoch start 1st Jan 2016');
tap.same(model.dates.interval, MONTH, 'Example Model interval type is month');

const firstRow = model.rows[0];
tap.equal(firstRow.values.length, 1, 'A defaulted cash balance');
tap.equal(firstRow.values[0], 10000, 'A default value of 10000');

const secondRow = model.rows[1];
tap.equal(secondRow.values.length, 1, 'A defaulted savings');
tap.equal(secondRow.values[0], 5000, 'A default value of 5000');

let fn = () => { model.newProp = {}; };
tap.throws(fn, Error, 'Example model is immutable'); // note: requires strict mode

fn = () => { model.dates.epoch = 'teapot'; };
tap.throws(fn, Error, 'Example model elements are immutable'); // note: requires strict mode
