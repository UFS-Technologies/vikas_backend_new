var db=require('../dbconnection');
var fs = require('fs');
var Process_Details=
{ 
    Save_Process_Details:function(Process_Details_,callback)
    { 
        
        return db.query("CALL Save_Process_Details("+"@Process_Details_Id_ :=?,"+"@Process_Details_Name_ :=?,"+"@Status_ :=?,"+"@DeleteStatus_ :=?"+")" ,
        [Process_Details_.Process_Details_Id,Process_Details_.Process_Details_Name,Process_Details_.Status,Process_Details_.DeleteStatus],callback);
    } ,
    Search_Process_Details:function(Process_Details_Name_,callback)
    { 
    if (Process_Details_Name_==='undefined'||Process_Details_Name_===''||Process_Details_Name_===undefined )
    Process_Details_Name_='';
    return db.query("CALL Search_Process_Details(@Process_Details_Name_ :=?)",[Process_Details_Name_],callback);
    },
    Delete_Process_Details:function(Process_Details_Id_,callback)
    { 
        
    return db.query("CALL Delete_Process_Details(@Process_Details_Id_ :=?)",[Process_Details_Id_],callback);
    } ,



};
module.exports=Process_Details;

