//leetcode 682
function baseballGame(operations){
    let stack = []
    let sum = 0;

    for (let op of operations){
        if(op !== "C" && op !== "D" && op !== "+"){
            stack.push(Number(op))
        }
        else if(op === "C"){
            stack.pop()
        }
        else if(op === "D"){
            stack.push(stack[stack.length-1]*2)
        }
        else if(op === "+"){
            stack.push(stack[stack.length-1] + stack[stack.length-2])
        }
    }

    for(let num of stack){
        sum +=num
    }
    return sum
}

console.log(baseballGame(["5","2","C","D","+"]));
