const Manager = require('../lib/Manager');



// Make Object 
test('make a manager object', () => {
    const manager = new Manager('zuul', '999', 'zuul@email.com', '66');

    expect(manager.name).toBe('zuul');
    expect(manager.id).toBe('999');
    expect(manager.email).toBe('zuul@email.com');
    expect(manager.officeNumber).toBe('66');
})




// Role Change 
test('confirm role change to manager', () => {
    const manager = new Manager('zuul', '999', 'zuul@email.com', '66');

    expect(manager.getRole()).toBe('Manager');
})