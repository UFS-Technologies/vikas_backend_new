var db=require('../dbconnection');
var fs = require('fs');
var Press_Details=
{ 
    Save_Press_Details:function(Press_Details_,callback)
    { 
       
        return db.query("CALL Save_Press_Details("+"@Press_Details_Id_ :=?,"+"@Press_Details_Name_ :=?,"+"@Status_ :=?,"+"@DeleteStatus_ :=?"+")" ,
        [Press_Details_.Press_Details_Id,Press_Details_.Press_Details_Name,Press_Details_.Status,Press_Details_.DeleteStatus],callback);
    } ,
    Search_Press_Details:function(Press_Details_Name_,callback)
    { 
    if (Press_Details_Name_==='undefined'||Press_Details_Name_===''||Press_Details_Name_===undefined )
    Press_Details_Name_='';
    return db.query("CALL Search_Press_Details(@Press_Details_Name_ :=?)",[Press_Details_Name_],callback);
    },
    Delete_Press_Details:function(Press_Details_Id_,callback)
    { 
    return db.query("CALL Delete_Press_Details(@Press_Details_Id_ :=?)",[Press_Details_Id_],callback);
    } ,

};
module.exports=Press_Details;

