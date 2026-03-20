let queue = []

function enqueue(val) {
    queue.push(val)
}

//deque

function dequeue() {
    return queue.shift();
}

//front
function front() {
    return queue[0]
}

enqueue(10)
enqueue(20)
enqueue(30)

console.log(queue);

dequeue()

console.log(queue);
