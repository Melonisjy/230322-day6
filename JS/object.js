const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  substract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
};

let result = calculator.divide(3, 4);
console.log(result);
