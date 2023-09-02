// require
const express = require("express");
const doctorRegistrationController = require("../../controllers/doctor/doctor.registration.controller");
const doctorLoginController = require("../../controllers/doctor/doctor.login.controller");

// doctor router
const doctorRoute = express.Router();

// post
doctorRoute.post("/registration", doctorRegistrationController);
doctorRoute.post("/login", doctorLoginController);

// export
module.exports = doctorRoute;
