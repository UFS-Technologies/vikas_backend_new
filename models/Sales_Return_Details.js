var db=require('../dbconnection');
var fs = require('fs');
var Sales_Return_Details=
{ 
Save_Sales_Return_Details:function(Sales_Return_Details_,callback)
{ 
return db.query("CALL Save_Sales_Return_Details("+
"@Sales_Return_Details_Id_ :=?,"+
"@Sales_Return_Master_Id_ :=?,"+
"@Stock_Id_ :=?,"+
"@Stock_Details_Id_ :=?,"+
"@Item_Id_ :=?,"+
"@Item_Name_ :=?,"+
"@Barcode_ :=?,"+
"@GroupId_ :=?,"+
"@GroupName_ :=?,"+
"@UnitId_ :=?,"+
"@UnitName_ :=?,"+
"@PurchaseRate_ :=?,"+
"@SaleRate_ :=?,"+
"@MRP_ :=?,"+
"@HSN_Id_ :=?,"+
"@HSNCODE_ :=?,"+
"@SaleTax_ :=?,"+
"@CGST_ :=?,"+
"@SGST_ :=?,"+
"@IGST_ :=?,"+
"@CESSPER_ :=?,"+
"@Quantity_ :=?,"+
"@GrossValue_ :=?,"+
"@Discount_ :=?,"+
"@NetValue_ :=?,"+
"@CGSTAMT_ :=?,"+
"@SGSTAMT_ :=?,"+
"@IGSTAMT_ :=?,"+
"@CessAMT_ :=?,"+
"@TOTAL_ :=?"+")"
,[Sales_Return_Details_.Sales_Return_Details_Id,
Sales_Return_Details_.Sales_Return_Master_Id,
Sales_Return_Details_.Stock_Id,
Sales_Return_Details_.Stock_Details_Id,
Sales_Return_Details_.Item_Id,
Sales_Return_Details_.Item_Name,
Sales_Return_Details_.Barcode,
Sales_Return_Details_.GroupId,
Sales_Return_Details_.GroupName,
Sales_Return_Details_.UnitId,
Sales_Return_Details_.UnitName,
Sales_Return_Details_.PurchaseRate,
Sales_Return_Details_.SaleRate,
Sales_Return_Details_.MRP,
Sales_Return_Details_.HSN_Id,
Sales_Return_Details_.HSNCODE,
Sales_Return_Details_.SaleTax,
Sales_Return_Details_.CGST,
Sales_Return_Details_.SGST,
Sales_Return_Details_.IGST,
Sales_Return_Details_.CESSPER,
Sales_Return_Details_.Quantity,
Sales_Return_Details_.GrossValue,
Sales_Return_Details_.Discount,
Sales_Return_Details_.NetValue,
Sales_Return_Details_.CGSTAMT,
Sales_Return_Details_.SGSTAMT,
Sales_Return_Details_.IGSTAMT,
Sales_Return_Details_.CessAMT,
Sales_Return_Details_.TOTAL
],callback);
},
Delete_Sales_Return_Details:function(Sales_Return_Details_Id_,callback)
    { 
    return db.query("CALL Delete_Sales_Return_Details(@Sales_Return_Details_Id_ :=?)",[Sales_Return_Details_Id_],callback);
    },
Get_Sales_Return_Details:function(Sales_Return_Details_Id_,callback)
    { 
    return db.query("CALL Get_Sales_Return_Details(@Sales_Return_Details_Id_ :=?)",[Sales_Return_Details_Id_],callback);
    },
Search_Sales_Return_Details:function(Sales_Return_Details_Name_,callback)
    { 
    if (Sales_Return_Details_Name_==='undefined'||Sales_Return_Details_Name_===''||Sales_Return_Details_Name_===undefined )
    Sales_Return_Details_Name_='';
    return db.query("CALL Search_Sales_Return_Details(@Sales_Return_Details_Name_ :=?)",[Sales_Return_Details_Name_],callback);
    }
};
module.exports=Sales_Return_Details;

