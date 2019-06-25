const mongoose = require("mongoose");

const emps = mongoose.Schema({
  emp_code: { type: String },
  manager_code: { type: String },
  first_Name: { type: String },
  last_Name: { type: String },
  email: { type: String },
  status: { type: String }
});
module.exports = mongoose.model("emps", emps);
