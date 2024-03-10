 var db=require('../dbconnection');
 var fs = require('fs');
 var Stock=
 { 
 Save_Stock:function(Stock_,callback)
    { 
    return db.query("CALL Save_Stock("+"@Stock_Id_ :=?,"+"@ItemId_ :=?,"+"@Barcode_ :=?,"+"@ItemName_ :=?,"+
    "@GroupId_ :=?,"+"@GroupName_ :=?,"+"@UnitId_ :=?,"+"@UnitName_ :=?,"+"@PurchaseRate_ :=?,"+
    "@SaleRate_ :=?,"+"@MRP_ :=?,"+"@HSNMasterId_ :=?,"+"@HSNCODE_ :=?,"+"@SaleTax_ :=?,"+"@Quantity_ :=?,"+
    "@CGST_ :=?,"+"@SGST_ :=?,"+"@Is_Expiry_ :=?,"+"@Expiry_Date_ :=?"+")"
    ,[Stock_.Stock_Id,Stock_.ItemId,Stock_.Barcode,Stock_.ItemName,Stock_.GroupId,Stock_.GroupName,
    Stock_.UnitId,Stock_.UnitName,Stock_.PurchaseRate,Stock_.SaleRate,Stock_.MRP,Stock_.HSNMasterId,
    Stock_.HSNCODE,Stock_.SaleTax,Stock_.Quantity,Stock_.CGST,Stock_.SGST,Stock_.Is_Expiry,
    Stock_.Expiry_Date,],callback);
    } ,

Save_Stock_InStockReport:function(Stock_,callback)
{
    return db.query("CALL Save_Stock_InStockReport("+"@Stock_Id_ :=?,"+"@PurchaseRate_ :=?,"+"@SaleRate_ :=?,"+"@MRP_ :=?"+")"
    ,[Stock_.Stock_Id,Stock_.PurchaseRate,Stock_.SaleRate,Stock_.MRP,],callback);
} ,

 Delete_Stock:function(Stock_Id_,callback)
    { 
    return db.query("CALL Delete_Stock(@Stock_Id_ :=?)",[Stock_Id_],callback);
    } ,
 Get_Stock:function(Stock_Id_,callback)
    { 
    return db.query("CALL Get_Stock(@Stock_Id_ :=?)",[Stock_Id_],callback);
    } ,
 Search_Stock:function(Stock_Name_,callback)
    { 
    if (Stock_Name_==='undefined'||Stock_Name_===''||Stock_Name_===undefined )
    Stock_Name_='';
    return db.query("CALL Search_Stock(@Stock_Name_ :=?)",[Stock_Name_],callback);
    },
 Get_Stock_Item_Typeahead:function(To_Employee_Id_,ItemName_,callback)
    { 
    if (ItemName_==='undefined'||ItemName_===''||ItemName_===undefined )
    ItemName_='';
    return db.query("CALL Get_Stock_Item_Typeahead(@To_Employee_Id_ :=?,@ItemName_ :=?)",[To_Employee_Id_,ItemName_],callback);
    },
 Get_Barcode_Typeahead:function(To_Employee_Id_,Barcode_,callback)
    { 
    if (Barcode_==='undefined'||Barcode_===''||Barcode_===undefined )
    Barcode_='';
    return db.query("CALL Get_Barcode_Typeahead(@To_Employee_Id_ :=?,@Barcode_ :=?)",[To_Employee_Id_,Barcode_],callback);
    },

Load_Full_Stock:function(To_Employee_Id_,Barcode_,callback)
{ 
    if (Barcode_==='undefined'||Barcode_===''||Barcode_===undefined )
    Barcode_='';
    return db.query("CALL Load_Full_Stock(@To_Employee_Id_ :=?,@Barcode_ :=?)",[To_Employee_Id_,Barcode_],callback);
},
    
Load_ItemDetails_MobileSales:function(To_Employee_Id_,callback)
{ 
    return db.query("CALL Load_ItemDetails_MobileSales(@To_Employee_Id_ :=?)",[To_Employee_Id_],callback);
    },
};
  module.exports=Stock;

