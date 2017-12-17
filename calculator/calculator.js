let output = document.getElementById('calculatorResult');

let add = false;
let subtract = false;
let multiply = false;
let divide = false;

let calculator = {
  sum: 0,
  add: function(value) {
    this.sum += value;
    this.update();
  },
  subtract: function(value) {
    this.sum -= value;
    this.update();
  },
  multiply: function(value) {
    this.sum *= value;
    this.update();
  },
  divide: function(value) {
    this.sum /= value;
    this.update();
  },
  clear: function(value) {
    this.sum = 0;
    this.update();
  },
  equals: function(value) {
    this.update();
  },
  update: function() {
    output.innerHTML = this.sum;
  }
}
