var db=require('../dbconnection');
var fs = require('fs');
var Sales_Return_Master=
{ 
Save_Sales_Return_Master:function(Sales_Return_Master_,callback)
    { 
    return db.query("CALL Save_Sales_Return_Master("+"@Sales_Return_Master_Id_ :=?,"+
    "@Account_Party_Id_ :=?,"+"@EmpIoyee_Id_ :=?,"+"@User_Id_ :=?,"+"@Bill_Date_ :=?,"+
    "@Invoice_No_ :=?,"+"@Return_Date_ :=?,"+"@Return_BillNo_ :=?,"+"@GrossTotal_ :=?,"+
    "@TotalDiscount_ :=?,"+"@NetTotal_ :=?,"+"@TotalCGST_ :=?,"+"@ToalSGST_ :=?,"+
    "@TotalIGST_ :=?,"+"@Cess_ :=?,"+"@RoundOff_ :=?,"+"@TotalAmount_ :=?,"+"@BillType_ :=?"+")"
    ,[Sales_Return_Master_.Sales_Return_Master_Id,Sales_Return_Master_.Account_Party_Id,
    Sales_Return_Master_.EmpIoyee_Id,Sales_Return_Master_.User_Id,Sales_Return_Master_.Bill_Date,
    Sales_Return_Master_.Invoice_No,Sales_Return_Master_.Return_Date,Sales_Return_Master_.Return_BillNo,
    Sales_Return_Master_.GrossTotal,Sales_Return_Master_.TotalDiscount,Sales_Return_Master_.NetTotal,
    Sales_Return_Master_.TotalCGST,Sales_Return_Master_.ToalSGST,Sales_Return_Master_.TotalIGST,
    Sales_Return_Master_.Cess,Sales_Return_Master_.RoundOff,Sales_Return_Master_.TotalAmount,
    Sales_Return_Master_.BillType],callback);
    } ,
Delete_Sales_Return_Master:function(Sales_Return_Master_Id_,callback)
    { 
    return db.query("CALL Delete_Sales_Return_Master(@Sales_Return_Master_Id_ :=?)",[Sales_Return_Master_Id_],callback);
    } ,
Get_Sales_Return_Master:function(Sales_Return_Master_Id_,callback)
    { 
    return db.query("CALL Get_Sales_Return_Master(@Sales_Return_Master_Id_ :=?)",[Sales_Return_Master_Id_],callback);
    } ,
Search_Sales_Return_Master:function(Sales_Return_Master_Name_,callback)
    { 
    if (Sales_Return_Master_Name_==='undefined'||Sales_Return_Master_Name_===''||Sales_Return_Master_Name_===undefined )
    Sales_Return_Master_Name_='';
    return db.query("CALL Search_Sales_Return_Master(@Sales_Return_Master_Name_ :=?)",[Sales_Return_Master_Name_],callback);
    }
};
module.exports=Sales_Return_Master;

