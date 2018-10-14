const freeze = require('deep-freeze');
const { MONTH } = require('./interval.js');
const { equalPreviousValue } = require('./calcFns.js');

const intervalCount = 25 * MONTH.intervalsPerAnnum;

const model = {
  metadata: {
    version: '0.0.1'
  },
  dates: {
    epoch: new Date(1970, 0, 1),
    interval: MONTH,
    intervalCount
  },
  rows: [
    {
      key: 'cashBalance',
      description: 'Cash Balance',
      values: [0, equalPreviousValue.name]
    }
  ],
  history: []
};

module.exports = freeze(model);
