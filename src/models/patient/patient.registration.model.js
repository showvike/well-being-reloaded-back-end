// require
const mongoose = require("mongoose");
const patientRegistrationSchema = require("../../schemas/patient/patient.registration.schema");

// patient registration model
const patientRegistrationModel = mongoose.model(
  "patient",
  patientRegistrationSchema
);

// export
module.exports = patientRegistrationModel;
