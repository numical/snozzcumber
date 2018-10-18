'use strict';

const { clone } = require('ramda');
const { addCalcFunctions } = require('./calcMixin.js');
const { addDateFunctions } = require('./dateMixin.js');
const defaultModel = require('./defaultModel.js');
const exampleModel = require('./exampleModel.js');

const cloneAndAddMixins = (toClone) => {
  const cloned = clone(toClone);
  addCalcFunctions.call(cloned);
  addDateFunctions.call(cloned);
  return cloned;
};

module.exports = {
  createModel: cloneAndAddMixins.bind(null, defaultModel),
  createExampleModel: cloneAndAddMixins.bind(null, exampleModel)
};
