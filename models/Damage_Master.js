var db=require('../dbconnection');
var fs = require('fs');
var Damage_Master=
{ 
Save_Damage_Master:function(Damage_Master_,callback)
    { 
    return db.query("CALL Save_Damage_Master("+"@Damage_Master_Id_ :=?,"+"@Entry_Date_ :=?,"+
    "@Description1_ :=?,"+"@User_Id_ :=?"+")"
    ,[Damage_Master_.Damage_Master_Id,Damage_Master_.Entry_Date,Damage_Master_.Description1,
    Damage_Master_.User_Id],callback);
    },
Delete_Damage_Master:function(Damage_Master_Id_,callback)
    { 
    return db.query("CALL Delete_Damage_Master(@Damage_Master_Id_ :=?)",[Damage_Master_Id_],callback);
    },
Get_Damage_Master:function(Damage_Master_Id_,callback)
    { 
    return db.query("CALL Get_Damage_Master(@Damage_Master_Id_ :=?)",[Damage_Master_Id_],callback);
    },
Search_Damage_Master:function(Damage_Master_Name_,callback)
    { 
    if (Damage_Master_Name_==='undefined'||Damage_Master_Name_===''||Damage_Master_Name_===undefined )
    Damage_Master_Name_='';
    return db.query("CALL Search_Damage_Master(@Damage_Master_Name_ :=?)",[Damage_Master_Name_],callback);
    }
};
module.exports=Damage_Master;

