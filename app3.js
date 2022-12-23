class sumClass {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
  }

  getSum() {
    return this.number1 + this.number2;
  }

  getMultiplication() {
    return this.number1 * this.number2;
  }

  getDivision() {
    return this.number1 / this.number2;
  }
}

const value = new sumClass(20, 30);
console.log(value.getSum());
console.log(value.getMultiplication());
console.log(value.getDivision());
