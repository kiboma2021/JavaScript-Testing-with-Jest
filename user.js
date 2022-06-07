class User {
    greeting (name) {
      return "Hello " + (name || "Stranger");
    }
    farewell (name) {
      return "Goodbye " + (name || "Stranger");
    }
}

module.exports = User;