const ArityError = () => new TypeError('Must provide 2 arguments');

const calculator = {
  add: function (a, b) {
    if (arguments.length !== 2) {
      throw ArityError();
    }
    return Number(a) + Number(b);
  },

  subtract: function (a, b) {
    if (arguments.length !== 2) {
      throw ArityError();
    }
    return Number(a) - Number(b);
  },

  multiply: function (a, b) {
    if (arguments.length !== 2) {
      throw ArityError();
    }
    return Number(a) * Number(b);
  },

  divide: function (a, b) {
    if (arguments.length !== 2) {
      throw ArityError();
    }
    return Number(a) / Number(b);
  },
};

export default calculator;
