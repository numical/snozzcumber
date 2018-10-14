const calculateRowValues = require('./calculateRowValues.js');

const generateObjectArrayForRow = (model, modelRow) => {
  const { key } = modelRow;
  return calculateRowValues(model, modelRow).map(value => ({
    [key]: value
  }));
};

module.exports = generateObjectArrayForRow;
