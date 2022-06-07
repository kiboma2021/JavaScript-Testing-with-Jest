class User {
  greeting (name) {
    if(name) {
      return `Hello ${name}`;
    } else {
      return 'Hello Stranger';
    }
  }
}

module.exports = User;