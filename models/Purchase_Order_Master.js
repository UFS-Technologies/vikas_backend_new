var db=require('../dbconnection');
var fs = require('fs');
const storedProcedure=require('../helpers/stored-procedure');
var Purchase_Order_Master=
{ 
    Save_Purchase_Order_Master: async function (Purchase_Order_Master_) {
     
         return new Promise(async (rs,rej)=>{
           const pool = db.promise();
           let result1;
           var connection = await pool.getConnection();

           console.log(Purchase_Order_Master_)
    try {
const result1 = await(new storedProcedure('Save_Purchase_Order_Master',[Purchase_Order_Master_.Purchase_Order_Master_Id,
  Purchase_Order_Master_.Client_Accounts_Id, Purchase_Order_Master_.Purchase_Order_Customer_Id,
  Purchase_Order_Master_.Company_Id, Purchase_Order_Master_.User_Id, Purchase_Order_Master_.Entry_Date,Purchase_Order_Master_.PONo,Purchase_Order_Master_.Delivery_Date,
    Purchase_Order_Master_.Currency,Purchase_Order_Master_.Shipment_Method_Id,Purchase_Order_Master_.Price_Method,Purchase_Order_Master_.Payment_Term,
    Purchase_Order_Master_.Shipping_Port,Purchase_Order_Master_.Delivery_Port,Purchase_Order_Master_.Shipmet_Plan_Id,Purchase_Order_Master_.No_of_Shipment,
    Purchase_Order_Master_.Description,Purchase_Order_Master_.Order_Status,Purchase_Order_Master_.TotalAmount,
    Purchase_Order_Master_.Purchase_Details,Purchase_Order_Master_.Shipment_Save], connection)).result();
         await connection.commit();
                 connection.release();
                 rs( result1);     
               }
            catch (err) {   
            await connection.rollback();
            rej(err);
            var result2=[{'Purchase_Order_Master_Id_':0}]      
            rs(result2);
          }
          finally 
          {
          connection.release();
       }
    })
},



Save_Purchase_Order_Track_Master: async function (Purchase_Order_Master_) {

  console.log(Purchase_Order_Master_)
     
  return new Promise(async (rs,rej)=>{
    const pool = db.promise();
    let result1;
    var connection = await pool.getConnection();
try {
const result1 = await(new storedProcedure('Save_Purchase_Order_Track_Master',[Purchase_Order_Master_.Purchase_Order_Track_Master_Id,
Purchase_Order_Master_.Client_Accounts_Id,Purchase_Order_Master_.Customer_Name,Purchase_Order_Master_.PONo,Purchase_Order_Master_.Po_Date,Purchase_Order_Master_.Invoice_No,
Purchase_Order_Master_.Invoice_Date,Purchase_Order_Master_.Customer_Refno,Purchase_Order_Master_.Container_No,Purchase_Order_Master_.Port_Name,
Purchase_Order_Master_.Eta_No,Purchase_Order_Master_.Track,Purchase_Order_Master_.Invoice_Amount,Purchase_Order_Master_.Payment_Status_Id,Purchase_Order_Master_.Payment_Status_Name,
Purchase_Order_Master_.Order_Status_Id,Purchase_Order_Master_.Order_Status_Name,Purchase_Order_Master_.Description,Purchase_Order_Master_.Payment_Date,
Purchase_Order_Master_.Purchase_Details], connection)).result();
  await connection.commit();
          connection.release();
          rs( result1);     
        }
     catch (err) {   
     await connection.rollback();
     rej(err);
     var result2=[{'Purchase_Order_Master_Id_':0}]      
     rs(result2);
   }
   finally 
   {
   connection.release();
}
})
},



  Save_Purchase_Order_Customer: async function (Purchase_Order_Master_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      try {
        const result1 = await (new storedProcedure('Save_Purchase_Order_Customer', [Purchase_Order_Master_.Purchase_Order_Customer_Id, 
          Purchase_Order_Master_.Company_Id, Purchase_Order_Master_.User_Id, Purchase_Order_Master_.Entry_Date, Purchase_Order_Master_.Delivery_Date, Purchase_Order_Master_.PONo,
        Purchase_Order_Master_.Currency, Purchase_Order_Master_.Shipment_Method_Id, Purchase_Order_Master_.Payment_Term,
         Purchase_Order_Master_.Delivery_Port, Purchase_Order_Master_.Shipmet_Plan_Id, Purchase_Order_Master_.No_of_Shipment,
        Purchase_Order_Master_.Description, Purchase_Order_Master_.Order_Status, Purchase_Order_Master_.TotalAmount,
        Purchase_Order_Master_.Reference_Field,Purchase_Order_Master_.Purchase_Details], connection)).result();
        await connection.commit();
        connection.release();
        rs(result1);
      }
      catch (err) {
        await connection.rollback();
        rej(err);
        var result2 = [{ 'Purchase_Order_Customer_Id_': 0 }]
        rs(result2);
      }
      finally {
        connection.release();
      }
    })
  },
Get_Purchase_Order_Master:function(Purchase_Order_Master_Id_,callback)
    { 
    return db.query("CALL Get_Purchase_Order_Master(@Purchase_Order_Master_Id_ :=?)",[Purchase_Order_Master_Id_],callback);
    } ,

    Get_Purchase_Order_Track_Master:function(Purchase_Order_Master_Id_,callback)
    { 
    return db.query("CALL Get_Purchase_Order_Track_Master(@Purchase_Order_Master_Id_ :=?)",[Purchase_Order_Master_Id_],callback);
    } ,


    Get_Purchase_Order_Customer:function(Purchase_Order_Master_Id_,callback)
    { 
      return db.query("CALL Get_Purchase_Order_Customer(@Purchase_Order_Master_Id_ :=?)",[Purchase_Order_Master_Id_],callback);
    } ,

    Get_Purchase_Order_Track_Customer:function(Purchase_Order_Master_Id_,callback)
    { 
      return db.query("CALL Get_Purchase_Order_Track_Customer(@Purchase_Order_Master_Id_ :=?)",[Purchase_Order_Master_Id_],callback);
    } ,
  Get_Sales_Tracking:function(Purchase_Order_Master_Id_,callback)
    { 
    return db.query("CALL Get_Sales_Tracking(@Purchase_Order_Master_Id_ :=?)",[Purchase_Order_Master_Id_],callback);
    } ,
  Search_Purchase_Order_Master: function (Is_Date_Check_, FromDate_, ToDate_, Client_Accounts_Id_, PONo_, Purchase_Order_Status_Id,callback)
    {    
      if (PONo_===undefined || PONo_==='undefined' )
      PONo_=0; 
  return db.query("CALL Search_Purchase_Order_Master(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Client_Accounts_Id_ :=?,@PONo_ :=?,@Purchase_Order_Status_Id :=?)",
    [Is_Date_Check_, FromDate_, ToDate_, Client_Accounts_Id_, PONo_, Purchase_Order_Status_Id],callback);
    },


    Search_Purchase_Order_Track_Master: function (Is_Date_Check_, FromDate_, ToDate_, Client_Accounts_Id_, PONo_, Purchase_Order_Status_Id,callback)
    {    
      if (PONo_===undefined || PONo_==='undefined' )
      PONo_=0; 
  return db.query("CALL Search_Purchase_Order_Track_Master(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Client_Accounts_Id_ :=?,@PONo_ :=?,@Purchase_Order_Status_Id :=?)",
    [Is_Date_Check_, FromDate_, ToDate_, Client_Accounts_Id_, PONo_, Purchase_Order_Status_Id],callback);
    },


  Search_Purchase_Order_Customer: function (Is_Date_Check_, FromDate_, ToDate_, PONo_, Client_Id_, Order_Status_,Reference_Field_,callback) {
    if (PONo_ === undefined || PONo_ === 'undefined')
      PONo_ = 0;
      if (Reference_Field_ === undefined || Reference_Field_ === 'undefined')
      Reference_Field_ = 0;
    return db.query("CALL Search_Purchase_Order_Customer(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@PONo_ :=?,@Client_Id_ :=?,@Order_Status_ :=?,@Reference_Field_ :=?)",
      [Is_Date_Check_, FromDate_, ToDate_, PONo_, Client_Id_, Order_Status_,Reference_Field_], callback);
  },


  Search_Purchase_Order_Track_Customer: function (Is_Date_Check_, FromDate_, ToDate_, PONo_, Client_Id_, Order_Status_,Reference_Field_,callback) {
    if (PONo_ === undefined || PONo_ === 'undefined')
      PONo_ = 0;
      if (Reference_Field_ === undefined || Reference_Field_ === 'undefined')
      Reference_Field_ = 0;
    return db.query("CALL Search_Purchase_Order_Track_Customer(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@PONo_ :=?,@Client_Id_ :=?,@Order_Status_ :=?,@Reference_Field_ :=?)",
      [Is_Date_Check_, FromDate_, ToDate_, PONo_, Client_Id_, Order_Status_,Reference_Field_], callback);
  },


  Load_Order_Status: function (Order_Status_Name_, Group_Id_,  callback) {
    if (Order_Status_Name_ === undefined || Order_Status_Name_ === 'undefined')
      Order_Status_Name_ = 0;
    return db.query("CALL Load_Order_Status(@Order_Status_Name_ :=?,@Group_Id_ :=?)",
      [Order_Status_Name_, Group_Id_], callback);
  },
  Search_Pono_Typeahead: function (PONo_,  callback) {
    if (PONo_ === undefined || PONo_ === 'undefined')
      PONo_ = '';
    return db.query("CALL Search_Pono_Typeahead(@PONo_ :=?)", [PONo_], callback);
  },
  Search_Pono_Client_Typeahead: function (PONo_,Client_Id_, callback) {
    if (PONo_ === undefined || PONo_ === 'undefined')
      PONo_ = '';
    return db.query("CALL Search_Pono_Client_Typeahead(@PONo_ :=?,@Client_Id_ :=?)", [PONo_, Client_Id_], callback);
  },
Delete_Purchase_Order_Master:function(Purchase_Order_Master_Id_,callback)
    { 
    return db.query("CALL Delete_Purchase_Order_Master(@Purchase_Order_Master_Id_ :=?)",[Purchase_Order_Master_Id_],callback);
    } ,

    Delete_Purchase_Order_Track_Master:function(Purchase_Order_Master_Id_,callback)
    { 
    return db.query("CALL Delete_Purchase_Order_Track_Master(@Purchase_Order_Master_Id_ :=?)",[Purchase_Order_Master_Id_],callback);
    } ,


Delete_Purchase_Order_Customer:function(Purchase_Order_Master_Id_,callback)
    { 
  return db.query("CALL Delete_Purchase_Order_Customer(@Purchase_Order_Master_Id_ :=?)",[Purchase_Order_Master_Id_],callback);
    } ,
  Create_Production_Customer:function(Purchase_Order_Master_Id_,callback)
    { 
    return db.query("CALL Create_Production_Customer(@Purchase_Order_Master_Id_ :=?)",[Purchase_Order_Master_Id_],callback);
    } ,
  Get_Production_From_Purchase_Customer:function(Purchase_Order_Master_Id_,callback)
    { 
    return db.query("CALL Get_Production_From_Purchase_Customer(@Purchase_Order_Master_Id_ :=?)",[Purchase_Order_Master_Id_],callback);
    } ,
  Search_Order_Tracking:function(Purchase_Order_Master_Id_,callback)
    { 
    return db.query("CALL Search_Order_Tracking(@Purchase_Order_Master_Id_ :=?)",[Purchase_Order_Master_Id_],callback);
    } ,
  Search_Order_Tracking_User: function (FromDate_, ToDate_, Is_Date_Check_, Po_No_,callback)
    { 
    return db.query("CALL Search_Order_Tracking_User(@FromDate_ :=?,@ToDate_ :=?,@Is_Date_Check_ :=?,@Po_No_ :=?)", [FromDate_, ToDate_, Is_Date_Check_, Po_No_,],callback);
    } ,
Load_Purchase_Order_Status:function(callback)
    {        
    return db.query("CALL Load_Purchase_Order_Status()",[],callback);
    },   

    Get_Purchase_Order_From_Proforma:function(Shipment_Master_Id_,callback)
    { 
    return db.query("CALL Get_Purchase_Order_From_Proforma(@Shipment_Master_Id_ :=?)",[Shipment_Master_Id_],callback);
    } ,

    Get_Purchase_Order_From_Proforma_Invoice:function(Purchase_Order_Master_Id_,callback)
    { 
    return db.query("CALL Get_Purchase_Order_From_Proforma_Invoice(@Purchase_Order_Master_Id_ :=?)",[Purchase_Order_Master_Id_],callback);
    } ,
  Search_Dashboard_Customer: function (Login_User_Id_,callback)
    { 
    return db.query("CALL Search_Dashboard_Customer(@Login_User_Id_ :=?)", [Login_User_Id_],callback);
    } ,
  Search_Dashboard:function(callback)
    { 
    return db.query("CALL Search_Dashboard()",[],callback);
    } ,
};
module.exports=Purchase_Order_Master;