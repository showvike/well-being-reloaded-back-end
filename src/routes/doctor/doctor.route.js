// require
const express = require("express");
const doctorRegistrationController = require("../../controllers/doctor/doctor.registration.controller");

// doctor router
const doctorRoute = express.Router();

// post
doctorRoute.post("/", doctorRegistrationController);

// export
module.exports = doctorRoute;
