
var mysql = require("mysql2");
var connection = mysql.createPool({
  // host:"localhost",
  // user: "ufstech",
  // password: "UFStech@123",
  // database: "ubill_diary",

    host:"localhost",
  user: "root",
  password: "sree@1234",
  database: "vikas",

	
});
module.exports = connection;