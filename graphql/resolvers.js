const login = (_, { username, password }) => {
  console.log(username, password);
  return "token";
};

module.exports = {
  Query: {
    login
  }
};
