const defaultModel = require('./defaultModel.js');
const freeze = require('deep-freeze');
const { clone } = require('ramda');

const model = clone(defaultModel);
model.dates.epoch = new Date(2016, 0, 1);
model.values[0].fill(10000);

module.exports = freeze(model);
