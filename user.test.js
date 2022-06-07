const User = require('./user');

test('test name', () => {
  const user = new User()
  expect(user.greeting()).toBe("Hello");
});