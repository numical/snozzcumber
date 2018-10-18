const deepFreeze = require('./deepFreeze.js');

const intervalsPerAnnum = 12;
const intervalCount = 25 * intervalsPerAnnum;

const model = {
  metadata: {
    version: '0.0.1'
  },
  dates: {
    epoch: new Date(1970, 0, 1),
    intervalsPerAnnum,
    intervalCount
  },
  rows: [
    {
      key: 'cashBalance',
      description: 'Cash Balance',
      values: [0]
    }
  ],
  history: []
};

module.exports = deepFreeze(model);
