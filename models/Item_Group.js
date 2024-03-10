var db=require('../dbconnection');
var fs = require('fs');
var Item_Group=
{ 
Save_Item_Group:function(Item_Group_,callback)
    { 
    return db.query("CALL Save_Item_Group("+"@Item_Group_Id_ :=?,"+"@Item_Group_Code_ :=?,"+
    "@Item_Group_Name_ :=?,"+"@UnderGroupId_ :=?"+")"
    ,[Item_Group_.Item_Group_Id,Item_Group_.Item_Group_Code,Item_Group_.Item_Group_Name,
    Item_Group_.UnderGroupId],callback);
    },
Delete_Item_Group:function(Item_Group_Id_,callback)
    { 
     
    return db.query("CALL Delete_Item_Group(@Item_Group_Id_ :=?)",[Item_Group_Id_],callback);
    },
Get_Item_Group:function(Item_Group_Id_,callback)
    { 
            
    return db.query("CALL Get_Item_Group(@Item_Group_Id_ :=?)",[Item_Group_Id_],callback);
    },
Search_Item_Group:function(Item_Group_Name_,callback)
    { 
    if (Item_Group_Name_==='undefined'||Item_Group_Name_===''||Item_Group_Name_===undefined )
    Item_Group_Name_='';
    return db.query("CALL Search_Item_Group(@Item_Group_Name_ :=?)",[Item_Group_Name_],callback);
    },
ItemGroup_Typehead:function(Item_Group_Name_,callback)
    { 
    if (Item_Group_Name_==='undefined'||Item_Group_Name_===''||Item_Group_Name_===undefined )
    Item_Group_Name_='';
    return db.query("CALL ItemGroup_Typehead(@Item_Group_Name_ :=?)",[Item_Group_Name_],callback);
    },
Load_Item_Group:function(callback)
    {  
    return db.query("CALL Load_Item_Group()",[],callback);
    },
};
module.exports=Item_Group;