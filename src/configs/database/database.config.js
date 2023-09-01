// require
const mongoose = require("mongoose");

// database connection
const databaseConnection = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("database connection successful");
  } catch (err) {
    console.log(`database connection error: ${err}`);
  }
};

// export
module.exports = databaseConnection;
