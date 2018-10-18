const { clone } = require('ramda');
const defaultModel = require('./defaultModel.js');
const deepFreeze = require('./deepFreeze.js');

const model = clone(defaultModel);
model.dates.epoch = new Date(2016, 0, 1);

model.rows[0].values[0] = 10000;

model.rows[1] = {
  key: 'savings',
  description: 'Savings',
  values: [5000]
};

module.exports = deepFreeze(model);
