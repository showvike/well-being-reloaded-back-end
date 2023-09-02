// require
const express = require("express");
const adminLoginController = require("../../controllers/admin/admin.login.controller");

// admin router
const adminRoute = express.Router();

// post
adminRoute.post("/login", adminLoginController);

// export
module.exports = adminRoute;
