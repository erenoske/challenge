const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " Çift sayıdır.");
    } else {
        console.log(numbers[i] + " Tek sayıdır.");
    }
}
