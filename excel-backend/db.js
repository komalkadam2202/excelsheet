const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose.connect(
  "mongodb://localhost:27017/exelDB",
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log("mongodb connected successfully----------");
    } else {
      console.log("mongodb connect:" + JSON.stringify(err, undefined, 2));
    }
  }
);
var app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(cors({ origin: 'http://localhost:4200'}));
// app.use('', chatController);
// app.use('/msg', messageController);
// mongoose.set('debug', true);

module.exports = app;
