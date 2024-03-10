var db = require("../dbconnection");
var fs = require("fs");
const storedProcedure = require("../helpers/stored-procedure");
var Shift_Start = {
  Save_Shift_Start: async function (Shift_Start_Master_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      await connection.beginTransaction();
      var Process_ = Shift_Start_Master_.Shift_Start_Details_Process;
      var Raw_Material_ = Shift_Start_Master_.Shift_Start_Details_RawMaterial;
      var Wastage_ = Shift_Start_Master_.Shift_Start_Details_Wastage;
      try {
        console.log(Shift_Start_Master_);
        const result1 = await new storedProcedure(
          "Save_Shift_Start",
          [
            Shift_Start_Master_.Shift_Start_Master_Id,
            Shift_Start_Master_.Production_Master_Id,
            Shift_Start_Master_.Shift_End_Master_Id,
            Shift_Start_Master_.Date,
            Shift_Start_Master_.PONo,
            Shift_Start_Master_.Prodction_No,
            Shift_Start_Master_.User_Id,
            Shift_Start_Master_.Stock_Id,
            Shift_Start_Master_.Item_Id,
            Shift_Start_Master_.Item_Name,
            Shift_Start_Master_.WareHouse_Id,
            Shift_Start_Master_.WareHouse_Name,
            Shift_Start_Master_.Quantity,
            Shift_Start_Master_.Shift_Start_Status,
            Shift_Start_Master_.Company_Id,
            Shift_Start_Master_.Weight,
            Shift_Start_Master_.Batch_Weight,
            Shift_Start_Master_.Weight_Item,
            Shift_Start_Master_.Process_Id,
            Shift_Start_Master_.Shift_Details_Id,
            Shift_Start_Master_.Purchase_Order_Master_Id,
            Shift_Start_Master_.Process_Length,
            Shift_Start_Master_.Raw_Length,
            Shift_Start_Master_.Wastage_Length,
            Process_,
            Raw_Material_,
            Wastage_,
          ],
          connection
        ).result();
        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        await connection.rollback();
        rej(err);
      }
    });
  },

  Search_Shift_Start: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    PO_No_,
    callback
  ) {
    return db.query(
      "call Search_Shift_Start(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@PO_No_ :=?)",
      [Is_Date_Check_, From_date_, To_date_, PO_No_],
      callback
    );
  },


  Search_Shift_Start_Packing: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    PO_No_,
    callback
  ) {
    return db.query(
      "call Search_Shift_Start_Packing(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@PO_No_ :=?)",
      [Is_Date_Check_, From_date_, To_date_, PO_No_],
      callback
    );
  },


  Get_Shift_Start_From_Production: function (Production_Master_Id_, callback) {
    return db.query(
      "CALL Get_Shift_Start_From_Production(@Production_Master_Id_ :=?)",
      [Production_Master_Id_],
      callback
    );
  },

  Get_Shift_Start_From_Packing: function (Production_Master_Id_, callback) {
    return db.query(
      "CALL Get_Shift_Start_From_Packing(@Production_Master_Id_ :=?)",
      [Production_Master_Id_],
      callback
    );
  },


  Delete_Shift_Start: function (Shift_Start_Master_Id_, Company_Id_, callback) {
    return db.query(
      "CALL Delete_Shift_Start(@Shift_Start_Master_Id_ :=?,@Company_Id_ :=?)",
      [Shift_Start_Master_Id_, Company_Id_],
      callback
    );
  },


  Delete_Shift_Start_Packing: function (Shift_Start_Master_Id_, Company_Id_, callback) {
    return db.query(
      "CALL Delete_Shift_Start_Packing(@Shift_Start_Master_Id_ :=?,@Company_Id_ :=?)",
      [Shift_Start_Master_Id_, Company_Id_],
      callback
    );
  },


  Get_Shift_Start: function (Shift_Start_Master_Id_, callback) {
    return db.query(
      "CALL Get_Shift_Start(@Shift_Start_Master_Id_ :=?)",
      [Shift_Start_Master_Id_],
      callback
    );
  },

  Get_Shift_Start_Packing: function (Shift_Start_Master_Id_, callback) {
    return db.query(
      "CALL Get_Shift_Start_Packing(@Shift_Start_Master_Id_ :=?)",
      [Shift_Start_Master_Id_],
      callback
    );
  },

  Search_Stock_Use_Report: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    Item_Id_,
    Production_No_,
    callback
  ) {
    if (
      Production_No_ === "undefined" ||
      Production_No_ === "" ||
      Production_No_ === undefined
    )
      Production_No_ = 0;
    return db.query(
      "call Search_Stock_Use_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Item_Id_ :=?,@Production_No_ :=?)",
      [Is_Date_Check_, From_date_, To_date_, Item_Id_, Production_No_],
      callback
    );
  },
  Get_Production_To_Shift_Start: function (Shift_Start_Master_Id_, callback) {
    return db.query(
      "CALL Get_Production_To_Shift_Start(@Shift_Start_Master_Id_ :=?)",
      [Shift_Start_Master_Id_],
      callback
    );
  },

  Get_Shift_Start_To_Shift_End: function (Shift_Start_Master_Id_, callback) {
    return db.query(
      "CALL Get_Shift_Start_To_Shift_End(@Shift_Start_Master_Id_ :=?)",
      [Shift_Start_Master_Id_],
      callback
    );
  },

  Get_Shift_End_From_Shift_Start: function (Shift_End_Master_Id_, callback) {
    return db.query(
      "CALL Get_Shift_End_From_Shift_Start(@Shift_End_Master_Id_ :=?)",
      [Shift_End_Master_Id_],
      callback
    );
  },

  Get_Shift_End_From_Production: function (Production_Master_Id_, callback) {
    return db.query(
      "CALL Get_Shift_End_From_Production(@Production_Master_Id_ :=?)",
      [Production_Master_Id_],
      callback
    );
  },





  Search_Stock_Use_Consolidated_Report: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    Item_Id_,
    Production_No_,
    callback
  ) {
    if (
      Production_No_ === "undefined" ||
      Production_No_ === "" ||
      Production_No_ === undefined
    )
      Production_No_ = 0;
    return db.query(
      "call Search_Stock_Use_Consolidated_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Item_Id_ :=?,@Production_No_ :=?)",
      [Is_Date_Check_, From_date_, To_date_, Item_Id_, Production_No_],
      callback
    );
  },


  Save_Shift_Start_Packing: async function (Shift_Start_Packing_Master_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      await connection.beginTransaction();
      var Item_Packing_Details_ = Shift_Start_Packing_Master_.Item_Packing_Details;
      console.log(Item_Packing_Details_)
      try {
        console.log(Shift_Start_Packing_Master_);
        const result1 = await new storedProcedure(
          "Save_Shift_Start_Packing",
          [
            Shift_Start_Packing_Master_.Shift_Start_Packing_Master_Id,
            Shift_Start_Packing_Master_.Packing_Master_Id,
            Shift_Start_Packing_Master_.Shift_End_Master_Id,
            Shift_Start_Packing_Master_.Date,
            Shift_Start_Packing_Master_.PONo,
            Shift_Start_Packing_Master_.Packing_No,
            Shift_Start_Packing_Master_.User_Id,
            Shift_Start_Packing_Master_.Stock_Id,
            Shift_Start_Packing_Master_.Item_Id,
            Shift_Start_Packing_Master_.Item_Name,
            Shift_Start_Packing_Master_.WareHouse_Id,
            Shift_Start_Packing_Master_.WareHouse_Name,
            Shift_Start_Packing_Master_.Quantity,
            Shift_Start_Packing_Master_.Shift_Start_Status,
            Shift_Start_Packing_Master_.Company_Id,
            Shift_Start_Packing_Master_.Weight,
            Shift_Start_Packing_Master_.Batch_Weight,
            Shift_Start_Packing_Master_.Weight_Item,
            Shift_Start_Packing_Master_.Process_Id,
            Shift_Start_Packing_Master_.Shift_Details_Id,
            Shift_Start_Packing_Master_.Purchase_Order_Master_Id,
            Shift_Start_Packing_Master_.Item_Length,
            Item_Packing_Details_,
            Shift_Start_Packing_Master_.Remark,
            Shift_Start_Packing_Master_.PInvoice_No,
            Shift_Start_Packing_Master_.Reference_Field
            
          ],
          connection
        ).result();
        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        await connection.rollback();
        rej(err);
      }
    });
  },




};
module.exports = Shift_Start;
