// require
const mongoose = require("mongoose");

// patient schema
const patientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobileNumber: String,
  nationalId: String,
  birthCertificateNo: String,
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
module.exports = patientSchema;
