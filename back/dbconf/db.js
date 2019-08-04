const mongoose = require('mongoose');
const keys = require("./keys");
const options = {
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
  useNewUrlParser: true
};

const atlas = keys.mongoURI;
mongoose.connect(
  atlas,
  options
);

module.exports = mongoose.connection;
