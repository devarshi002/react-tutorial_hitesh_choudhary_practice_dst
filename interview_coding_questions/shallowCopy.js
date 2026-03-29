let employee = {
    eid: "E101",
    ename: "Devarshi Tambulkar",
    eaddress:{city:"nagpur"},
    salary: 50000
};

console.log("employee=>",employee);

//shallow copy

let newEmployee = {...employee};
console.log("New Employee=>", newEmployee);

console.log("==================================");

newEmployee.eaddress.city="pune";

console.log("Employee=>", employee);
console.log("newEmployee=>", newEmployee);




