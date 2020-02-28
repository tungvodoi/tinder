const User = require("../../models/User");
const Location = require("../../models/Location");
const login = (_, { username, password }) => {
  console.log(username, password);
  return "token";
};
const register = async (_, { username }) => {
  const user = new User({
    username: username
  });
  const savedUser = await user.save();
  return savedUser;
};
const getAllUSer = () => {
  return User.find();
};
const reportLocation = async (_, { userId, long, lati }) => {
  const location = await Location.create({
    userId: userId,
    location: {
      long: long,
      lati: lati
    }
  });
  return location.location;
};
const encounter = async (_, { userId }) => {
  const user = await Location.findOne({ userId });
  const nearUser = await Location.find({
    location: {
      $geoWithin: { $center: [[user.location.long, user.location.long], 100] }
    },
    userId: { $ne: user.userId }
  });
  console.log(user.userId);
  return nearUser;
};

module.exports = {
  Query: {
    login,
    getAllUSer,
    encounter
  },
  User: {
    id: user => {
      return user._id.toString();
    }
  },
  Mutation: {
    register,
    reportLocation
  }
};
