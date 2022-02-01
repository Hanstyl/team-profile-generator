const Employee = require('../lib/Employee');



// Make the object
test('make an employee object', () => {
    const employee = new Employee('captain hook', '005', 'playinghooky@neverland.com');

    expect(employee.name).toBe('captain hook');
    expect(employee.id).toBe('005');
    expect(employee.email).toBe('playinghooky@neverland.com');
});



// Role Change
test('designate position', () => {
    const employee = new Employee('captain hook', '005', 'playinghooky@neverland.com');

    expect(employee.getRole()).toBe('Employee');
});