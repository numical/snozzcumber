const tap = require('tap');
const defaultModel = require('./defaultModel.js');
const exampleModel = require('./exampleModel.js');
const { createModel, createExampleModel } = require('./factory.js');

let found = createModel();
tap.same(found, defaultModel, 'createModel without args clones default model');
tap.notEqual(found, defaultModel, 'but does not return the original');

found = createExampleModel();
tap.same(found, exampleModel, 'createExampleModel clones example model');
tap.notEqual(found, exampleModel, 'but does not return the original');
