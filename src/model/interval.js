const FOUR_WEEKS = Object.freeze({
  calculateDate: (epoch, intervalsSince) =>
    new Date(epoch.getTime() + (intervalsSince * 4 * 7 * 24 * 60 * 60 * 1000)),
  display: 'four weeks',
  intervalsPerAnnum: 13
});

const MONTH = Object.freeze({
  calculateDate: (epoch, intervalsSince) =>
    new Date(
      epoch.getFullYear(),
      epoch.getMonth() + intervalsSince,
      epoch.getDate(),
      epoch.getHours(),
      epoch.getMinutes(),
      epoch.getSeconds(),
      epoch.getMilliseconds()
    ),
  display: 'month',
  intervalsPerAnnum: 12
});

module.exports = {
  FOUR_WEEKS,
  MONTH
};
