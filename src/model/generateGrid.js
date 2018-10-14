const calculateDateValues = require('./calculateDateValues.js');
const calculateRowValues = require('./calculateRowValues.js');

const generateDateRow = (model) => {
  const row = calculateDateValues(model);
  row.unshift('Date');
  return row;
};

const generateGridRow = (model, modelRow) => {
  const { description } = modelRow;
  const row = calculateRowValues(model, modelRow);
  row.unshift(description);
  return row;
};

const generateGrid = (model) => {
  const { rows } = model;
  const generateRow = generateGridRow.bind(null, model);
  return [
    generateDateRow(model),
    ...rows.map(generateRow)
  ];
};

module.exports = generateGrid;
