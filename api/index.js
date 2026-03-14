const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ mesaage: "hello from Bandung" });
});

module.exports = app;
