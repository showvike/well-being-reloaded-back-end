// require
const express = require("express");
require("dotenv").config();
const databaseConnection = require("./configs/database/database.config");

// app
const app = express();

// database connection
databaseConnection(process.env.URI);

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
