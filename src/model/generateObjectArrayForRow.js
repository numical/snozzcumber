const generateObjectArrayForRow = (model, row) => {
  const { key } = row;
  const { rows, values } = model;
  const rowIndex = rows.indexOf(row);
  return values[rowIndex].map((value) => {
    const obj = {};
    obj[key] = value;
    return obj;
  });
};

module.exports = generateObjectArrayForRow;
