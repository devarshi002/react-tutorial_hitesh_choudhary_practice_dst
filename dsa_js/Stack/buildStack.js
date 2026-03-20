class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items[this.items.length] = element
    }

    pop() {
        if(this.isEmpty()) return "Stack is empty"
        return this.items.splice(this.items.length-1,1)[0];
    }

    peek() {
        return this.items[this.items.length-1]
    }

    isEmpty() {
        return this.items.length===0;
    }
    size(){
        return this.items.length
    }
}

let stack = new Stack()
stack.push(20)
stack.push(30)
stack.push(40)

console.log(stack.pop());
console.log(stack.peek());

