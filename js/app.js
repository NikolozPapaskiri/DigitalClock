const numbers = [1, 2, 3, 4, 5, 6, 7];

const [ a = `no number`, b, c, , ...rest] = numbers;

console.log(a);