// require
const mongoose = require("mongoose");
const doctorSchema = require("../../schemas/doctor/doctor.schema");

// doctor registration model
const doctorModel = mongoose.model("doctor", doctorSchema);

// export
module.exports = doctorModel;
