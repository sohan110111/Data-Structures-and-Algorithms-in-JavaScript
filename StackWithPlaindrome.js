let word = "aba"
let letter = [];
let reservedWord = '';

const Length = word.length;
for (let i = 0; i < Length; i++) {
    letter.push(word[i]);
}
console.log(letter);

for (let index = 0; index < Length; index++) {
    reservedWord += letter.pop();
}
console.log(reservedWord)


if (reservedWord == word) {
    console.log("The word is plaindrome");
}