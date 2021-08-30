const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('create a greeting', ()=> {
  expect(getGreeting('Joe')).toBe("Hi Joe")
})