const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const authenGraphql = require("./authen.graphql");
require("dotenv/config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("conected");
  }
);
app.use("/graphql", authenGraphql);

const userRoute = require("./routes/user");
app.use("/user", userRoute);

const locationRoute = require("./routes/location");
app.use("/api", locationRoute);

const PORT = 5000;
const listener = app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
