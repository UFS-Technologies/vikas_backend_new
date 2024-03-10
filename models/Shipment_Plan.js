var db=require('../dbconnection');
var fs = require('fs');
var Shipment_Plan=
{ 

    Save_Shipment_Plan:function(Shipment_Plan_,callback)
    { 
  
        return db.query("CALL Save_Shipment_Plan("+"@Shipment_Plan_Id_ :=?,"+"@Shipment_Plan_Name_ :=?,"+"@Status_ :=?,"+"@DeleteStatus_ :=?"+")" ,
        [Shipment_Plan_.Shipment_Plan_Id,Shipment_Plan_.Shipment_Plan_Name,Shipment_Plan_.Status,Shipment_Plan_.DeleteStatus],callback);
    } , 

    Search_Shipment_Plan:function(Shipment_Plan_Name_,callback)
    { 
       
    if (Shipment_Plan_Name_==='undefined'||Shipment_Plan_Name_===''||Shipment_Plan_Name_===undefined )
    Shipment_Plan_Name_='';
    return db.query("CALL Search_Shipment_Plan(@Shipment_Plan_Name_ :=?)",[Shipment_Plan_Name_],callback);
    },

    Delete_Shipment_Plan:function(Shipment_Plan_Id_,callback)
    { 
    return db.query("CALL Delete_Shipment_Plan(@Shipment_Plan_Id_ :=?)",[Shipment_Plan_Id_],callback);
    } ,


    
    Save_Warehouse:function(WareHouse_,callback)
    { 
  
        return db.query("CALL Save_Warehouse("+"@WareHouse_Id_ :=?,"+"@WareHouse_Name_ :=?,"+"@Status_ :=?,"+"@DeleteStatus_ :=?"+")" ,
        [WareHouse_.WareHouse_Id,WareHouse_.WareHouse_Name,WareHouse_.Status,WareHouse_.DeleteStatus],callback);
    } , 


    
    Search_Warehouse:function(WareHouse_Name_,callback)
    { 
       
    if (WareHouse_Name_==='undefined'||WareHouse_Name_===''||WareHouse_Name_===undefined )
    WareHouse_Name_='';
    
    return db.query("CALL Search_Warehouse(@WareHouse_Name_ :=?)",[WareHouse_Name_],callback);
    },
    Load_Shipment_Plan:function(callback)
    {
    return db.query("CALL Load_Shipment_Plan()",[],callback);
    } ,
    Delete_Warehouse:function(WareHouse_Id_,callback)
    { 
    return db.query("CALL Delete_Warehouse(@WareHouse_Id_ :=?)",[WareHouse_Id_],callback);
    } ,    

    Load_Warehouse:function(callback)
    {
    return db.query("CALL Load_Warehouse()",[],callback);
    } ,

};
module.exports=Shipment_Plan;

