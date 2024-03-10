 var db=require('../dbconnection');
 var fs = require('fs');
 var Stock_Transfer_Details=
{ 
Delete_Stock_Transfer_Details:function(Stock_Transfer_Details_Id_,callback)
    { 
    return db.query("CALL Delete_Stock_Transfer_Details(@Stock_Transfer_Details_Id_ :=?)",[Stock_Transfer_Details_Id_],callback);
    } ,
Get_Stock_Transfer_Details:function(Stock_Transfer_Master_Id_,callback)
    { 
    return db.query("CALL Get_Stock_Transfer_Details(@Stock_Transfer_Master_Id_ :=?)",[Stock_Transfer_Master_Id_],callback);
    } ,
Search_Stock_Transfer_Details:function(Stock_Transfer_Details_Name_,callback)
    { 
    if (Stock_Transfer_Details_Name_==='undefined'||Stock_Transfer_Details_Name_===''||Stock_Transfer_Details_Name_===undefined )
    Stock_Transfer_Details_Name_='';
    return db.query("CALL Search_Stock_Transfer_Details(@Stock_Transfer_Details_Name_ :=?)",[Stock_Transfer_Details_Name_],callback);
    }
  };
  module.exports=Stock_Transfer_Details;

