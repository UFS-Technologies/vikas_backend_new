var db=require('../dbconnection');
var fs = require('fs');
var Shipment_Method=
{ 
    Save_Shipment_Method:function(Shift_Method_,callback)
    { 
       
        return db.query("CALL Save_Shipment_Method("+"@Shipment_Method_Id_ :=?,"+"@Shipment_Method_Name_ :=?,"+"@Status_ :=?,"+"@DeleteStatus_ :=?"+")" ,
        [Shift_Method_.Shipment_Method_Id,Shift_Method_.Shipment_Method_Name,Shift_Method_.Status,Shift_Method_.DeleteStatus],callback);
    } ,
    Search_Shipment_Method:function(Shipment_Method_Name_,callback)
    { 
    if (Shipment_Method_Name_==='undefined'||Shipment_Method_Name_===''||Shipment_Method_Name_===undefined )
    Shipment_Method_Name_='';
    return db.query("CALL Search_Shipment_Method(@Shipment_Method_Name_ :=?)",[Shipment_Method_Name_],callback);
    },
    Delete_Shipment_Method:function(Shipment_Method_Id_,callback)
    { 
    return db.query("CALL Delete_Shipment_Method(@Shipment_Method_Id_ :=?)",[Shipment_Method_Id_],callback);
    } ,
    Load_Shipment_Method:function(callback)
    {
    return db.query("CALL Load_Shipment_Method()",[],callback);
    } ,
};
module.exports=Shipment_Method;

