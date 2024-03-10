var db=require('../dbconnection');
var fs = require('fs');
var Stock_Add_Details=
{ 
Delete_Stock_Add_Details:function(Stock_Add_Details_Id_,callback)
    { 
    return db.query("CALL Delete_Stock_Add_Details(@Stock_Add_Details_Id_ :=?)",[Stock_Add_Details_Id_],callback);
    } ,
Get_Stock_Add_Details:function(Stock_Add_Master_Id_,callback)
    { 
    return db.query("CALL Get_Stock_Add_Details(@Stock_Add_Master_Id_ :=?)",[Stock_Add_Master_Id_],callback);
    } ,
Search_Stock_Add_Details:function(Stock_Add_Details_Name_,callback)
    { 
    if (Stock_Add_Details_Name_==='undefined'||Stock_Add_Details_Name_===''||Stock_Add_Details_Name_===undefined )
    Stock_Add_Details_Name_='';
    return db.query("CALL Search_Stock_Add_Details(@Stock_Add_Details_Name_ :=?)",[Stock_Add_Details_Name_],callback);
    }
};
module.exports=Stock_Add_Details;

