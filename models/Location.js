const mongoose = require("mongoose");
const LocationSchema = mongoose.Schema({
  userId: {
    type: String,
    require: true
  },
  location: {
    long: Number,
    lati: Number
  },
  time: {
    type: Date
  }
});

module.exports = mongoose.model("Location", LocationSchema);
