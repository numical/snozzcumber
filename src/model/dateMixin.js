const { range } = require('ramda');
const interval = require('./interval.js');

function addDateFunctions () {
  const { epoch, intervalCount, intervalsPerAnnum } = this.dates;

  this.calculateDate = interval.calculateDate.bind(this, intervalsPerAnnum, epoch);

  this.calculateDateValues = () =>
    range(0, intervalCount + 1).map(index => this.calculateDate(index));
}

module.exports = {
  addDateFunctions,
  dateFunctions: ['calculateDate', 'calculateDateValues']
};
