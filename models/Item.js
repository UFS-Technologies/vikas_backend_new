var db = require("../dbconnection");
var fs = require("fs");
const storedProcedure = require("../helpers/stored-procedure");
var Item = {
  // Save_Item:function(Item_,callback)
  //     {
  //     return db.query("CALL Save_Item("+"@Item_Id_ :=?,"+"@Group_Id_ :=?,"+"@Group_Name_ :=?,"+
  //     "@Saleunit_Id_ :=?,"+"@Saleunit_Name_ :=?,"+"@Item_Code_ :=?,"+"@Item_Name_ :=?,"+
  //     "@Sales_Tax_ :=?,"+"@HSNMasterId_ :=?,"+"@CGST_ :=?,"+"@SGST_ :=?,"+"@IGST_ :=?,"+
  //     "@HSNCODE_ :=?,"+"@Country_Id_ :=?,"+"@Country_Name_ :=?,"+"@Is_Check_ :=?"+")"
  //     ,[Item_.Item_Id,Item_.Group_Id,Item_.Group_Name,Item_.Saleunit_Id,Item_.Saleunit_Name,
  //     Item_.Item_Code,Item_.Item_Name,Item_.Sales_Tax,Item_.HSNMasterId,Item_.CGST,Item_.SGST,
  //     Item_.IGST,Item_.HSNCODE,Item_.Country_Id,Item_.Country_Name,Item_.Is_Check,],callback);
  //     },

  Save_Item: async function (Item_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      await connection.beginTransaction();
      var Process_ = Item_.Process_List_Data;
      var Raw_Material_ = Item_.Raw_Material_Data;
      var Wastage_ = Item_.Wastage_Data;

      try {
        const result1 = await new storedProcedure(
          "Save_Item",
          [
            Item_.Item_Id,
            Item_.Item_Name,
            Item_.Group_Id,
            Item_.Group_Name,
            Item_.Unit_Id,
            Item_.Unit_Name,
            Item_.HSN_Id,
            Item_.Hsn_Code,
            Item_.MFCode,
            Item_.Weight,
            Item_.Packing_Size,
            Item_.Colour,
            Item_.UPC,
            Item_.CGST,
            Item_.SGST,
            Item_.IGST,
            Item_.GST,
            Item_.CESS,
            Item_.Batch_Weight,
            Item_.Quantity_Inshift,
            Item_.Weight_Item,
            Item_.Barcode_Item,
            Item_.Product_Code,
            Item_.Re_Order_Level,
            Item_.Process_Length,
            Item_.Raw_Length,
            Item_.Wastage_Length,
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
  Delete_Item: function (Item_Id_, callback) {
    return db.query("CALL Delete_Item(@Item_Id_ :=?)", [Item_Id_], callback);
  },
  Get_Item_Stock_Id: function (Item_Id_, callback) {
    return db.query(
      "CALL Get_Item_Stock_Id(@Item_Id_ :=?)",
      [Item_Id_],
      callback
    );
  },
  HSN_Dropdown: function (callback) {
    return db.query("CALL HSN_Dropdown()", [], callback);
  },

  Load_Process: function (callback) {
    return db.query("CALL Load_Process()", [], callback);
  },

  Load_Damage_Type: function (callback) {
    return db.query("CALL Load_Damage_Type()", [], callback);
  },

  Search_Item: function (Item_Name_, Group_Id_, callback) {
    if (
      Item_Name_ === "undefined" ||
      Item_Name_ === "" ||
      Item_Name_ === undefined
    )
      Item_Name_ = "";
    return db.query(
      "CALL Search_Item(@Item_Name_ :=?,@Group_Id_ :=?)",
      [Item_Name_, Group_Id_],
      callback
    );
  },

  Search_Item_Purchase: function (Group_Id_, Item_Name_, callback) {
    if (
      Item_Name_ === "undefined" ||
      Item_Name_ === "" ||
      Item_Name_ === undefined
    )
      Item_Name_ = "";
    return db.query(
      "CALL Search_Item_Purchase(@Group_Id_ :=?,@Item_Name_ :=?)",
      [Group_Id_, Item_Name_],
      callback
    );
  },

  Item_Typeahead: function (Item_Name_, callback) {
    if (Item_Name_ === undefined) Item_Name_ = "";
    return db.query(
      "CALL Item_Typeahead(@Item_Name_ :=?)",
      [Item_Name_],
      callback
    );
  },

  Get_Stock_Item_Typeahead: function (ItemName_, Item_Group_, callback) {
    if (
      ItemName_ === "undefined" ||
      ItemName_ === "" ||
      ItemName_ === undefined
    )
      ItemName_ = "";
    return db.query(
      "CALL Get_Stock_Item_Typeahead(@ItemName_ :=?,@Item_Group_ :=?)",
      [ItemName_, Item_Group_],
      callback
    );
  },
  Search_Item_Typeahead: function (ItemName_, Group_Id_, callback) {
    if (
      ItemName_ === "undefined" ||
      ItemName_ === "" ||
      ItemName_ === undefined
    )
      ItemName_ = "";
    return db.query(
      "CALL Search_Item_Typeahead(@ItemName_ :=?,@Group_Id_ :=?)",
      [ItemName_, Group_Id_],
      callback
    );
  },
  //   Get_Stock_Item_Typeahead_PO2: function (
  //     Stock_Id_,
  //     ItemId_,
  //     ItemName_,
  //     callback
  //   ) {
  //     if (
  //       ItemName_ === "undefined" ||
  //       ItemName_ === "" ||
  //       ItemName_ === undefined
  //     )
  //       ItemName_ = "";
  //     return db.query(
  //       "CALL Get_Stock_Item_Typeahead_PO2(@Stock_Id_ :=?,@ItemId_ :=?,@ItemName_ :=?)",
  //       [Stock_Id_, ItemId_, ItemName_],
  //       callback
  //     );
  //   },

  Get_Stock_Item_Typeahead_PO2: function (
    Stock_Id_,
    ItemId_,
    ItemName_,

    callback
  ) {
    if (ItemName === "undefined" || ItemName === "" || ItemName === undefined)
      ItemName = "";
    return db.query(
      "CALL Get_Stock_Item_Typeahead_PO2(@Stock_Id_ :=?,@ItemId_ :=?,@ItemName_:=?)",
      [Stock_Id_, ItemId_, ItemName_],
      callback
    );
  },

  Get_Stock_Item_Typeahead_PO: function (ItemName_, Item_Group_, callback) {
    if (
      ItemName_ === "undefined" ||
      ItemName_ === "" ||
      ItemName_ === undefined
    )
      ItemName_ = "";
    return db.query(
      "CALL Get_Stock_Item_Typeahead_PO(@ItemName_ :=?,@Item_Group_ :=?)",
      [ItemName_, Item_Group_],
      callback
    );
  },

  Get_Stock_Item_Typeahead_PO_te: function (ItemName_, Item_Group_, callback) {
    if (
      ItemName_ === "undefined" ||
      ItemName_ === "" ||
      ItemName_ === undefined
    )
      ItemName_ = "";
    return db.query(
      "CALL Get_Stock_Item_Typeahead_PO_te(@ItemName_ :=?,@Item_Group_ :=?)",
      [ItemName_, Item_Group_],
      callback
    );
  },

  Get_Item_Data: async function (Item_Id_) {
    const Process_List = await new storedProcedure("Get_Process_List", [
      Item_Id_,
    ]).result();
    const Raw_Material = await new storedProcedure("Get_Raw_Material", [
      Item_Id_,
    ]).result();
    const Wastage = await new storedProcedure("Get_Wastage", [
      Item_Id_,
    ]).result();
    return { [0]: { Process_List, Raw_Material, Wastage } };
  },
};
module.exports = Item;
