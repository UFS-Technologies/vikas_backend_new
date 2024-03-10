var db=require('../dbconnection');
var fs = require('fs');
var Gate_Pass_Type=
{ 
    Save_Gate_Pass_Type:function(Gate_Pass_Type_,callback)
    { 
        
        return db.query("CALL Save_Gate_Pass_Type("+"@GatePassType_Id_ :=?,"+"@GatePassType_Name_ :=?"+")" ,
        [Gate_Pass_Type_.GatePassType_Id,Gate_Pass_Type_.GatePassType_Name],callback);
    } ,
    Search_Gate_Pass_Type:function(GatePassType_Name_,callback)
    { 
    if (GatePassType_Name_==='undefined'||GatePassType_Name_===''||GatePassType_Name_===undefined )
    GatePassType_Name_='';
    return db.query("CALL Search_Gate_Pass_Type(@GatePassType_Name_ :=?)",[GatePassType_Name_],callback);
    },
    Delete_Gate_Pass_Type:function(GatePassType_Id_,callback)
    { 
        
    return db.query("CALL Delete_Gate_Pass_Type(@GatePassType_Id_ :=?)",[GatePassType_Id_],callback);
    } ,
    Get_Gate_Pass_Type:function(GatePassType_Id_,callback)
    { 
    return db.query("CALL Get_Gate_Pass_Type(@GatePassType_Id_ :=?)",[GatePassType_Id_],callback);
    } ,


};
module.exports=Gate_Pass_Type;

