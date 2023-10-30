function squareSum(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2);
  }
  return sum;
}
console.log(squareSum([0, 3, 4, 5]));


function rps(p1, p2) {
  if (p1 === p2) return "Draw!";
  const rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
}

console.log(rps('rock', 'paper'));
