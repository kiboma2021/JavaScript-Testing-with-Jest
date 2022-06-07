const User = require('./user');

describe('user >', () => {
  test('test name', () => {
    const user = new User()
    expect(user.greeting()).toBe("Hello Stranger");
  });
  
  test('test name', () => {
    const user = new User()
    expect(user.greeting('John')).toBe("Hello John");
  });
});
