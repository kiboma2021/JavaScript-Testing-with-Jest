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
// We will get two output for each of the scenarios above
 //This is what is called Unit testing. Test a small block of code lather than the entire class