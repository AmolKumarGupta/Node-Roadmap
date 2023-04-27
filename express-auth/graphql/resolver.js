module.exports = {
  hello: () => {
    return "hello world";
  },
  world: () => {
    return 2;
  },
  createUser: function ({ userInput }, req) {
    if (!userInput.email) {
      throw new Error("email is required");
    }

    return {
      _id: "89jkdfw890kj4k89o",
      email: userInput.email,
    };
  },
};
