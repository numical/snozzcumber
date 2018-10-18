const tap = require('tap');
const defaultModel = require('./defaultModel.js');
const { calcFunctions } = require('./calcMixin.js');
const { dateFunctions } = require('./dateMixin.js');
const { createModel, createExampleModel } = require('./factory.js');

const defaultModelKeys = Object.keys(defaultModel);

[createModel(), createExampleModel()].forEach(model => {
  const keys = Object.keys(model);
  tap.notEqual(model, defaultModel, 'default model is not returned');
  tap.ok(defaultModelKeys.every(key => keys.includes(key)), 'model has all defaultModel properties');
  calcFunctions.forEach(calcFn => {
    tap.isA(model[calcFn], 'function', `calc mixin '${calcFn} applied`);
  });
  dateFunctions.forEach(dateFn => {
    tap.isA(model[dateFn], 'function', `date mixin '${dateFn} applied`);
  });
});
