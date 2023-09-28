// function doubleIt(num){
//     return num * 2;
// }


// another way to write arrow
// const doubleIt = function(num){
//     return num * 2;
// }

// ES6 arrow code..
const doubleIt = num => num * 2;

const add = (x, y, z) => x + y + z;

const doMath = (x, y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = add(50, 70, 10);
const result2 = doMath(7, 5);
console.log(result2);