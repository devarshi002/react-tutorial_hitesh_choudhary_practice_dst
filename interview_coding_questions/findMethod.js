const nums = [1,3,5,8]

const result = nums.find(n=>n%2===0)

console.log(result);



const users = [
    {id:1, name:"dev"},
    {id:2, name:"rahul"}
];

const user=users.find(u=>u.id===2);

console.log(user);


// Returns first matching element
// Returns undefined if not found
// Stops searching once match is found (efficient ⚡)