var db=require('../dbconnection');
var fs = require('fs');
var Damaged_Item=
{ 
Save_Damaged_Item:function(Damaged_Item_,callback)
    { 
    return db.query("CALL Save_Damaged_Item("+"@Damaged_Item_Id_ :=?,"+"@Item_Id_ :=?,"+"@Product_Code_ :=?,"+"@Qty_ :=?,"+"@Rate_ :=? )"
    ,[Damaged_Item_.Damaged_Item_Id,Damaged_Item_.Item_Id,Damaged_Item_.Product_Code,Damaged_Item_.Qty,Damaged_Item_.Rate ],callback);
    },
Delete_Damaged_Item:function(Damaged_Item_Id_,callback)
    { 
    return db.query("CALL Delete_Damaged_Item(@Damaged_Item_Id_ :=?)",[Damaged_Item_Id_],callback);
    },
// Get_Client_Accounts:function(Client_Accounts_Id_,callback)
//     { 
//     return db.query("CALL Get_Client_Accounts(@Client_Accounts_Id_ :=?)",[Client_Accounts_Id_],callback);
//     } ,
// Search_Customer:function(Client_Accounts_Name_,Account_Group_,callback)
//     { 
//     if (Client_Accounts_Name_==='undefined'||Client_Accounts_Name_===""||Client_Accounts_Name_===undefined )
//     Client_Accounts_Name_='';
//     return db.query("CALL Search_Customer(@Client_Accounts_Name_ :=?,@Account_Group_ :=?)",[Client_Accounts_Name_,Account_Group_],callback);
//     },
//     Search_Employee_Typeahead:function(Client_Accounts_Name_,callback)
//     { 
//     if (Client_Accounts_Name_==='undefined'||Client_Accounts_Name_===''||Client_Accounts_Name_===undefined )
//     Client_Accounts_Name_='';
//         return db.query("CALL Search_Employee_Typeahead(@Client_Accounts_Name_ :=?)",[Client_Accounts_Name_],callback);
//     },
Search_Damaged_Item:function(Item_S_, callback)
    { 
        console.log("Item number",Item_S_);
    // if (Client_Accounts_Name_==='undefined'||Client_Accounts_Name_===""||Client_Accounts_Name_===undefined )
    // Client_Accounts_Name_='';
    return db.query("CALL Search_Damaged_Item(@Item_S_ :=? )",[Item_S_ ],callback);
    },
// Accounts_Typeahead:function(Account_Group_Id_,Client_Accounts_Name_,callback)
//     { 
//     if (Client_Accounts_Name_==='undefined'||Client_Accounts_Name_===''||Client_Accounts_Name_===undefined )
//     Client_Accounts_Name_='';
//     return db.query("CALL Accounts_Typeahead(@Account_Group_Id_ :=?,@Client_Accounts_Name_ :=?)",[Account_Group_Id_,Client_Accounts_Name_],callback);
//     },
// From_Stock_Typeahead:function(Client_Accounts_Name_,callback)
//     { 
//     if (Client_Accounts_Name_==='undefined'||Client_Accounts_Name_===''||Client_Accounts_Name_===undefined )
//     Client_Accounts_Name_='';
//     return db.query("CALL From_Stock_Typeahead(@Client_Accounts_Name_ :=?)",[Client_Accounts_Name_],callback);
//     },
// Client_Employee_Typeahead:function(Client_Accounts_Id_,callback)
//     { 
//     return db.query("CALL Client_Employee_Typeahead(@Client_Accounts_Id_ :=?)",[Client_Accounts_Id_],callback);
//     } ,
};
module.exports=Damaged_Item;

