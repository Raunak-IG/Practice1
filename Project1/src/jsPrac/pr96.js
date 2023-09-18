class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    enqueue(element) {
        this.items[this.tailIndex] = element;
        this.tailIndex++;
    }

    dequeue() {
        let removedElement = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return removedElement;
    }

    peek() {
        let peekElement = this.items[this.headIndex];
        return peekElement;
    }

    size() {
        return this.tailIndex - this.headIndex;
    }

    isEmpty() {
        if (this.tailIndex - this.headIndex == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    clear() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
}
let queue = new Queue();

queue.enqueue(8);
queue.enqueue(6);
queue.enqueue(4);
queue.enqueue(2);

console.log("Queue after adding items: ");
console.log(queue.items);

queue.dequeue();

console.log("Queue after deleting the first item:");
console.log(queue.items);

console.log("First item of the queue = " + queue.peek());

queue.clear();

console.log("After clearing the queue: ");
console.log(queue.items);