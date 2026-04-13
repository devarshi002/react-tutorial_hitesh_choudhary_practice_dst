let obj = {
    valueOf() {
        return 100;
    }
}

console.log(obj + 10);  //110


let example2 = {
    toString() {
        return "hello"
    }
}

console.log(String(example2));
