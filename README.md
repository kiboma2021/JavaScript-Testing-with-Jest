# JavaScript-Testing-with-Jest

npm init -y

npm install --save-dev jest

- Once installed, you should see it in already created Json file
- Change Jest Script to 'jest' // jest --coverage
- 'npm run test' will fail since there are no test files yet
- Create a file with the same name with an extension 'test.js'

    test('test name', () => {
      expect(false).toBe(false);
    });


    const User = require('./user')

    test('test name', () => {
      const user = new User()
      expect(user.greeting()).toBe("Hello");
    });



    if(name) {
      return `Hello ${name}`;
    } else {
      return 'Hello Stranger';
    }

    //can be optimized to:
    return "Hello" + (name || "Stranger");

    let user;
    beforeEach(() => {
      user = new User();
    });

    Arrange | Act | Assert
    
    jest --watch-all 