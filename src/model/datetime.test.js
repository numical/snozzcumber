const tap = require('tap');
require('tapdate')();
const { calculateDate, FOUR_WEEKS, MONTH } = require('./datetime.js');

const epoch = new Date(1970, 0, 1);

let found = calculateDate(epoch, FOUR_WEEKS, 0);
let wanted = epoch;
tap.dateSame(found, wanted, 'passing zero units should return epoch value');
tap.notEqual(found, wanted, 'but not the epoch object itself');

found = calculateDate(epoch, MONTH, 0);
tap.dateSame(found, wanted, 'irrespectve of the intervals passed');

found = calculateDate(epoch, FOUR_WEEKS, 1);
wanted = new Date(1970, 0, 29);
tap.dateSame(found, wanted, 'passing 1 four-week interval should return epoch plus 3 weeks');

found = calculateDate(epoch, FOUR_WEEKS, 3);
wanted = new Date(1970, 2, 26);
tap.dateSame(found, wanted, 'passing 3 four-week intervals should return epoch plus 12 weeks');

found = calculateDate(epoch, FOUR_WEEKS, 13);
wanted = new Date(1970, 11, 31);
tap.dateSame(found, wanted, 'passing 13 four-week intervals should return epoch plus 1 year');

found = calculateDate(epoch, MONTH, 1);
wanted = new Date(1970, 1, 1);
tap.dateSame(found, wanted, 'passing 1 month interval should return epoch plus 1 calendar month');

found = calculateDate(epoch, MONTH, 3);
wanted = new Date(1970, 3, 1);
tap.dateSame(found, wanted, 'passing 3 month intervals should return epoch plus 3 calendar months');

found = calculateDate(epoch, MONTH, 12);
wanted = new Date(1971, 0, 1);
tap.dateSame(found, wanted, 'passing 12 month intervals should return epoch plus 1 calendar year');

let fn = () => calculateDate(epoch, 'teapot', 1);
tap.throws(fn, Error, 'unless passed an unknown unit in which case, throws');
