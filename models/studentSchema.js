var mongoose = require("mongoose");
var StudentDetailsSchema = mongoose.Schema({
  name: String,
age: Number });
module.exports = mongoose.model("users", StudentDetailsSchema);