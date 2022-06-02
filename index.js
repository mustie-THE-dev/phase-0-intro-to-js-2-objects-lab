// Write your solution in this file!
const employee = {
    name: "Hardy",
    streetAddress: "Kay Street"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };

    newEmployee[key] = value;

    return newEmployee;
}