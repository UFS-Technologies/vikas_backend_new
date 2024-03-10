var db = require("../dbconnection");
const storedProcedure = require("../helpers/stored-procedure");
var fs = require("fs");
var Attendance_Master = {
  Save_Check_In: async function (Attendance_Master_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      console.log(Attendance_Master_);
      try {
        const result1 = await new storedProcedure(
          "Save_Check_In",
          [
            Attendance_Master_.Attendance_Master_Id,
            Attendance_Master_.Employee_InDate,
            Attendance_Master_.Employee_InTime,
            Attendance_Master_.Attendance_Status,
            Attendance_Master_.Employee_InUser_Id,
            Attendance_Master_.Attendance_Details,
          ],
          connection
        ).result();
        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        console.log(err);
        await connection.rollback();
        rej(err);
        var result2 = [{ Attendance_Master_Id_: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },
  Load_Employee: function (callback) {
    return db.query("CALL Load_Employee()", [], callback);
  },
  Load_Employee_Packing: function (callback) {
    return db.query("CALL Load_Employee_Packing()", [], callback);
  },
  Search_Check_In: function (Is_Date_Check_, From_date_, To_date_, callback) {
    return db.query(
      "call Search_Check_In(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?)",
      [Is_Date_Check_, From_date_, To_date_],
      callback
    );
  },

  Search_Check_In_Report: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    callback
  ) {
    return db.query(
      "call Search_Check_In_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?)",
      [Is_Date_Check_, From_date_, To_date_],
      callback
    );
  },

  Delete_Check_In: function (Attendance_Master_Id_, callback) {
    return db.query(
      "CALL Delete_Check_In(@Attendance_Master_Id_ :=?)",
      [Attendance_Master_Id_],
      callback
    );
  },
  Get_Check_In: function (Attendance_Master_Id_, callback) {
    return db.query(
      "CALL Get_Check_In(@Attendance_Master_Id_ :=?)",
      [Attendance_Master_Id_],
      callback
    );
  },

  Save_Check_Out: async function (Attendance_Master_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      try {
        const result1 = await new storedProcedure(
          "Save_Check_Out",
          [
            Attendance_Master_.Attendance_Master_Id,
            Attendance_Master_.Employee_OutDate,
            Attendance_Master_.Employee_OutTime,
            Attendance_Master_.Employee_OutUser_Id,
            Attendance_Master_.Attendance_Details,
          ],
          connection
        ).result();
        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        await connection.rollback();
        rej(err);
        var result2 = [{ Attendance_Master_Id_: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },

  Search_Check_Out: function (Is_Date_Check_, From_date_, To_date_, callback) {
    return db.query(
      "call Search_Check_Out(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?)",
      [Is_Date_Check_, From_date_, To_date_],
      callback
    );
  },

  Search_Check_Out_Report: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    callback
  ) {
    return db.query(
      "call Search_Check_Out_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?)",
      [Is_Date_Check_, From_date_, To_date_],
      callback
    );
  },

  Delete_Check_Out: function (Attendance_Master_Id_, callback) {
    return db.query(
      "CALL Delete_Check_Out(@Attendance_Master_Id_ :=?)",
      [Attendance_Master_Id_],
      callback
    );
  },
  Get_Check_Out: function (Attendance_Master_Id_, callback) {
    return db.query(
      "CALL Get_Check_Out(@Attendance_Master_Id_ :=?)",
      [Attendance_Master_Id_],
      callback
    );
  },

  Search_Check_In_Details: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    callback
  ) {
    return db.query(
      "call Search_Check_In_Details(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?)",
      [Is_Date_Check_, From_date_, To_date_],
      callback
    );
  },
  Search_attendance_Report: function (
    Is_Date_Check_,
    From_Date_,
    To_Date_,
    callback
  ) {
    return db.query(
      "call Search_attendance_Report(@Is_Date_Check_ :=?,@From_Date_ :=?,@To_Date_ :=?)",
      [Is_Date_Check_, From_Date_, To_Date_],
      callback
    );
  },
};
module.exports = Attendance_Master;
