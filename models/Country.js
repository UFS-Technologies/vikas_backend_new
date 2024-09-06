var db=require('../dbconnection');
var fs = require('fs');
var Country=
{ 
Save_Country:function(Country_,callback)
    { 
        
        return db.query("CALL Save_Country("+"@Country_Id_ :=?,"+"@Country_CODE_ :=?,"+"@CGST_ :=?,"+"@SGST_ :=?,"+
        "@IGST_ :=?,"+"@GST_ :=?,"+"@Is_Check_ :=?"+")" ,
        [Country_.Country_Id,Country_.Country_CODE,Country_.CGST,Country_.SGST,Country_.IGST,Country_.GST,Country_.Is_Check,],callback);
    } ,
Delete_Country:function(Country_Id_,callback)
    { 
    return db.query("CALL Delete_Country(@Country_Id_ :=?)",[Country_Id_],callback);
    } ,
Get_Country:function(Country_Id_,callback)
    { 
    return db.query("CALL Get_Country(@Country_Id_ :=?)",[Country_Id_],callback);
    } ,
Search_Country:function(Country_CODE_,callback)
    { 
    if (Country_CODE_==='undefined'||Country_CODE_===''||Country_CODE_===undefined )
    Country_CODE_='';
    return db.query("CALL Search_Country(@Country_CODE_ :=?)",[Country_CODE_],callback);
    }
};
module.exports=Country;

