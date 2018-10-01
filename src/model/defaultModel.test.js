'use strict';

const tap = require('tap');
const model = require('./defaultModel.js');
const { MONTH } = require('./interval.js');

tap.ok(model.metadata, 'default model has metadata');

tap.ok(model.dates, 'default model has dates metadata');
tap.ok(MONTH, 'default model date interval type defined');
tap.equal(model.dates.interval, MONTH, 'month interval default');
tap.equal(model.dates.intervalCount, 300, '25 year default');

tap.ok(model.rows, 'default model has rows metadata');
tap.equals(Object.keys(model.rows).length, 1, 'rows metadata for a single row');

tap.ok(model.values, 'default model has values');
tap.equals(model.values.length, 1, 'values for a single row');
tap.equals(model.values[0].length, 301, '25 years of values for this row');
tap.ok(model.values[0].every(val => val === 0), 'all values are zero');

tap.ok(model.history, 'default model has history');
tap.equals(model.history.length, 0, 'empty hitory');

let fn = () => { model.newProp = {}; };
tap.throws(fn, Error, 'model is immutable'); // note: requires strict mode

fn = () => { model.dates.epoch = 'teapot'; };
tap.throws(fn, Error, 'model elements are immutable'); // note: requires strict mode
