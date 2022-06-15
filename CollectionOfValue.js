const array = ["a", "b", "c"]

let indexOfTwo = array.indexOf("b");
console.log(indexOfTwo)

console.log(array[indexOfTwo - 1])
console.log(array[indexOfTwo + 1])

array.push(4)

console.log(array)