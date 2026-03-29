let employee = {
    eid:"E102",
    ename:"Deva",
    eaddress:{city:"nagpur"},
    salary:40000
}

console.log("=========Deep cody=========");

let newEmployee = JSON.parse(JSON.stringify(employee));

console.log("Employee=>",employee);
console.log("new employee=>", newEmployee);

console.log("------After moditication");

newEmployee.eaddress.city="pune";
newEmployee.salary=70000;

console.log("employee=>",employee);
console.log("new employee=>", newEmployee);






