var db = require("../dbconnection");
var fs = require("fs");
const storedProcedure = require("../helpers/stored-procedure");
var Stock_Add_Master = {
  Save_Stock_Add_Master: async function (Stock_Add_Master_) {
    console.log(Stock_Add_Master_);
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      try {
        const result1 = await new storedProcedure(
          "Save_Stock_Add_Master",
          [
            Stock_Add_Master_.Stock_Add_Master_Id,
            Stock_Add_Master_.Entry_Date,
            Stock_Add_Master_.Description1,
            Stock_Add_Master_.User_Id,
            Stock_Add_Master_.Purchase_Type_Id,
            Stock_Add_Master_.Company_Id,
            Stock_Add_Master_.Stock_Add_Details,
          ],
          connection
        ).result();
        //await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        console.log(err);
        //await connection.rollback();
        rej(err);
        var result2 = [{ Stock_Add_Master_Id_: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },
  Delete_Stock_Add_Master: function (
    Stock_Add_Master_Id_,
    Company_Id_,
    callback
  ) {
    return db.query(
      "CALL Delete_Stock_Add_Master(@Stock_Add_Master_Id_ :=?,@Company_Id_:=?)",
      [Stock_Add_Master_Id_, Company_Id_],
      callback
    );
  },
  Get_Stock_Add_Master: function (Stock_Add_Master_Id_, callback) {
    return db.query(
      "CALL Get_Stock_Add_Master(@Stock_Add_Master_Id_ :=?)",
      [Stock_Add_Master_Id_],
      callback
    );
  },
  Search_Stock_Add_Master: function (
    FromDate_,
    ToDate_,
    Is_Date_Check_,
    callback
  ) {
    return db.query(
      "CALL Search_Stock_Add_Master(@FromDate_ :=?,@ToDate_ :=?,@Is_Date_Check_ :=?)",
      [FromDate_, ToDate_, Is_Date_Check_],
      callback
    );
  },
  Search_Stock_Add_Report: function (
    FromDate_,
    ToDate_,
    Is_Date_Check_,
    Item_Id_,
    Warehouse_Id_,
    Company_Id,
    callback
  ) {
    return db.query(
      "CALL Search_Stock_Add_Report(@FromDate_ :=?,@ToDate_ :=?,@Is_Date_Check_ :=?,@Item_Id_ :=?,@Warehouse_Id_ :=?,@Company_Id_ :=?)",
      [FromDate_, ToDate_, Is_Date_Check_, Item_Id_, Warehouse_Id_, Company_Id],
      callback
    );
  },
  Get_Barcode_Stock: function (Barcode_, callback) {
    if (Barcode_ === "undefined" || Barcode_ === "" || Barcode_ === undefined)
      Barcode_ = "";
    return db.query(
      "CALL Get_Barcode_Stock(@Barcode_ :=?)",
      [Barcode_],
      callback
    );
  },
  Get_Item_Typeahead: function (ItemName_, callback) {
    if (
      ItemName_ === "undefined" ||
      ItemName_ === "" ||
      ItemName_ === undefined
    )
      ItemName_ = "";
    return db.query(
      "CALL Get_Item_Typeahead(@ItemName_ :=?)",
      [ItemName_],
      callback
    );
  },
  Search_Warehouse_Typeahead: function (WareHouse_Name_, callback) {
    if (
      WareHouse_Name_ === "undefined" ||
      WareHouse_Name_ === "" ||
      WareHouse_Name_ === undefined
    )
      WareHouse_Name_ = "";
    return db.query(
      "CALL Search_Warehouse_Typeahead(@WareHouse_Name_ :=?)",
      [WareHouse_Name_],
      callback
    );
  },
  Search_Stock_Report: function (
    ItemId,
    WareHouse_Id,
    Company_Id,
    Item_Group_Id,
    callback
  ) {
    // console.log(ItemId,WareHouse_Id,Company_Id);
    return db.query(
      "CALL Search_Stock_Report(@ItemId :=?,@WareHouse_Id :=?,@Company_Id :=?,@Item_Group_Id :=?)",
      [ItemId, WareHouse_Id, Company_Id, Item_Group_Id],
      callback
    );
  },


  Search_Transaction_Report: function (
    ItemId,
    WareHouse_Id,
    Company_Id,
    Item_Group_Id,
    callback
  ) {
    // console.log(ItemId,WareHouse_Id,Company_Id);
    return db.query(
      "CALL Search_Transaction_Report(@ItemId :=?,@WareHouse_Id :=?,@Company_Id :=?,@Item_Group_Id :=?)",
      [ItemId, WareHouse_Id, Company_Id, Item_Group_Id],
      callback
    );
  },

  Search_Production_No_Typeahead: function (Production_No_, callback) {
    if (
      Production_No_ === "undefined" ||
      Production_No_ === "" ||
      Production_No_ === undefined
    )
      Production_No_ = 0;

    return db.query(
      "CALL Search_Production_No_Typeahead(@Production_No_ :=?)",
      [Production_No_],
      callback
    );
  },


  Search_Purchase_No_Typeahead: function (Purchase_Order_Master_Id_, callback) {
    if (
      Purchase_Order_Master_Id_ === "undefined" ||
      Purchase_Order_Master_Id_ === "" ||
      Purchase_Order_Master_Id_ === undefined
    )
      Purchase_Order_Master_Id_ = 0;

    return db.query(
      "CALL Search_Purchase_No_Typeahead(@Purchase_Order_Master_Id_ :=?)",
      [Purchase_Order_Master_Id_],
      callback
    );
  },



  Search_Packing_No_Typeahead: function (Packing_No_, callback) {
    if (
      Packing_No_ === "undefined" ||
      Packing_No_ === "" ||
      Packing_No_ === undefined
    )
      Packing_No_ = 0;

    return db.query(
      "CALL Search_Packing_No_Typeahead(@Packing_No_ :=?)",
      [Packing_No_],
      callback
    );
  },



  Search_Ref_No_Typeahead: function (Ref_No_, callback) {
    if (Ref_No_ === "undefined" || Ref_No_ === "" || Ref_No_ === undefined)
      Ref_No_ = "";

    return db.query(
      "CALL Search_Ref_No_Typeahead(@Ref_No_ :=?)",
      [Ref_No_],
      callback
    );
  },
  Search_Production_Ref_Typeahead: function (
    Proforma_Id_,
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
      "CALL Search_Production_Ref_Typeahead(@Proforma_Id_ :=?,@Production_No_ :=?)",
      [Proforma_Id_, Production_No_],
      callback
    );
  },
  Get_Production_Details_From_Typeahead: function (Production_No_, callback) {
    if (
      Production_No_ === "undefined" ||
      Production_No_ === "" ||
      Production_No_ === undefined
    )
      Production_No_ = 0;

    return db.query(
      "CALL Get_Production_Details_From_Typeahead(@Production_No_ :=?)",
      [Production_No_],
      callback
    );
  },


  Get_Purchase_Details_From_Typeahead: function (Purchase_Order_Master_Id_, callback) {
    if (
      Purchase_Order_Master_Id_ === "undefined" ||
      Purchase_Order_Master_Id_ === "" ||
      Purchase_Order_Master_Id_ === undefined
    )
      Purchase_Order_Master_Id_ = 0;

    return db.query(
      "CALL Get_Purchase_Details_From_Typeahead(@Purchase_Order_Master_Id_ :=?)",
      [Purchase_Order_Master_Id_],
      callback
    );
  },

  Get_Production_Details_From_PalletTypeahead: function (
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
      "CALL Get_Production_Details_From_PalletTypeahead(@Production_No_ :=?)",
      [Production_No_],
      callback
    );
  },
};
module.exports = Stock_Add_Master;
