const calculateDateValues = (model) => {
  const { dates } = model;
  const { epoch, interval, intervalCount } = dates;
  const calculateDate = interval.calculateDate.bind(null, epoch);
  const row = [];
  for (let index = 0; index <= intervalCount; index++) {
    row[index] = calculateDate(index);
  }
  return row;
};

module.exports = calculateDateValues;
