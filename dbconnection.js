
var mysql = require("mysql2");
var connection = mysql.createPool({
  // host:"localhost",
  // user: "ufstech",
  // password: "UFStech@123",
  // database: "ubill_diary",

    host:"localhost",
  user: "root",
  password: "sree@1234",
  // database: "vikas",  
  // database: "vikas_19_09_2024",
  database: "vikas_27_09_2024",
   
  //  database: "vikas_10__06",  //old db

	
});
module.exports = connection;