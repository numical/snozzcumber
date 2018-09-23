const { calculateDate } = require('./datetime.js');

const generateGrid = (model) => {
  const { dates, rows, values } = model;
  const { epoch, intervalType } = dates;

  // add row description as first value
  const prefixedValues = values.map((value, index) => [rows[index].description, ...value]);

  // first row is dates
  const calc = calculateDate.bind(null, epoch, intervalType);
  const firstRow = ['Date', ...values[0].map((value, index) => calc(index))];

  return [firstRow, ...prefixedValues];
};

module.exports = generateGrid;
