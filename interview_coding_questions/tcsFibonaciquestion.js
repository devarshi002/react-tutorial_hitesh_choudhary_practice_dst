// Fibonacci pe usme chandu 0 se nahi akne hisab se first second third input deke rth value check karega

// chandu apne hisab se values dega

//means
//apne ko starting 3 values input me milti hain
//uske bad same fibonaci pattern follow karna hai
//fir rth value nikalni hai

function customFibo(a,b,c,r) {
    if(r===1) return a;
    if(r===2) return b;
    if(r===3) return c;

    let prev1 = b;
    let prev2 = c;
    let curr;

    for (let i = 4; i<=r; i++) {
        curr = prev1 + prev2
        prev1 = prev2
        prev2 = curr
    }

    return curr
}

let input = '2 3 5 6'
let [a,b,c,r] = input.split(" ").map(Number);

console.log(customFibo(a,b,c,r));
