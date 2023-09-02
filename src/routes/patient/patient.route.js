// require
const express = require("express");
const patientRegistrationController = require("../../controllers/patient/patient.registration.controller");
const patientLoginController = require("../../controllers/patient/patient.login.controller");

// patient router
const patientRoute = express.Router();

// post
patientRoute.post("/registration", patientRegistrationController);
patientRoute.post("/login", patientLoginController);

// export
module.exports = patientRoute;
