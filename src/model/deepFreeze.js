// thanks to https://onethingsimple.com/2017/03/functional-object-freeze-ramda-js/

const { is, map, when } = require('ramda');

const deepFreeze = (obj) => {
  map(when(is(Object), deepFreeze))(obj);
  return Object.freeze(obj);
};

module.exports = deepFreeze;
