'use strict';

const { clone } = require('ramda');
const defaultModel = require('./defaultModel.js');
const exampleModel = require('./exampleModel.js');

const createModel = () => {
  const base = clone(defaultModel);
  return base;
};

const createExampleModel = () => clone(exampleModel);

module.exports = {
  createModel,
  createExampleModel
};
