let stack = [];

//push 
function push(value){
    stack.push(value)
}

//pop
function pop(value){
    return stack.pop()
}

//peek
function peek(value) {
    return stack[stack.length - 1]
}


push(10)
push(20)
push(30)

console.log("stack is: ",stack);

console.log("pop value:",pop());
console.log("peek value",peek());



