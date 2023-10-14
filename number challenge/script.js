const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;

const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;

const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;


const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;

const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;



console.log(sumOutput); // 31 + 15 = 46
console.log(differenceOutput); // 31 - 15 = 16
console.log(productOutput); // 31 * 15 = 465
console.log(quotientOutput); // 31 / 15 = 2.066666666666667
console.log(rmOutput); // 31 % 15 = 1
