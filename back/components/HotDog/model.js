const mongoose = require("mongoose");

const schema = new mongoose.Schema({

  title:{
    type:String,
    require: true
  }

});
module.exports = mongoose.model("hotdog", schema);
