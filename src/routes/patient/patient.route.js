// require
const express = require("express");
const patientRegistrationController = require("../../controllers/patient/patient.registration.controller");

// router
const patientRoute = express.Router();

// post
patientRoute.post("/registration", patientRegistrationController);

// export
module.exports = patientRoute;
