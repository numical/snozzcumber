const generateObjectArrayForRow = (model, modelRow) => {
  const { key } = modelRow;
  return model.calculateRowValues(modelRow).map(value => ({
    [key]: value
  }));
};

module.exports = generateObjectArrayForRow;
