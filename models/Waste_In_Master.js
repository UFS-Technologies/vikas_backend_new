var db = require("../dbconnection");
var fs = require("fs");
const storedProcedure = require("../helpers/stored-procedure");
var Waste_In_Master = {
  Save_Waste_In_Master: async function (Waste_In_Master_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      console.log(Waste_In_Master_);
      try {
        const result1 = await new storedProcedure(
          "Save_Waste_In_Master",
          [
            Waste_In_Master_.Waste_In_Master_Id,
            Waste_In_Master_.Client_Accounts_Id,
            Waste_In_Master_.Date,
            Waste_In_Master_.User_Id,
            Waste_In_Master_.Company_Id,
            Waste_In_Master_.Waste_In_No,
            Waste_In_Master_.Description,
            Waste_In_Master_.Waste_In_Details,
          ],
          connection
        ).result();
        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        await connection.rollback();
        rej(err);
        var result2 = [{ Waste_In_Master_Id_: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },

  Search_Waste_In_Master: function (
    Is_Date_Check_,
    FromDate_,
    ToDate_,
    Client_Accounts_Id_,
    callback
  ) {
    return db.query(
      "CALL Search_Waste_In_Master(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Client_Accounts_Id_:=?)",
      [Is_Date_Check_, FromDate_, ToDate_, Client_Accounts_Id_],
      callback
    );
  },

  Get_Waste_In_Master: function (Waste_In_Master_Id_, callback) {
    return db.query(
      "CALL Get_Waste_In_Master(@Waste_In_Master_Id_ :=?)",
      [Waste_In_Master_Id_],
      callback
    );
  },

  Delete_Waste_In_Master: function (
    Waste_In_Master_Id_,
    Company_Id_,
    callback
  ) {
    console.log(Waste_In_Master_Id_, Company_Id_);
    return db.query(
      "CALL Delete_Waste_In_Master(@Waste_In_Master_Id_ :=?,@Company_Id_ :=?)",
      [Waste_In_Master_Id_, Company_Id_],
      callback
    );
  },
  Search_Waste_In_Out_Report: async function (
    Is_Date_Check_,
    FromDate_,
    ToDate_,
    Client_Accounts_Id_,
    Company_Id_,
    Warehouse_Id_,
    Item_Id_
  ) {
    const Waste_In = await new storedProcedure(
      "Search_Waste_In_Master_Report",
      [
        Is_Date_Check_,
        FromDate_,
        ToDate_,
        Client_Accounts_Id_,
        Company_Id_,
        Warehouse_Id_,
        Item_Id_,
      ]
    ).result();
    const Waste_Out = await new storedProcedure(
      "Search_Waste_Out_Master_Report",
      [
        Is_Date_Check_,
        FromDate_,
        ToDate_,
        Client_Accounts_Id_,
        Company_Id_,
        Warehouse_Id_,
        Item_Id_,
      ]
    ).result();
    return { 0: { Waste_In, Waste_Out } };
  },
};
module.exports = Waste_In_Master;
