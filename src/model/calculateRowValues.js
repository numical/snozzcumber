const calcFns = require('./calcFns.js');

const selectCalcFn = (value, previousCalcFn) => {
  if (value) {
    switch (typeof value) {
      case 'number':
        return () => value;
      case 'string':
        if (!calcFns[value]) {
          throw new Error(`Unknown calculation function '${value}'`);
        }
        return calcFns[value];
      default:
        throw new Error(`Invalid row value '${value}'`);
    }
  } else {
    return previousCalcFn;
  }
};

const calculateRowValues = (model, modelRow) => {
  const { dates } = model;
  const { intervalCount } = dates;
  const { values } = modelRow;
  const row = [];
  let previousCalcFn;
  for (let index = 0; index <= intervalCount; index++) {
    const value = values[index];
    const calcFn = selectCalcFn(value, previousCalcFn);
    const previousValue = (index === 0) ? undefined : row[index - 1];
    row[index] = calcFn(previousValue, modelRow, model);
    previousCalcFn = calcFn;
  }
  return row;
};

module.exports = calculateRowValues;
