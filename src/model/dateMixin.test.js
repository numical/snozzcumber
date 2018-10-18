'use strict';
const tap = require('tap');
require('tapdate')();
const { createExampleModel } = require('./factory.js');

const model = createExampleModel();
const { dates } = model;
const { epoch, intervalCount } = dates;

const dateValues = model.calculateDateValues();
const numValues = intervalCount + 1;
tap.equal(dateValues.length, numValues, 'date values for each interval boundary');
tap.dateSame(dateValues[0], model.dates.epoch, 'first date value is epoch');
const endDate = model.calculateDate(epoch, intervalCount);
tap.dateSame(dateValues[intervalCount], endDate, 'last date value is end date');
