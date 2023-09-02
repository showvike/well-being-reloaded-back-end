// require
const mongoose = require("mongoose");
const patientSchema = require("../../schemas/patient/patient.schema");

// patient model
const patientModel = mongoose.model("patient", patientSchema);

// export
module.exports = patientModel;
