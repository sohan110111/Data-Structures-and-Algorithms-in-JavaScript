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


// now queue using array method
const queue = [];


// queue 
queue.push("JackFruit")
queue.push("Mango")
queue.push("Banana")

console.log(queue)
//dequeue
queue.shift()
console.log(queue)
console.log(queue.shift())
console.log(queue)

// queue with javaScript Class
class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    // queue
    enqueue(element1) {
        this.storage[this.tail] = element1
        this.tail++
    }

    //dequeue
    dequeue() {
        let removed = this.storage[this.head]
        this.head++
        return removed;
    }
}

const queueObject = new Queue();

queueObject.enqueue("book1")
queueObject.enqueue("book2")
queueObject.enqueue("book3")

console.log(queueObject)


