const FOUR_WEEKS = Symbol('four-weeks');
const MONTH = Symbol('month');

const calculateFourWeeklyDate = (epoch, unitsSince) =>
  new Date(epoch.getTime() + (unitsSince * 4 * 7 * 24 * 60 * 60 * 1000));

const calculateMonthlyDate = (epoch, unitsSince) =>
  new Date(
    epoch.getFullYear(),
    epoch.getMonth() + unitsSince,
    epoch.getDate(),
    epoch.getHours(),
    epoch.getMinutes(),
    epoch.getSeconds(),
    epoch.getMilliseconds()
  );

const calculateDate = (epoch, unitType, unitsSince) => {
  if (unitsSince === 0) {
    return new Date(epoch.getTime());
  }
  switch (unitType) {
    case FOUR_WEEKS:
      return calculateFourWeeklyDate(epoch, unitsSince);
    case MONTH:
      return calculateMonthlyDate(epoch, unitsSince);
    default:
      throw new Error(`Unknown datetime unit type '${String(unitType)}'`);
  }
};

module.exports = {
  FOUR_WEEKS,
  MONTH,
  calculateDate
};
