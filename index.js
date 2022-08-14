// Write your solution in this file!
const employee = {
    name: "",
    streetAddress: "",
  };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const myEmployee = { ...employee, [key]: value };
    return myEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const myEmployee = { ...employee };
    delete myEmployee[key];
    return myEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }