var db = require("../dbconnection");
var fs = require("fs");
const storedProcedure = require("../helpers/stored-procedure");
var Purchase_Master = {
  Save_Purchase_Master: async function (Purchase_Master_) {
    console.log(Purchase_Master_)
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      try {
        const result1 = await new storedProcedure(
          "Save_Purchase_Master",
          [
            Purchase_Master_.Purchase_Master_Id,
            Purchase_Master_.Purchase_Type_Id,
            Purchase_Master_.Account_Party_Id,
            Purchase_Master_.Entry_Date,
            Purchase_Master_.PurchaseDate,
            Purchase_Master_.InvoiceNo,
            Purchase_Master_.GrossTotal,
            Purchase_Master_.TotalDiscount,
            Purchase_Master_.NetTotal,
            Purchase_Master_.TotalCGST,
            Purchase_Master_.TotalSGST,
            Purchase_Master_.TotalIGST,
            Purchase_Master_.TotalGST,
            Purchase_Master_.TotalAmount,
            Purchase_Master_.Discount,
            Purchase_Master_.Roundoff,
            Purchase_Master_.Grand_Total,
            Purchase_Master_.Other_Charges,
            Purchase_Master_.BillType,
            Purchase_Master_.User_Id,
            Purchase_Master_.Description,
            Purchase_Master_.Company_Id,
            Purchase_Master_.Purchase_Details,
            Purchase_Master_.Purchase_Master_Order_Id,
            Purchase_Master_.Group_Id,
          ],
          connection
        ).result();
        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        await connection.rollback();
        rej(err);
        var result2 = [{ Purchase_Master_Id_: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },

  Delete_Purchase_Master: function (
    Purchase_Master_Id_,
    Company_Id_,
    callback
  ) {
    return db.query(
      "CALL Delete_Purchase_Master(@Purchase_Master_Id_ :=?,@Company_Id_ :=?)",
      [Purchase_Master_Id_, Company_Id_],
      callback
    );
  },
  Get_Purchase_Master: function (Purchase_Master_Id_, callback) {
    return db.query(
      "CALL Get_Purchase_Master(@Purchase_Master_Id_ :=?)",
      [Purchase_Master_Id_],
      callback
    );
  },
  Search_Purchase_Master: function (
    Is_Date_Check_,
    FromDate_,
    ToDate_,
    Account_Party_Id_,
    InvoiceNo_,
    Purchase_Type_,
    callback
  ) {
    if (
      InvoiceNo_ === "undefined" ||
      InvoiceNo_ === "" ||
      InvoiceNo_ === undefined
    )
      InvoiceNo_ = "";
    return db.query(
      "CALL Search_Purchase_Master(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@InvoiceNo_ :=?,@Purchase_Type_ :=?)",
      [
        Is_Date_Check_,
        FromDate_,
        ToDate_,
        Account_Party_Id_,
        InvoiceNo_,
        Purchase_Type_,
      ],
      callback
    );
  },
  Search_Purchase_Master_Report: function (
    Is_Date_Check_,
    FromDate_,
    ToDate_,
    Account_Party_Id_,
    InvoiceNo_,
    Purchase_Type_,
    Item_Id,
    callback
  ) {
    return db.query(
      "CALL Search_Purchase_Master_Report(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@InvoiceNo_ :=?,@Purchase_Type_ :=?,@Item_Id :=?)",
      [
        Is_Date_Check_,
        FromDate_,
        ToDate_,
        Account_Party_Id_,
        InvoiceNo_,
        Purchase_Type_,
        Item_Id,
      ],
      callback
    );
  },

  Search_Item_Production_Report: function (
    Is_Date_Check_,
    FromDate_,
    ToDate_,
    Account_Party_Id_,
    InvoiceNo_,
    Purchase_Type_,
    Item_Id,
    callback
  ) {
    return db.query(
      "CALL Search_Item_Production_Report(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@InvoiceNo_ :=?,@Purchase_Type_ :=?,@Item_Id :=?)",
      [
        Is_Date_Check_,
        FromDate_,
        ToDate_,
        Account_Party_Id_,
        InvoiceNo_,
        Purchase_Type_,
        Item_Id,
      ],
      callback
    );
  },


  Search_Item_Typeahead: function (Item_Name_, callback) {
    if (
      Item_Name_ === "undefined" ||
      Item_Name_ === "" ||
      Item_Name_ === undefined
    )
      Item_Name_ = "";
    return db.query(
      "CALL Search_Item(@Item_Name_ :=?)",
      [Item_Name_],
      callback
    );
  },
  Get_Purchase_Item_Typeahead: function (ItemName_, callback) {
    if (
      ItemName_ === "undefined" ||
      ItemName_ === "" ||
      ItemName_ === undefined
    )
      ItemName_ = "";
    return db.query(
      "CALL Get_Purchase_Item_Typeahead(@ItemName_ :=?)",
      [ItemName_],
      callback
    );
  },
  Get_Barcode_Purchase: function (Barcode_, callback) {
    if (Barcode_ === "undefined" || Barcode_ === "" || Barcode_ === undefined)
      Barcode_ = "";
    return db.query(
      "CALL Get_Barcode_Purchase(@Barcode_ :=?)",
      [Barcode_],
      callback
    );
  },
  Get_Purchase_Details: function (Purchase_Master_Id_, callback) {
    return db.query(
      "CALL Get_Purchase_Details(@Purchase_Master_Id_ :=?)",
      [Purchase_Master_Id_],
      callback
    );
  },
  Search_Purchase_Report: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    Account_Party_Id_,
    Item_,
    To_Employee_Id_,
    callback
  ) {
    return db.query(
      "call Search_Purchase_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Account_Party_Id_ :=?,@Item_ :=?,@To_Employee_Id_ :=?)",
      [
        Is_Date_Check_,
        From_date_,
        To_date_,
        Account_Party_Id_,
        Item_,
        To_Employee_Id_,
      ],
      callback
    );
  },

  Save_Finishedgoods_Purchase_Order: async function (
    FinishedGoods_Purchase_Master_
  ) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      try {
        const result1 = await new storedProcedure(
          "Save_Finishedgoods_Purchase_Order",
          [
            FinishedGoods_Purchase_Master_.FinishedGoods_Purchase_Master_Id,
            FinishedGoods_Purchase_Master_.Purchase_Type_Id,
            FinishedGoods_Purchase_Master_.Account_Party_Id,
            FinishedGoods_Purchase_Master_.Entry_Date,
            FinishedGoods_Purchase_Master_.PurchaseDate,
            FinishedGoods_Purchase_Master_.InvoiceNo,
            FinishedGoods_Purchase_Master_.GrossTotal,
            FinishedGoods_Purchase_Master_.TotalDiscount,
            FinishedGoods_Purchase_Master_.NetTotal,
            FinishedGoods_Purchase_Master_.TotalCGST,
            FinishedGoods_Purchase_Master_.TotalSGST,
            FinishedGoods_Purchase_Master_.TotalIGST,
            FinishedGoods_Purchase_Master_.TotalGST,
            FinishedGoods_Purchase_Master_.TotalAmount,
            FinishedGoods_Purchase_Master_.Discount,
            FinishedGoods_Purchase_Master_.Roundoff,
            FinishedGoods_Purchase_Master_.Grand_Total,
            FinishedGoods_Purchase_Master_.Other_Charges,
            FinishedGoods_Purchase_Master_.BillType,
            FinishedGoods_Purchase_Master_.User_Id,
            FinishedGoods_Purchase_Master_.Description,
            FinishedGoods_Purchase_Master_.FinishedGoods_Purchase_Details,
          ],
          connection
        ).result();

        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        await connection.rollback();
        rej(err);
        var result2 = [{ FinishedGoods_Purchase_Master_Id_: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },
  Get_Finishedgoods_Purchase_Order: function (Purchase_Master_Id_, callback) {
    return db.query(
      "CALL Get_Finishedgoods_Purchase_Order(@Purchase_Master_Id_ :=?)",
      [Purchase_Master_Id_],
      callback
    );
  },
  Delete_Finishedgoods_Purchase_Order: function (
    Purchase_Master_Id_,
    callback
  ) {
    return db.query(
      "CALL Delete_Finishedgoods_Purchase_Order(@Purchase_Master_Id_ :=?)",
      [Purchase_Master_Id_],
      callback
    );
  },
  Search_Finishedgoods_Purchase_Order: function (
    Is_Date_Check_,
    FromDate_,
    ToDate_,
    Account_Party_Id_,
    InvoiceNo_,
    Purchase_Type_,
    callback
  ) {
    if (
      InvoiceNo_ === "undefined" ||
      InvoiceNo_ === "" ||
      InvoiceNo_ === undefined
    )
      InvoiceNo_ = "";

    return db.query(
      "CALL Search_Finishedgoods_Purchase_Order(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@InvoiceNo_ :=?,@Purchase_Type_ :=?)",
      [
        Is_Date_Check_,
        FromDate_,
        ToDate_,
        Account_Party_Id_,
        InvoiceNo_,
        Purchase_Type_,
      ],
      callback
    );
  },
  Search_Finishedgoods_Purchase_Order_Report: function (
    Is_Date_Check_,
    FromDate_,
    ToDate_,
    Account_Party_Id_,
    InvoiceNo_,
    Purchase_Type_,
    Item_Id,
    callback
  ) {
    return db.query(
      "CALL Search_Finishedgoods_Purchase_Order_Report(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@InvoiceNo_ :=?,@Purchase_Type_ :=?,@Item_Id :=?)",
      [
        Is_Date_Check_,
        FromDate_,
        ToDate_,
        Account_Party_Id_,
        InvoiceNo_,
        Purchase_Type_,
        Item_Id,
      ],
      callback
    );
  },





  Delete_Purchase_Order_Master: function (
    Purchase_Master_Id_,
    Company_Id_,
    callback
  ) {
    return db.query(
      "CALL Delete_Purchase_Order_Master1(@Purchase_Master_Id_ :=?,@Company_Id_ :=?)",
      [Purchase_Master_Id_, Company_Id_],
      callback
    );
  },

  Get_Purchase_Order_Details: function (Purchase_Master_Id_, callback) {
    return db.query(
      "CALL Get_Purchase_Order_Details(@Purchase_Master_Id_ :=?)",
      [Purchase_Master_Id_],
      callback
    );
  },

  Save_Purchase_Order_Master: async function (Purchase_Master_) {
    console.log(Purchase_Master_)
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      try {
        const result1 = await new storedProcedure(
          "Save_Purchase_Order_Master1",
          [
            Purchase_Master_.Purchase_Master_Id,
            Purchase_Master_.Purchase_Type_Id,
            Purchase_Master_.Account_Party_Id,
            Purchase_Master_.Entry_Date,
            Purchase_Master_.PurchaseDate,
            Purchase_Master_.InvoiceNo,
            Purchase_Master_.GrossTotal,
            Purchase_Master_.TotalDiscount,
            Purchase_Master_.NetTotal,
            Purchase_Master_.TotalCGST,
            Purchase_Master_.TotalSGST,
            Purchase_Master_.TotalIGST,
            Purchase_Master_.TotalGST,
            Purchase_Master_.TotalAmount,
            Purchase_Master_.Discount,
            Purchase_Master_.Roundoff,
            Purchase_Master_.Grand_Total,
            Purchase_Master_.Other_Charges,
            Purchase_Master_.BillType,
            Purchase_Master_.User_Id,
            Purchase_Master_.Description,
            Purchase_Master_.Company_Id,
            Purchase_Master_.Purchase_Details,
            Purchase_Master_.Currency_Id,
            Purchase_Master_.Currency_Name,
            Purchase_Master_.Group_Id,
          ],
          connection
        ).result();
        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        await connection.rollback();
        rej(err);
        var result2 = [{ Purchase_Master_Id_: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },
  Search_Purchase_Order_Master: function (
    Is_Date_Check_,
    FromDate_,
    ToDate_,
    Account_Party_Id_,
    InvoiceNo_,
    Purchase_Type_,
    callback
  ) {
    if (
      InvoiceNo_ === "undefined" ||
      InvoiceNo_ === "" ||
      InvoiceNo_ === undefined
    )
      InvoiceNo_ = "";
    return db.query(
      "CALL Search_Purchase_Master_Order(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@InvoiceNo_ :=?,@Purchase_Type_ :=?)",
      [
        Is_Date_Check_,
        FromDate_,
        ToDate_,
        Account_Party_Id_,
        InvoiceNo_,
        Purchase_Type_,
      ],
      callback
    );
  },




};
module.exports = Purchase_Master;
