// Write your solution in this file!
const employee = {
    Juan: '1 Woodbridge Center'
}
function updateEmployeeWithKeyAndValue(employee, name, address){
    const newEmployee = {...employee};
    newEmployee[name] = address;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, address){
    employee[name] = address;
    return employee;
}
function deleteFromEmployeeByKey(employee, name){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
}