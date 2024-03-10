var db=require('../dbconnection');
var fs = require('fs');
var Damage_Details=
{ 
Save_Damage_Details:function(Damage_Details_,callback)
{ 
    return db.query("CALL Save_Damage_Details("+"@Damage_Details_Id_ :=?,"+"@Damage_Master_Id_ :=?,"+"@ItemId_ :=?,"+
    "@Barcode_ :=?,"+"@ItemName_ :=?,"+"@GroupId_ :=?,"+"@GroupName_ :=?,"+"@UnitId_ :=?,"+"@UnitName_ :=?,"+
    "@StockId_ :=?,"+"@PurchaseRate_ :=?,"+"@SaleRate_ :=?,"+"@MRP_ :=?,"+"@HSNMasterId_ :=?,"+"@HSNCODE_ :=?,"+
    "@SaleTax_ :=?,"+"@Quantity_ :=?,"+"@Stock_Details_Id_ :=?,"+"@To_Employee_Id_ :=?,"+"@CGST_ :=?,"+"@SGST_ :=?"+")"
    ,[Damage_Details_.Damage_Details_Id,Damage_Details_.Damage_Master_Id,Damage_Details_.ItemId,
    Damage_Details_.Barcode,Damage_Details_.ItemName,Damage_Details_.GroupId,Damage_Details_.GroupName,
    Damage_Details_.UnitId,Damage_Details_.UnitName,Damage_Details_.StockId,Damage_Details_.PurchaseRate,
    Damage_Details_.SaleRate,Damage_Details_.MRP,Damage_Details_.HSNMasterId,Damage_Details_.HSNCODE,
    Damage_Details_.SaleTax,Damage_Details_.Quantity,Damage_Details_.Stock_Details_Id,Damage_Details_.To_Employee_Id,
    Damage_Details_.CGST,Damage_Details_.SGST],callback);
    },
Delete_Damage_Details:function(Damage_Details_Id_,callback)
    { 
    return db.query("CALL Delete_Damage_Details(@Damage_Details_Id_ :=?)",[Damage_Details_Id_],callback);
    },
Get_Damage_Details:function(Damage_Details_Id_,callback)
    { 
    return db.query("CALL Get_Damage_Details(@Damage_Details_Id_ :=?)",[Damage_Details_Id_],callback);
    },
Search_Damage_Details:function(Damage_Details_Name_,callback)
    { 
    if (Damage_Details_Name_==='undefined'||Damage_Details_Name_===''||Damage_Details_Name_===undefined )
    Damage_Details_Name_='';
    return db.query("CALL Search_Damage_Details(@Damage_Details_Name_ :=?)",[Damage_Details_Name_],callback);
    }
};
module.exports=Damage_Details;

