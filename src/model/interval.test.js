const tap = require('tap');
require('tapdate')();
const { FOUR_WEEKS, MONTH } = require('./interval.js');

const epoch = new Date(1970, 0, 1);

let found = FOUR_WEEKS.calculateDate(epoch, 0);
let wanted = epoch;
tap.dateSame(found, wanted, 'passing zero units should return epoch value');
tap.notEqual(found, wanted, 'but not the epoch object itself');

found = MONTH.calculateDate(epoch, 0);
tap.dateSame(found, wanted, 'irrespectve of the intervals passed');

found = FOUR_WEEKS.calculateDate(epoch, 1);
wanted = new Date(1970, 0, 29);
tap.dateSame(found, wanted, 'passing 1 four-week interval should return epoch plus 3 weeks');

found = FOUR_WEEKS.calculateDate(epoch, 3);
wanted = new Date(1970, 2, 26);
tap.dateSame(found, wanted, 'passing 3 four-week intervals should return epoch plus 12 weeks');

found = FOUR_WEEKS.calculateDate(epoch, 13);
wanted = new Date(1970, 11, 31);
tap.dateSame(found, wanted, 'passing 13 four-week intervals should return epoch plus 1 year');

found = MONTH.calculateDate(epoch, 1);
wanted = new Date(1970, 1, 1);
tap.dateSame(found, wanted, 'passing 1 month interval should return epoch plus 1 calendar month');

found = MONTH.calculateDate(epoch, 3);
wanted = new Date(1970, 3, 1);
tap.dateSame(found, wanted, 'passing 3 month intervals should return epoch plus 3 calendar months');

found = MONTH.calculateDate(epoch, 12);
wanted = new Date(1971, 0, 1);
tap.dateSame(found, wanted, 'passing 12 month intervals should return epoch plus 1 calendar year');
