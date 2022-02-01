const Engineer = require('../lib/Engineer');



// Make the object
test('make an engineer object', () => {
    const engineer = new Engineer('optimus primo', '108', 'transformers@alien.com', 'oPrimo');

    expect(engineer.name).toBe('optimus primo');
    expect(engineer.id).toBe('108');
    expect(engineer.email).toBe('transformers@alien.com');
    expect(engineer.github).toBe('oPrimo');
});



// Make sure the function is working
test('creates engineer github', () => {
    const engineer = new Engineer('optimus primo', '108', 'transformers@alien.com', 'oPrimo');

    expect(engineer.getGithub()).toBe('oPrimo');
});



// Role change
test('confirm role change to Engineer', () => {
    const engineer = new Engineer('optimus primo', '108', 'transformers@alien.com', 'oPrimo');

    expect(engineer.getRole()).toBe('Engineer');
})
