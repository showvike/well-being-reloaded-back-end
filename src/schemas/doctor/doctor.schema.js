// require
const mongoose = require("mongoose");

// doctor schema
const doctorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobileNumber: String,
  specialty: String,
  designation: String,
  nationalId: String,
  bmaNumber: String,
  dateOfBirth: String,
  bloodGroup: String,
  gender: String,
  profilePictureUrl: String,
  district: String,
  thana: String,
  area: String,
  buildingNo: String,
  password: String,
});

// export
module.exports = doctorSchema;
