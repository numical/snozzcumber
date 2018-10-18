const unhandledInterval = (intervalsPerAnnum) => {
  throw new Error(`Unhandled intervals per annum: ${intervalsPerAnnum}`);
};

const calculateDate = (intervalsPerAnnum, epoch, intervalsSince) => {
  switch (intervalsPerAnnum) {
    case 12:
      return new Date(
        epoch.getFullYear(),
        epoch.getMonth() + intervalsSince,
        epoch.getDate(),
        epoch.getHours(),
        epoch.getMinutes(),
        epoch.getSeconds(),
        epoch.getMilliseconds()
      );
    case 13:
      return new Date(epoch.getTime() + (intervalsSince * 4 * 7 * 24 * 60 * 60 * 1000));
    default:
      unhandledInterval(intervalsPerAnnum);
  }
};

const display = (intervalsPerAnnum) => {
  switch (intervalsPerAnnum) {
    case 12:
      return 'month';
    case 13:
      return 'four weeks';
    default:
      unhandledInterval(intervalsPerAnnum);
  }
};

module.exports = {
  availableIntervalsPerAnnum: [12, 13],
  calculateDate,
  display
};
