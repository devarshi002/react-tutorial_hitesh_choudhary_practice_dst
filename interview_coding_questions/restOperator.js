const user = {
    name : 'deva',
    age : 22,
    city : "pune"
};

const {name, ...rest} = user

console.log(name);
console.log(user);
console.log(rest);

