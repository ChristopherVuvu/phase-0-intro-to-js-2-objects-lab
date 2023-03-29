// Write your solution in this file!
const employee = {
    name: "John Doe",
    streetAddress: 28,
    postalCode: 90127,
    town: "Nairobi",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = {...employee};
    newObject[key] = value;
    return newObject;
}

const updateEmployee =updateEmployeeWithKeyAndValue(employee, "name", "Charles Benson");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
const updateEmployee1 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "Nakuru");

function deleteFromEmployeeByKey(employee,key){
    const newObject1 = {...employee};
    delete newObject1[key];
    return newObject1;
}
const updateEmployee2 = deleteEmployeeByKey(employee, "postalCode");

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

const updateEmployee3 = destructivelyDeleteFromEmployeeByKey(employee, 'town');
console.log(updateEmployee3());