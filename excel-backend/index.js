const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./db.js");

const empexcel = require("./controllers/employeeexcel");

const port = 4000;
var app = express();
mongoose.set("debug", true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:4200" }));
app.use("/uploads", express.static("uploads"));

app.use("", empexcel);
app.listen(port, function() {
  console.log("start");
});
