const a = [1, 2, 3];
const b = [...a, 4, 5];
console.log(b);


const obj = {
    a: 1
}

const obj1 = {
    ...obj,
    b:2
}

console.log(obj1)