var db = require("../dbconnection");
var fs = require("fs");
var request = require("request");
const fetch = require("node-fetch");
const storedProcedure = require("../helpers/stored-procedure");
const { Console } = require("console");
var Packing_Plan = {
  Save_Packing_Plan_Master: async function (Packing_Plan_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      try {
        console.log(Packing_Plan_);
        const result1 = await new storedProcedure(
          "Save_Packing_Plan_Master",
          [
            Packing_Plan_.Packing_Plan_Master_Id,
            Packing_Plan_.Date,
            Packing_Plan_.User_Id,
            Packing_Plan_.Packing_Plan_No,
            Packing_Plan_.Description,
            Packing_Plan_.Porforma_Invoice_Master_Id,
            Packing_Plan_.Company_Id,
            Packing_Plan_.Purchase_Order_Master_Id,
            Packing_Plan_.Packing_Plan_Details,
            Packing_Plan_.Confirmation_Pack_List_Length,
            Packing_Plan_.Confirmation_Pack_List_Data,
            Packing_Plan_.Reference_Field,
            Packing_Plan_.PInvoice_No,
            Packing_Plan_.PONo,
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
        var result2 = [{ Packing_Plan_Id_: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },
  Search_Packing_Plan_Master: function (
    Is_Date_Check_,
    FromDate_,
    ToDate_,
    Packing_Plan_No_,
    callback
  ) {
    return db.query(
      "CALL Search_Packing_Plan_Master(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Packing_Plan_No_:=?)",
      [Is_Date_Check_, FromDate_, ToDate_, Packing_Plan_No_],
      callback
    );
  },
  Search_Packing_Plan_Master_Report: function (
    Is_Date_Check_,
    FromDate_,
    ToDate_,
    PI_No_,
    callback
  ) {
    return db.query(
      "CALL Search_Packing_Plan_Master_Report(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@PI_No_:=?)",
      [Is_Date_Check_, FromDate_, ToDate_, PI_No_],
      callback
    );
  },

  Get_Packing_Plan_Master: function (Packing_Plan_Master_Id_, callback) {
    return db.query(
      "CALL Get_Packing_Plan_Master(@Packing_Plan_Master_Id_ :=?)",
      [Packing_Plan_Master_Id_],
      callback
    );
  },

  Delete_Packing_Plan_Master: function (
    Packing_Plan_Master_Id_,
    Company_Id_,
    callback
  ) {
    return db.query(
      "CALL Delete_Packing_Plan_Master(@Packing_Plan_Master_Id_ :=?,@Company_Id_ :=?)",
      [Packing_Plan_Master_Id_, Company_Id_],
      callback
    );
  },
};
module.exports = Packing_Plan;
