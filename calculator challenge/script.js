function calculator(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
        break;
      case '-':
        return num1 - num2;
        break;
      case '*':
        return num1 * num2;
        break;
      case '/':
        return num1 / num2;
        break;
      case '%':
        return num1 % num2;
        break;
      default:
        return 'not find';
    }
}

console.log(calculator(5, 2, '+'));
console.log(calculator(5, 2, '-'));
console.log(calculator(5, 2, '*'));
console.log(calculator(5, 2, '/'));
console.log(calculator(5, 2, '%'));
