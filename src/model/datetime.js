const FOUR_WEEKS = Symbol('four-weeks');
const MONTH = Symbol('month');

const calculateFourWeeklyDate = (epoch, intervalsSince) =>
  new Date(epoch.getTime() + (intervalsSince * 4 * 7 * 24 * 60 * 60 * 1000));

const calculateMonthlyDate = (epoch, intervalsSince) =>
  new Date(
    epoch.getFullYear(),
    epoch.getMonth() + intervalsSince,
    epoch.getDate(),
    epoch.getHours(),
    epoch.getMinutes(),
    epoch.getSeconds(),
    epoch.getMilliseconds()
  );

const calculateDate = (epoch, intervalType, intervalsSince) => {
  if (intervalsSince === 0) {
    return new Date(epoch.getTime());
  }
  switch (intervalType) {
    case FOUR_WEEKS:
      return calculateFourWeeklyDate(epoch, intervalsSince);
    case MONTH:
      return calculateMonthlyDate(epoch, intervalsSince);
    default:
      throw new Error(`Unknown datetime interval type '${intervalType}'`);
  }
};

module.exports = {
  FOUR_WEEKS,
  MONTH,
  calculateDate
};
