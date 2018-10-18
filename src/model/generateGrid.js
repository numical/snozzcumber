const generateDateRow = (model) => {
  const row = model.calculateDateValues();
  row.unshift('Date');
  return row;
};

const generateGridRow = (model, modelRow) => {
  const { description } = modelRow;
  const row = model.calculateRowValues(modelRow);
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
