var db = require("../dbconnection");

var Login = {
  Login_Check: function(User_Name_, Password_, callback) {
    return db.query(
      "CALL Login_Check (@User_Name_ :=?,@Password_ :=?)",
      [User_Name_, Password_],
      callback
    );
  },
  Login_User_Check: function(User_Name_, Password_, callback) {
    return db.query(
      "CALL Login_User_Check (@User_Name_ :=?,@Password_ :=?)",
      [User_Name_, Password_],
      callback
    );
  },
};
module.exports = Login;
