// require
const mongoose = require("mongoose");

// patient registration schema
const patientRegistrationSchema = new mongoose.Schema({
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
module.exports = patientRegistrationSchema;
