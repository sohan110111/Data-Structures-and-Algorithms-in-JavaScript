const array = ["a", "b", "c"]

let indexOfTwo = array.indexOf("b");
console.log(indexOfTwo)

console.log(array[indexOfTwo - 1])
console.log(array[indexOfTwo + 1])

array.push(4)

console.log(array)

const Animals = ["cat", "dog", "cow", "tiger", "monkey", "snake", "duck"]
console.log("Length of Array is : ", Animals.length)

console.log(Animals[5])

const multiDimensionalArray = [
    [1, 2, 3, 4],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(multiDimensionalArray)
console.log(multiDimensionalArray[0][0])
console.log(multiDimensionalArray.length)
console.log(multiDimensionalArray[0].length)


//Objects (hash tables)
const object = {
    property1 : "I",
    property2 : "am an",
    property3 : "Object" 
}

console.log(object)
console.log(object.property1 + object.property2 + " " + object.property3)


let newObject = {
    property1 : "Hello",
    property2 : function(){
        console.log("I am method now.")
    }
}
console.log(newObject)
console.log(newObject.property1)
// or object property call
console.log(newObject["property1"])
newObject.property2();

let personOneLikeFoodItem = {
    // item : price
    egg : 10,
    pizza : 100,
    chicken : 120,
    desert : 200
}

console.log("Total cost of person one : ", personOneLikeFoodItem["egg"] + personOneLikeFoodItem["desert"] + personOneLikeFoodItem["chicken"] + personOneLikeFoodItem["pizza"]);