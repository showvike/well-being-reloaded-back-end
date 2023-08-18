// require
const express = require("express");

// app
const app = express();

// route
app.get("/", (req, res) => {
  return res.status(200).json({
    status: "ok",
    body: {
      message: "app is running",
    },
  });
});

// export
module.exports = app;
