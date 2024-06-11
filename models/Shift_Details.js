var db = require("../dbconnection");
var fs = require("fs");
const storedProcedure = require("../helpers/stored-procedure");
var Shift_Details = {
  Save_Shift_Details: function (Shift_Details_, callback) {
    return db.query(
      "CALL Save_Shift_Details(" +
        "@Shift_Details_Id_ :=?," +
        "@Shift_Details_Name_ :=?," +
        "@Status_ :=?," +
        "@DeleteStatus_ :=?" +
        ")",
      [
        Shift_Details_.Shift_Details_Id,
        Shift_Details_.Shift_Details_Name,
        Shift_Details_.Status,
        Shift_Details_.DeleteStatus,
      ],
      callback
    );
  },
  Search_Shift_Details: function (Shift_Details_Name_, callback) {
    if (
      Shift_Details_Name_ === "undefined" ||
      Shift_Details_Name_ === "" ||
      Shift_Details_Name_ === undefined
    )
      Shift_Details_Name_ = "";
    return db.query(
      "CALL Search_Shift_Details(@Shift_Details_Name_ :=?)",
      [Shift_Details_Name_],
      callback
    );
  },
  Delete_Shift_Details: function (Shift_Details_Id_, callback) {
    return db.query(
      "CALL Delete_Shift_Details(@Shift_Details_Id_ :=?)",
      [Shift_Details_Id_],
      callback
    );
  },
  Save_Shift_End: async function (Shift_End_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      var Wastage_ = Shift_End_.Shift_End_Details_Wastage;
      var Damage_ = Shift_End_.Damage_Details_Type_Data;
      try {
        console.log(Shift_End_);
        const result1 = await new storedProcedure(
          "Save_Shift_End",
          [
            Shift_End_.Shift_End_Master_Id,
            Shift_End_.Shift_Start_Master_Id,
            Shift_End_.Production_Master_Id,
            Shift_End_.Press_Details_Id,
            Shift_End_.Process_List_Id,
            Shift_End_.Shift_Details_Id,
            Shift_End_.Date,
            Shift_End_.Production_No,
            Shift_End_.Shift_End_No,
            Shift_End_.OutputNo,
            Shift_End_.Acceptable,
            Shift_End_.Damage,
            Shift_End_.Wastage,
            Shift_End_.User_Id,
            Shift_End_.Stock_Id,
            Shift_End_.Batch_No,
            Shift_End_.Item_Id,
            Shift_End_.Item_Name,
            Shift_End_.WareHouse_Id,
            Shift_End_.WareHouse_Name,
            Shift_End_.Production_Damage,
            Shift_End_.Company_Id,
            Shift_End_.Weight,
            Shift_End_.Batch_Weight,
            Shift_End_.Weight_Item,
            Shift_End_.Weight_Description,
            Shift_End_.Position_Id,
            Shift_End_.Purchase_Order_Master_Id,
            Shift_End_.Wastage_Length,
            Shift_End_.Shift_End_Details,
            Wastage_,
            Damage_,
            Shift_End_.status,
            Shift_End_.Damage_Type_Id,
            Shift_End_.Damage_Type_Name,
          ],
          connection
        ).result();
        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        await connection.rollback();
        rej(err);
        var result2 = [{ Shift_End_Master_Id_: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },
  Search_Shift_End: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    Production_No_,
    Process_Details_Id,
    ItemId,
    callback
  ) {
    if (
      Production_No_ === "undefined" ||
      Production_No_ === "" ||
      Production_No_ === undefined
    )
      Production_No_ = 0;

    return db.query(
      "call Search_Shift_End(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Production_No_ :=?,@Process_Details_Id :=?,@ItemId :=?)",
      [
        Is_Date_Check_,
        From_date_,
        To_date_,
        Production_No_,
        Process_Details_Id,
        ItemId,
      ],
      callback
    );
  },
  Get_Shift_End_Report: async function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    Production_No_,
    Warehouse_Id,
    ItemId,
    Company_Id
  ) {
    if (
      Production_No_ === "undefined" ||
      Production_No_ === "" ||
      Production_No_ === undefined
    )
      Production_No_ = 0;
    const Shift_End = await new storedProcedure("Search_Shift_End_Report", [
      Is_Date_Check_,
      From_date_,
      To_date_,
      Production_No_,
      Warehouse_Id,
      ItemId,
      Company_Id,
    ]).result();
    const Wastage = await new storedProcedure("Search_Shift_wastage_Report", [
      Is_Date_Check_,
      From_date_,
      To_date_,
      Production_No_,
      ItemId,
    ]).result();

    return { 0: { Shift_End, Wastage } };
  },
  Search_Employee_Shift_Report: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    Employee_Id_,
    callback
  ) {
    return db.query(
      "call Search_Employee_Shift_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Employee_Id_ :=?)",
      [Is_Date_Check_, From_date_, To_date_, Employee_Id_],
      callback
    );
  },
  Search_Employee_Work_Summary_Report: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    Employee_Id_,
    callback
  ) {
    return db.query(
      "call Search_Employee_Work_Summary_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Employee_Id_ :=?)",
      [Is_Date_Check_, From_date_, To_date_, Employee_Id_],
      callback
    );
  },
  Delete_Shift_End: function (Shift_End_Master_Id_, Company_Id_, callback) {
    return db.query(
      "CALL Delete_Shift_End(@Shift_End_Master_Id_ :=?,@Company_Id_ :=?)",
      [Shift_End_Master_Id_, Company_Id_],
      callback
    );
  },
  Get_Shift_End_details: function (Shift_End_Master_Id_, callback) {
    return db.query(
      "CALL Get_Shift_End_details(@Shift_End_Master_Id_ :=?)",
      [Shift_End_Master_Id_],
      callback
    );
  },
  Search_Production_Master_Typeahead: function (Production_Number_, callback) {
    if (
      Production_Number_ === "undefined" ||
      Production_Number_ === "" ||
      Production_Number_ === undefined
    )
      Production_Number_ = "";
    return db.query(
      "CALL Search_Production_Master_Typeahead(@Production_Number_ :=?)",
      [Production_Number_],
      callback
    );
  },
  Get_Production_Process: function (Production_Id_, Type_, callback) {
    return db.query(
      "CALL Get_Production_Process(@Production_Id_ :=?,@Type_ :=?)",
      [Production_Id_, Type_],
      callback
    );
  },


  Get_Production_Process_Packing: function (Production_Id_, Type_, callback) {
    return db.query(
      "CALL Get_Production_Process_Packing(@Production_Id_ :=?,@Type_ :=?)",
      [Production_Id_, Type_],
      callback
    );
  },


  Get_Process_Employee: function (Process_Id_, Production_No, callback) {
    return db.query(
      "CALL Get_Process_Employee(@Process_Id_ :=?,@Production_No :=?)",
      [Process_Id_, Production_No],
      callback
    );
  },

  Save_Packing: async function (Packing_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      var Wastage_ = Packing_.Packing_Details_Wastage;
      try {
        console.log(Packing_);
        const result1 = await new storedProcedure(
          "Save_Packing",
          [
            Packing_.Packing_Master_Id,
            Packing_.Shift_Start_Master_Id,
            Packing_.Production_Master_Id,
            Packing_.Press_Details_Id,
            Packing_.Process_List_Id,
            Packing_.Shift_Details_Id,
            Packing_.Date,
            Packing_.Production_No,
            Packing_.Packing_No,
            Packing_.Total_Items_Pallet,
            Packing_.Total_Pallet_Quantity,
            Packing_.Damage,
            Packing_.Wastage,
            Packing_.User_Id,
            Packing_.Stock_Id,
            Packing_.Item_Id,
            Packing_.Item_Name,
            Packing_.Category_Id,
            Packing_.Category_Name,
            Packing_.WareHouse_Id,
            Packing_.WareHouse_Name,
            Packing_.Pallet_Id,
            Packing_.Acceptable_Quantity,
            Packing_.Company_Id,
            Packing_.Purchase_Order_Master_Id,
            Packing_.Shift_Id,
            Packing_.Wastage_Length,
            Packing_.Packing_Details,
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
        var result2 = [{ Packing_Master_Id_: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },
  Get_Packing_details: function (Packing_Master_Id_, callback) {
    return db.query(
      "CALL Get_Packing_details(@Packing_Master_Id_ :=?)",
      [Packing_Master_Id_],
      callback
    );
  },
  Search_Packing: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
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
      "call Search_Packing(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Production_No_ :=?)",
      [Is_Date_Check_, From_date_, To_date_, Production_No_],
      callback
    );
  },
  Get_Packing_Report: async function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    Production_No_,
    Item_Id_,
    Warehouse_Id_,
    Pallet_Id_,
    Company_Id
  ) {
    const Packing = await new storedProcedure("Search_Packing_Report", [
      Is_Date_Check_,
      From_date_,
      To_date_,
      Production_No_,
      Item_Id_,
      Warehouse_Id_,
      Pallet_Id_,
      Company_Id,
    ]).result();
    const Wastage = await new storedProcedure("Search_Packing_Wastage_Report", [
      Is_Date_Check_,
      From_date_,
      To_date_,
      Production_No_,
      Item_Id_,
    ]).result();
    return { 0: { Packing, Wastage } };
  },
  Delete_Packing: function (Packing_Master_Id_, Company_Id_, callback) {
    return db.query(
      "CALL Delete_Packing(@Packing_Master_Id_ :=?,@Company_Id_ :=?)",
      [Packing_Master_Id_, Company_Id_],
      callback
    );
  },

  Save_Employee_Overtime_Master: async function (Employee_Overtime_Master_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      try {
        const result1 = await new storedProcedure(
          "Save_Employee_Overtime_Master",
          [
            Employee_Overtime_Master_.Employee_Overtime_Master_Id,
            Employee_Overtime_Master_.Date,
            Employee_Overtime_Master_.Shift_Id,
            Employee_Overtime_Master_.User_Id,
            Employee_Overtime_Master_.Employee_Overtime_Details,
          ],
          connection
        ).result();
        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        await connection.rollback();
        rej(err);
        var result2 = [{ Employee_Overtime_Master_Id_: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },
  Search_Employee_Overtime_Master: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    Shift_Id_,
    callback
  ) {
    return db.query(
      "call Search_Employee_Overtime_Master(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Shift_Id_ :=?)",
      [Is_Date_Check_, From_date_, To_date_, Shift_Id_],
      callback
    );
  },

  Get_Employee_Overtime_Details: function (
    Employee_Overtime_Master_Id_,
    callback
  ) {
    return db.query(
      "CALL Get_Employee_Overtime_Details(@Employee_Overtime_Master_Id_ :=?)",
      [Employee_Overtime_Master_Id_],
      callback
    );
  },

  Delete_Employee_Overtime_Master: function (
    Employee_Overtime_Master_Id_,
    callback
  ) {
    return db.query(
      "CALL Delete_Employee_Overtime_Master(@Employee_Overtime_Master_Id_ :=?)",
      [Employee_Overtime_Master_Id_],
      callback
    );
  },
  Load_Position: function (callback) {
    return db.query("CALL Load_Position()", [], callback);
  },
};
module.exports = Shift_Details;
