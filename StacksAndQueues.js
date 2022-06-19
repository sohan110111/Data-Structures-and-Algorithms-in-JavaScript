class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }

    push(element) {
        this.size++
        this.storage[this.size] = element
    }

    pop(element) {
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }

    peek(element) {
        return this.storage[this.size]
    }
}

const stack = new Stack();
stack.push("dog")
stack.push("dog")
stack.push("bear")

console.log(stack);

stack.pop()
console.log(stack);

console.log(stack.peek());