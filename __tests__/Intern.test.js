const Intern = require('../lib/Intern');


// Makes the object
test('make an Intern object', () => {
    const intern = new Intern('luke skywalker', '209', 'skywalker@email.com', 'rebel academy');

    expect(intern.name).toBe('luke skywalker');
    expect(intern.id).toBe('209');
    expect(intern.email).toBe('skywalker@email.com');
    expect(intern.school).toBe('rebel academy');
});



// Make sure function is working
test('make sure school func is working', () => {
    const intern = new Intern('luke skywalker', '209', 'skywalker@email.com', 'rebel academy');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})



// Role Change
test('confirm role change to Intern', () => {
    const intern = new Intern('luke skywalker', '209', 'skywalker@email.com', 'rebel academy');

    expect(intern.getRole()).toBe('Intern');
})