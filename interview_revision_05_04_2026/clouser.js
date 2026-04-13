function outer() {
    let count = 0;
    return function inner() {
        count ++
        console.log(count);
        
        return count;
    }
}

const fn = outer()
fn()
fn()
fn()