// require
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const databaseConnection = require("./configs/database/database.config");
const patientRoute = require("./routes/patient/patient.route");
const doctorRoute = require("./routes/doctor/doctor.route");
const adminRoute = require("./routes/admin/admin.route");

// app
const app = express();

// database connection
databaseConnection(process.env.URI);

// use
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/patient", patientRoute);
app.use("/doctor", doctorRoute);
app.use("/admin", adminRoute);

// route
app.get("/", (req, res) => {
  console.log("hit: /");

  return res.status(200).json({
    status: "ok",
    body: {
      message: "app is running",
    },
  });
});

// export
module.exports = app;
