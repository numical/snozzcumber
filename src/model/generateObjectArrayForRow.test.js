'use strict';
const tap = require('tap');
const model = require('./exampleModel.js');
const generateObjectArrayForRow = require('./generateObjectArrayForRow.js');

const firstRow = model.rows[0];
tap.ok(firstRow, 'model has a row');

const objectArray = generateObjectArrayForRow(model, firstRow);
tap.ok(objectArray, 'object array is generated');

const firstRowValues = model.values[0];
tap.equal(objectArray.length, firstRowValues.length, 'an object created for each value');

const wanted = {};
wanted[firstRow.key] = firstRowValues[0];
tap.same(objectArray[1], wanted, 'first object has the correct property/value');

const testFn = (object, index) => {
  return object[firstRow.key] === firstRowValues[index];
};
tap.ok(objectArray.every(testFn), 'all objects have the correct property/value');
