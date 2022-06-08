const User = require('./user');

describe('user >', () => {
  test('test name', () => {
    const user = new User() //Arrange
    let result = user.greeting() //Act
    expect(result).toBe("Hello Stranger"); //Assert
  });
  
  test('test name', () => {
    const user = new User() //Arrange
    let name = 'John' //Arrange
    let result = user.greeting(name) //Act
    expect(result).toBe("Hello John"); //Assert
  });
});
