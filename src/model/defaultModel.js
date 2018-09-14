const { MONTHLY } = require('../util/datetime.js');

const unitCount = 300; // 25 years

const model = {
  metadata: {
    version: '0.0.1'
  },
  dates: {
    epoch: new Date(1970, 0, 1),
    unitType: MONTHLY,
    unitCount
  },
  rows: [
    {
      display: 'Cash Balance'
    }
  ],
  values: [
    new Array(unitCount).fill(0)
  ],
  history: []
};

module.exports = Object.freeze(model);
