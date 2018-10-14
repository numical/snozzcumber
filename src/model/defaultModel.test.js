'use strict';

const tap = require('tap');
const model = require('./defaultModel.js');
const { MONTH } = require('./interval.js');
const { equalPreviousValue } = require('./calcFns.js');

console.log('equalPreviousValue:', equalPreviousValue);
console.log('name:', equalPreviousValue.name);

tap.ok(model.metadata, 'default model has metadata');
tap.ok(model.dates, 'default model has dates metadata');
tap.ok(MONTH, 'default model date interval type defined');
tap.equal(model.dates.interval, MONTH, 'month interval default');
tap.equal(model.dates.intervalCount, 300, '25 year default');

tap.ok(model.rows, 'default model has rows metadata');
tap.equals(Object.keys(model.rows).length, 1, 'rows metadata for a single row');

const { values } = model.rows[0];
tap.ok(values, 'default model first row has values');
tap.equals(values.length, 2, 'two values for first row');
tap.equals(values[0], 0, 'initial value of first row is zero');
tap.equals(values[1], equalPreviousValue.name, `second value is function '${equalPreviousValue.name}}`);

tap.ok(model.history, 'default model has history');
tap.equals(model.history.length, 0, 'empty hitory');

let testFn = () => { model.newProp = {}; };
tap.throws(testFn, Error, 'model is immutable'); // note: requires strict mode

testFn = () => { model.dates.epoch = 'teapot'; };
tap.throws(testFn, Error, 'model elements are immutable'); // note: requires strict mode
