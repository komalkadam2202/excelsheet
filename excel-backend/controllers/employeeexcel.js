const express = require("express");
var router = express.Router();
var Employee = require("../models/empexcel");
var Employees = require("../models/mangexcel");
var ObjectId = require("mongoose").Types.ObjectId;
const multer = require("multer");
var XLSX = require("xlsx");
const fs = require("fs");
const testFolder = "./uploads/";
var objArray = [];
const path = require("path");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, "-" + Date.now() + file.originalname);
  }
});

var upload = multer({ storage: storage });

router.post("/upload", upload.single("productImage"), (req, res) => {
  console.log("%%%%%%%%%%%%%%%%%%%%");
  console.log(req.file);
  var filepath = req.file.path;
  console.log("++++++++++++++++++++++++++++++++++++++%%%%%%", filepath);
  var workbook = XLSX.readFile(req.file.path);
  var sheet_name_list = workbook.SheetNames;
  var xlData1 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

  var xlData2 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);

  console.log(xlData1);
  console.log(xlData2);

  res.json({
    data1: xlData1,
    data2: xlData2,
    data3: filepath
  });
});

router.post("/sendexcel1", function(req, res) {
  console.log("*****************", req.body);
  console.log("dddddddddddd");
  var users1 = new Employee();
  users1.collection.insert(req.body, (res, error) => {
    if (!error) {
      res.send(res);
    } else {
      console.log(error);
    }
  });
});

router.post("/sendexcel2", function(req, res) {
  console.log("*****************", req.body);
  console.log("dddddddddddd");
  var users2 = new Employees();
  users2.collection.insert(req.body, (res, error) => {
    if (!error) {
      res.send(res);
    } else {
      console.log(error);
    }
  });
});

router.post("/delexcel", upload.single("productImage"), function(req, res) {
  console.log("-----------", req.body);
  console.log("-----------", req.body.values);

  fs.unlink(req.body.values, (data3, err) => {
    if (err) {
      console.error(err);
      return;
    } else {
      res.send(data3);
      console.log("deleted");
    }
  });
});

router.get("/get", (req, res) => {
  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      // console.log(file);
    });
    // console.log("ssssssssssssssssssss", files);
    res.json({
      files: files
    });
  });
});

router.post("/download", (req, res) => {
  var filepath = req.body.items;

  console.log("**********************", filepath);
  var namefile = path.join(__dirname, "../uploads/" + req.body.items);
  // var namefile = path.join(__dirname, "../uploads") + "/" + req.body.filename;

  console.log("..............................", namefile);
  res.sendFile(namefile);
});

module.exports = router;
