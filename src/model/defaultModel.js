
const freeze = require('deep-freeze');
const { MONTH } = require('./datetime.js');

const intervalCount = 300; // 25 years

const model = {
  metadata: {
    version: '0.0.1'
  },
  dates: {
    epoch: new Date(1970, 0, 1),
    intervalType: MONTH,
    intervalCount
  },
  rows: [
    {
      key: 'cashBalance',
      description: 'Cash Balance'
    }
  ],
  values: [
    new Array(intervalCount + 1).fill(0)
  ],
  history: []
};

module.exports = freeze(model);
