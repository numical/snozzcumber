const generateGrid = (model) => {
  const { dates, rows, values } = model;
  const { epoch, interval } = dates;

  // add row description as first value
  const prefixedValues = values.map((value, index) => [rows[index].description, ...value]);

  // first row is dates
  const calc = interval.calculateDate.bind(null, epoch);
  const firstRow = ['Date', ...values[0].map((value, index) => calc(index))];

  return [firstRow, ...prefixedValues];
};

module.exports = generateGrid;
