'use strict';
const tap = require('tap');
const { createExampleModel } = require('./factory.js');
const generateObjectArrayForRow = require('./generateObjectArrayForRow.js');

const model = createExampleModel();
const { dates, rows } = model;
const { intervalCount } = dates;
const firstRow = rows[0];
const { key, values } = firstRow;

tap.ok(firstRow, 'model has a row');

const objectArray = generateObjectArrayForRow(model, firstRow);
tap.ok(objectArray, 'object array is generated');
tap.equal(objectArray.length, intervalCount + 1, 'array has object for every interval boundary');

const wanted = {
  [key]: values[0]
};
tap.same(objectArray[0], wanted, 'first object has the correct property/value');

const testFn = (object, index) => object[key] === values[0];
tap.ok(objectArray.every(testFn), 'all objects have the constant value');
