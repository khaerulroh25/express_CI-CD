const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello from Bandung" });
});

module.exports = app;
