function reverseQueue(queue) {
    let stack = []

    //step 1 push all into stack
    while (queue.length > 0) {
        stack.push(queue.shift());
    }

    //step2: push back into queue
    while(stack.length > 0) {
        queue.push(stack.pop())
    } 

    return queue
}

console.log(reverseQueue([10,20,30]));
