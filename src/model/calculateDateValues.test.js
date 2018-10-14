'use strict';
const tap = require('tap');
require('tapdate')();
const model = require('./exampleModel.js');
const calculateDateValues = require('./calculateDateValues.js');

const { dates } = model;
const { epoch, interval, intervalCount } = dates;

const dateValues = calculateDateValues(model);
const numValues = intervalCount + 1;
tap.equal(dateValues.length, numValues, 'date values for eac interval boundary');
tap.dateSame(dateValues[0], model.dates.epoch, 'first date value is epoch');
const endDate = interval.calculateDate(epoch, intervalCount);
tap.dateSame(dateValues[intervalCount], endDate, 'last dat value is end date');
