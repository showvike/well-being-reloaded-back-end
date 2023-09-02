// require
const express = require("express");
const patientRegistrationController = require("../../controllers/patient/patient.registration.controller");

// patient router
const patientRoute = express.Router();

// post
patientRoute.post("/", patientRegistrationController);

// export
module.exports = patientRoute;
