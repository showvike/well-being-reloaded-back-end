// require
const mongoose = require("mongoose");

// admin schema
const adminSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// export
module.exports = adminSchema;
