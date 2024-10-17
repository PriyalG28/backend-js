require("dotenv").config();

const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login to this application</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h3>Youtube  </h3>");
});

app.listen(process.env.PORT, () => {
  console.log(`example app listening on port ${process.env.PORT}`);
});
