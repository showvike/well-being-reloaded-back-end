// require
const mongoose = require("mongoose");
const adminSchema = require("../../schemas/admin/admin.schema");

// admin model
const adminModel = mongoose.model("admin", adminSchema);

// export
module.exports = adminModel;
