var db = require("../dbconnection");
var fs = require("fs");
const storedProcedure = require("../helpers/stored-procedure");
var Stock_Transfer_Master = {
  Save_Stock_Transfer_Master: async function (Stock_Transfer_Master_) {
    console.log(Stock_Transfer_Master_);
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      try {
        const result1 = await new storedProcedure(
          "Save_Stock_Transfer_Master",
          [
            Stock_Transfer_Master_.Stock_transfer_Master_Id,
            Stock_Transfer_Master_.Entry_Date,
            Stock_Transfer_Master_.User_Id,
            Stock_Transfer_Master_.Description1,
            Stock_Transfer_Master_.From_Company_Id,
            Stock_Transfer_Master_.To_Company_Id,
            Stock_Transfer_Master_.Stock_Transfer_Details,
          ],
          connection
        ).result();
        //await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        //await connection.rollback();
        rej(err);
        console.log(err);
        var result2 = [{ Stock_transfer_Master_Id_: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },
  Save_Pallets_Transfer: function (Pallets_Master_, callback) {
    return db.query(
      "CALL Save_Pallets_Transfer(" +
        "@Pallets_Master_Id_ :=?," +
        "@Entry_Date_ :=?," +
        "@User_Id_ :=?," +
        "@Production_Master_Id_ :=?," +
        "@Production_No_ :=?," +
        "@Stock_Id_ :=?," +
        "@Item_Id_ :=?," +
        "@Item_Name_ :=?," +
        "@From_Warehouse_Id_ :=?," +
        "@From_Warehouse_Name_ :=?," +
        "@Quantity_ :=?," +
        "@To_Warehouse_Id_ :=?," +
        "@To_Warehouse_Name_ :=?," +
        "@Proforma_Invoice_Master_Id_ :=?," +
        "@Reference_Field_ :=?," +
        "@Pallet_Id_ :=?," +
        "@Pallet_Name_ :=?," +
        "@Available_Quantity_ :=?," +
        "@Company_Id_ :=?," +
        "@To_Company_Id :=?," +
        "@Barcode_ :=?," +
        "@Packing_Master_Id_ :=?" +
        ")",
      [
        Pallets_Master_.Pallets_Master_Id,
        Pallets_Master_.Entry_Date,
        Pallets_Master_.User_Id,
        Pallets_Master_.Production_Master_Id,
        Pallets_Master_.Production_No,
        Pallets_Master_.Stock_Id,
        Pallets_Master_.Item_Id,
        Pallets_Master_.Item_Name,
        Pallets_Master_.From_Warehouse_Id,
        Pallets_Master_.From_Warehouse_Name,
        Pallets_Master_.Quantity,
        Pallets_Master_.To_Warehouse_Id,
        Pallets_Master_.To_Warehouse_Name,
        Pallets_Master_.Proforma_Invoice_Master_Id,
        Pallets_Master_.Reference_Field,
        Pallets_Master_.Pallet_Id,
        Pallets_Master_.Pallet_Name,
        Pallets_Master_.Available_Quantity,
        Pallets_Master_.Company_Id,
        Pallets_Master_.To_Company_Id,
        Pallets_Master_.Barcode,
        Pallets_Master_.Packing_Master_Id,
      ],
      callback
    );
  },

  Save_Pallets_Received: function (Pallets_Master_, callback) {
    return db.query(
      "CALL Save_Pallets_Received(" +
        "@Pallets_Master_Id_ :=?," +
        "@Entry_Date_ :=?," +
        "@User_Id_ :=?," +
        "@Production_Master_Id_ :=?," +
        "@Production_No_ :=?," +
        "@Stock_Id_ :=?," +
        "@Item_Id_ :=?," +
        "@Item_Name_ :=?," +
        "@From_Warehouse_Id_ :=?," +
        "@From_Warehouse_Name_ :=?," +
        "@Quantity_ :=?," +
        "@To_Warehouse_Id_ :=?," +
        "@To_Warehouse_Name_ :=?," +
        "@Proforma_Invoice_Master_Id_ :=?," +
        "@Reference_Field_ :=?," +
        "@Pallet_Id_ :=?," +
        "@Pallet_Name_ :=?," +
        "@Available_Quantity_ :=?," +
        "@Company_Id_ :=?," +
        "@To_Company_Id :=?," +
        "@Barcode_ :=?," +
        "@Packing_Master_Id_ :=?" +
        ")",
      [
        Pallets_Master_.Pallets_Master_Id,
        Pallets_Master_.Entry_Date,
        Pallets_Master_.User_Id,
        Pallets_Master_.Production_Master_Id,
        Pallets_Master_.Production_No,
        Pallets_Master_.Stock_Id,
        Pallets_Master_.Item_Id,
        Pallets_Master_.Item_Name,
        Pallets_Master_.From_Warehouse_Id,
        Pallets_Master_.From_Warehouse_Name,
        Pallets_Master_.Quantity,
        Pallets_Master_.To_Warehouse_Id,
        Pallets_Master_.To_Warehouse_Name,
        Pallets_Master_.Proforma_Invoice_Master_Id,
        Pallets_Master_.Reference_Field,
        Pallets_Master_.Pallet_Id,
        Pallets_Master_.Pallet_Name,
        Pallets_Master_.Available_Quantity,
        Pallets_Master_.Company_Id,
        Pallets_Master_.To_Company_Id,
        Pallets_Master_.Barcode,
        Pallets_Master_.Packing_Master_Id,
      ],
      callback
    );
  },


  Save_Stock_Transfer_Master1: async function (Stock_Transfer_Master_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      //await connection.beginTransaction();
      try {
        let lt = await new storedProcedure(
          "OpenTrans",
          [],
          connection
        ).result();
        const result1 = await new storedProcedure(
          "Save_Stock_Transfer_Master1",
          [
            Stock_Transfer_Master_.Stock_Transfer_Master_Id,
            Stock_Transfer_Master_.Entry_Date,
            Stock_Transfer_Master_.User_Id,
            Stock_Transfer_Master_.Description,
          ],
          connection
        ).result();
        var Stock_Transfer_Master_Id_ = result1[0].Stock_Transfer_Master_Id_;
        var Stock_Transfer_Details_ =
          Stock_Transfer_Master_.Stock_Transfer_Details;
        var Stock_ = Stock_Transfer_Details_;
        const result2 = await new storedProcedure(
          "Save_Stock_Transfer_Details",
          [Stock_Transfer_Details_, Stock_Transfer_Master_Id_],
          connection
        ).result();
        //await connection.commit();
        let cltr = await new storedProcedure(
          "CloseTrans",
          [],
          connection
        ).result();
        connection.release();
        rs(result1);
      } catch (err) {
        //await connection.rollback();
        rej(err);
      }
    });
  },
  Delete_Stock_Transfer_Master: function (
    Stock_Transfer_Master_Id_,
    From_Company_Id_,
    To_Company_Id_,
    callback
  ) {
    return db.query(
      "CALL Delete_Stock_Transfer_Master(@Stock_Transfer_Master_Id_ :=?,@From_Company_Id_ :=?,@To_Company_Id_ :=?)",
      [Stock_Transfer_Master_Id_, From_Company_Id_, To_Company_Id_],
      callback
    );
  },
  Get_Stock_Transfer_Details: function (Stock_transfer_Master_Id_, callback) {
    return db.query(
      "CALL Get_Stock_Transfer_Details(@Stock_transfer_Master_Id_ :=?)",
      [Stock_transfer_Master_Id_],
      callback
    );
  },
  Search_Stock_Transfer_Master: function (
    Is_Date_Check_,
    From_Date_,
    To_Date_,
    callback
  ) {
    return db.query(
      "CALL Search_Stock_Transfer_Master(@Is_Date_Check_ :=?,@From_Date_ :=?,@To_Date_ :=?)",
      [Is_Date_Check_, From_Date_, To_Date_],
      callback
    );
  },

  Delete_Pallets_Transfer: function (
    Pallets_Master_Id_,
    Company_Id_,
    To_Company_Id_,
    callback
  ) {
    return db.query(
      "CALL Delete_Pallets_Transfer(@Pallets_Master_Id_ :=?,@Company_Id_ :=?,@To_Company_Id_ :=?)",
      [Pallets_Master_Id_, Company_Id_, To_Company_Id_],
      callback
    );
  },
  Search_Pallets_Transfer: function (
    From_Date_,
    To_Date_,
    Is_Date_Check_,
    callback
  ) {
    return db.query(
      "CALL Search_Pallets_Transfer(@From_Date_ :=?,@To_Date_ :=?,@Is_Date_Check_ :=?)",
      [From_Date_, To_Date_, Is_Date_Check_],
      callback
    );
  },

  Search_Pallets_Received: function (
    From_Date_,
    To_Date_,
    Is_Date_Check_,
    callback
  ) {
    return db.query(
      "CALL Search_Pallets_Received(@From_Date_ :=?,@To_Date_ :=?,@Is_Date_Check_ :=?)",
      [From_Date_, To_Date_, Is_Date_Check_],
      callback
    );
  },


  Search_Pallets_Transfer_Report: function (
    From_Date_,
    To_Date_,
    Is_Date_Check_,
    Ref_No_,
    Pallet_Id,
    Production_No,
    callback
  ) {
    if (
      Production_No === "undefined" ||
      Production_No === "" ||
      Production_No === undefined
    )
      Production_No = 0;
    return db.query(
      "CALL Search_Pallets_Transfer_Report(@From_Date_ :=?,@To_Date_ :=?,@Is_Date_Check_ :=?,@Ref_No_ :=?,@Pallet_Id :=?,@Production_No :=?)",
      [From_Date_, To_Date_, Is_Date_Check_, Ref_No_, Pallet_Id, Production_No],
      callback
    );
  },
  Search_Stock_Transfer_Report: function (
    From_date_,
    To_date_,
    Is_Date_Check_,
    Item_,
    From_Id_,
    To_Id_,
    From_Company_Id,
    To_Company_Id,
    callback
  ) {
    return db.query(
      "call Search_Stock_Transfer_Report(@From_date_ :=?,@To_date_ :=?,@Is_Date_Check_ :=?,@Item_ :=?,@From_Id_ :=?,@To_Id_ :=?,@From_Company_Id :=?,@To_Company_Id :=?)",
      [
        From_date_,
        To_date_,
        Is_Date_Check_,
        Item_,
        From_Id_,
        To_Id_,
        From_Company_Id,
        To_Company_Id,
      ],
      callback
    );
  },

  Get_Stock_Group_From_Warehouse: function (
    ItemName_,
    Group_Id_,
    WareHouse_Id_,
    callback
  ) {
    if (
      ItemName_ === "undefined" ||
      ItemName_ === "" ||
      ItemName_ === undefined
    )
      ItemName_ = "";
    return db.query(
      "CALL Get_Stock_Group_From_Warehouse(@ItemName_ :=?,@Group_Id_ :=?,@WareHouse_Id_ :=?)",
      [ItemName_, Group_Id_, WareHouse_Id_],
      callback
    );
  },

  Get_Stock_From_Warehouse: function (
    ItemName_,
    From_WareHouse_Id_,
    From_Company_Id_,
    callback
  ) {
    if (
      ItemName_ === "undefined" ||
      ItemName_ === "" ||
      ItemName_ === undefined
    )
      ItemName_ = "";
    return db.query(
      "CALL Get_Stock_From_Warehouse(@ItemName_ :=?,@From_WareHouse_Id_ :=?,@From_Company_Id_:=?)",
      [ItemName_, From_WareHouse_Id_, From_Company_Id_],
      callback
    );
  },

  Get_Stock_Quantity_Details: function (
    Stock_Id_,
    WareHouse_Id_,
    Company_Id_,
    callback
  ) {
    return db.query(
      "CALL Get_Stock_Quantity_Details(@Stock_Id_ :=?,@WareHouse_Id_ :=?,@Company_Id_:=?)",
      [Stock_Id_, WareHouse_Id_, Company_Id_],
      callback
    );
  },

  Get_Stock_From_Warehouse1: function (
    ItemName_,
    From_WareHouse_Id_,
    From_Company_Id_,
    callback
  ) {
    if (
      ItemName_ === "undefined" ||
      ItemName_ === "" ||
      ItemName_ === undefined
    )
      ItemName_ = "";
    return db.query(
      "CALL Get_Stock_From_Warehouse1(@ItemName_ :=?,@From_WareHouse_Id_ :=?,@From_Company_Id_:=?)",
      [ItemName_, From_WareHouse_Id_, From_Company_Id_],
      callback
    );
  },

  Get_Stock_Item: function (
    ItemName_,
    WareHouse_Id_,
    Company_Id_,

    callback
  ) {
    if (
      ItemName_ === "undefined" ||
      ItemName_ === "" ||
      ItemName_ === undefined
    )
      ItemName_ = "";
    return db.query(
      "CALL Get_Stock_Item(@ItemName_ :=?,@WareHouse_Id_ :=?,@Company_Id_:=?)",
      [ItemName_, WareHouse_Id_, Company_Id_],
      callback
    );
  },

  Item_Name_Changes: function (
    Stock_Id_,

    callback
  ) {
    // if (
    //   ItemName_ === "undefined" ||
    //   ItemName_ === "" ||
    //   ItemName_ === undefined
    // )
    //   ItemName_ = "";
    return db.query(
      "CALL Item_Name_Changes(@Stock_Id_ :=?)",
      [Stock_Id_],
      callback
    );
  },

  Item_Stock_Name_Changes: function (
    Stock_Id_,

    callback
  ) {
    return db.query(
      "CALL Item_Stock_Name_Changes(@Stock_Id_ :=?)",
      [Stock_Id_],
      callback
    );
  },

  Get_Stock_To_Warehouse: function (
    ItemName_,
    To_WareHouse_Id_,
    To_Company_Id_,
    callback
  ) {
    if (
      ItemName_ === "undefined" ||
      ItemName_ === "" ||
      ItemName_ === undefined
    )
      ItemName_ = "";
    return db.query(
      "CALL Get_Stock_To_Warehouse(@ItemName_ :=?,@To_WareHouse_Id_ :=?,@To_Company_Id_:=?)",
      [ItemName_, To_WareHouse_Id_, To_Company_Id_],
      callback
    );
  },

  Get_Barcode_Typeahead: function (Barcode_, WareHouse_Id_, callback) {
    if (Barcode_ === "undefined" || Barcode_ === "" || Barcode_ === undefined)
      Barcode_ = "";
    return db.query(
      "CALL Get_Barcode_Typeahead(@Barcode_ :=?,@WareHouse_Id_ :=?)",
      [Barcode_, WareHouse_Id_],
      callback
    );
  },
  // Delete_Stock_Transfer_Master:function(Stock_transfer_Master_Id_,callback)
  // {
  // return db.query("CALL Delete_Stock_Transfer_Master(@Stock_transfer_Master_Id_ :=?)",[Stock_transfer_Master_Id_],callback);
  // } ,
  Quantity_Available_Check: function (
    stockid_,
    company_id_,
    warehouseid_,
    cur_quant_,
    callback
  ) {
    return db.query(
      "CALL Quantity_Available_Check(@stockid_ :=?,@company_id_ :=?,@warehouseid_ :=?,@cur_quant_ :=?)",
      [stockid_, company_id_, warehouseid_,cur_quant_],
      callback
    );
  },
};
module.exports = Stock_Transfer_Master;
