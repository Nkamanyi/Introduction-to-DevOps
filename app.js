const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Company X application");
});

app.get("/feature-1", (req, res) => {
  res.send("Feature 1!");
});

app.get("/feature-2", (req, res) => {
  res.send("Feature 2!");
});

app.get("/feature-3", (req, res) => {
  res.send("Feature 3!");
});

app.get("/feature-4", (req, res) => {
  res.send("Feature 4!");
});

app.get("/feature-5", (req, res) => {
  res.send("Feature 5!");
});

app.get("/feature-6", (req, res) => {
  res.send("Feature 6!");
});

app.get("/feature-7", (req, res) => {
  res.send("Feature 7!");
});

module.exports = app;
