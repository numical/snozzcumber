'use strict';
const { MONTH } = require('./interval.js');
const { equalPreviousValue } = require('./calcFns.js');

const tap = require('tap');
require('tapdate')();
const model = require('./exampleModel.js');

tap.dateSame(model.dates.epoch, new Date(2016, 0, 1), 'Example model epoch start 1st Jan 2016');
tap.same(model.dates.interval, MONTH, 'Example Model interval type is month');

const { values } = model.rows[0];
tap.equal(values.length, 2, 'A defauted cash balance');
tap.equal(values[0], 10000, 'A default value of 10000');
tap.equal(values[1], equalPreviousValue.name, `A default calculation fn of '${equalPreviousValue.name}'`);

let fn = () => { model.newProp = {}; };
tap.throws(fn, Error, 'Example model is immutable'); // note: requires strict mode

fn = () => { model.dates.epoch = 'teapot'; };
tap.throws(fn, Error, 'Example model elements are immutable'); // note: requires strict mode
