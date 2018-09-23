'use strict';
const { MONTH } = require('./datetime.js');

const tap = require('tap');
require('tapdate')();
const model = require('./exampleModel.js');

tap.dateSame(model.dates.epoch, new Date(2016, 0, 1), 'Example model epoch start 1st Jan 2016');
tap.equal(model.dates.intervalType, MONTH, 'Example Model interval type is month');

tap.ok(model.values[0].every(val => val === 10000), 'Example model cash balance all 10000');

let fn = () => { model.newProp = {}; };
tap.throws(fn, Error, 'Example model is immutable'); // note: requires strict mode

fn = () => { model.dates.epoch = 'teapot'; };
tap.throws(fn, Error, 'Example model elements are immutable'); // note: requires strict mode
