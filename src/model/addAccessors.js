const interval = require('./interval.js');

function addAccessors () {
  this.getEpoch = function () {
    return this.model.getIn(['dates', 'epoch']);
  }.bind(this);
  this.getIntervalCount = function () {
    return this.model.getIn(['dates', 'intervalCount']);
  }.bind(this);
  this.getIntervalsPerAnnum = function () {
    return this.model.getIn(['dates', 'intervalsPerAnnum']);
  }.bind(this);
  this.calculateDate = interval.calculateDate.bind(
    null,
    this.getIntervalsPerAnnum(),
    this.getEpoch()
  ).bind(this);
  this.getRow = function (index) {
    return this.model.get('rows').get(index);
  }.bind(this);
  this.getRowKey = function (index) {
    return this.getRow(index).get('key');
  }.bind(this);
  this.getRowDescription = function (index) {
    return this.getRow(index).get('description');
  }.bind(this);
  this.getRowValues = function (index) {
    return this.getRow(index).get('values');
  }.bind(this);
}

module.exports = addAccessors;
