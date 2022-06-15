const person = {
    name : 'John',
    age : 78
}

console.log(person.name)

person.country = 'United States'

console.log(person)
let a = "age"
console.log(person[a])

let text = ''

for (let x in person) {
    text += person[x]+" "

}
console.log(text)