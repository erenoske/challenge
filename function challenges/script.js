function getCelsiusFirst(value) {
   return (value - 32) * 5 / 9;
}

const getCelsius = (value) => (value - 32) * 5 / 9;

console.log(getCelsius(50));

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max
    }
}

console.log(minMax ([1, 2, 3, 4, 5]));


((length, width) => {
    const area = length * width;

    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    
    console.log(output);
})(20, 10);
