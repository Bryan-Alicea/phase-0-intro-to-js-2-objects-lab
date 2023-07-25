// Write your solution in this file!
const employee = {name: "Michael",
streetAddress: "Lives in a pineapple under the sea"}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employeeList = {...employee}
    employeeList[key] = value
    return employeeList
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newList = {...employee}
    delete newList[key]
    return newList
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}