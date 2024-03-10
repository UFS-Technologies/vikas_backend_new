var db=require('../dbconnection');
var fs = require('fs');
var Client_Accounts=
{ 
Save_Client_Accounts:function(Client_Accounts_,callback)
    { 
    return db.query("CALL Save_Client_Accounts("+"@Client_Accounts_Id_ :=?,"+"@Account_Group_Id_ :=?,"+"@Client_Accounts_Code_ :=?,"+"@Client_Accounts_Name_ :=?,"+"@User_Name_ :=?,"+"@Password_ :=?,"
    +"@Address1_ :=?,"+  "@Address2_ :=?,"+"@Address3_ :=?,"+"@Address4_ :=?,"+"@PinCode_ :=?,"+"@StateCode_ :=?,"+"@GSTNo_ :=?,"+"@PanNo_ :=?,"+"@State_ :=?,"+"@Country_ :=?,"+"@Phone_ :=?,"+"@Mobile_ :=?,"+
        "@Email_ :=?," + "@Opening_Balance_ :=?," + "@Description1_ :=?," + "@UserId_ :=?," + "@Opening_Type_ :=?," +"@Reference_Number :=?)"
    ,[Client_Accounts_.Client_Accounts_Id,Client_Accounts_.Account_Group_Id,Client_Accounts_.Client_Accounts_Code,Client_Accounts_.Client_Accounts_Name,Client_Accounts_.User_Name,Client_Accounts_.Password,Client_Accounts_.Address1,
    Client_Accounts_.Address2,Client_Accounts_.Address3,Client_Accounts_.Address4,Client_Accounts_.PinCode,Client_Accounts_.StateCode,Client_Accounts_.GSTNo,Client_Accounts_.PanNo,
    Client_Accounts_.State,Client_Accounts_.Country,Client_Accounts_.Phone,Client_Accounts_.Mobile,Client_Accounts_.Email,Client_Accounts_.Opening_Balance,Client_Accounts_.Description1,
        Client_Accounts_.UserId, Client_Accounts_.Opening_Type, Client_Accounts_.Reference_Number],callback);
    },
Delete_Client_Accounts:function(Client_Accounts_Id_,callback)
    { 
    return db.query("CALL Delete_Client_Accounts(@Client_Accounts_Id_ :=?)",[Client_Accounts_Id_],callback);
    },
Get_Client_Accounts:function(Client_Accounts_Id_,callback)
    { 
    return db.query("CALL Get_Client_Accounts(@Client_Accounts_Id_ :=?)",[Client_Accounts_Id_],callback);
    } ,
Search_Customer:function(Client_Accounts_Name_,Account_Group_,callback)
    { 
    if (Client_Accounts_Name_==='undefined'||Client_Accounts_Name_===""||Client_Accounts_Name_===undefined )
    Client_Accounts_Name_='';
    return db.query("CALL Search_Customer(@Client_Accounts_Name_ :=?,@Account_Group_ :=?)",[Client_Accounts_Name_,Account_Group_],callback);
    },
    Search_Employee_Typeahead:function(Client_Accounts_Name_,callback)
    { 
    if (Client_Accounts_Name_==='undefined'||Client_Accounts_Name_===''||Client_Accounts_Name_===undefined )
    Client_Accounts_Name_='';
        return db.query("CALL Search_Employee_Typeahead(@Client_Accounts_Name_ :=?)",[Client_Accounts_Name_],callback);
    },
Search_Client_Accounts:function(Client_Accounts_Name_,Account_Group_,callback)
    { 
    if (Client_Accounts_Name_==='undefined'||Client_Accounts_Name_===""||Client_Accounts_Name_===undefined )
    Client_Accounts_Name_='';
    return db.query("CALL Search_Client_Accounts(@Client_Accounts_Name_ :=?,@Account_Group_ :=?)",[Client_Accounts_Name_,Account_Group_],callback);
    },
Accounts_Typeahead:function(Account_Group_Id_,Client_Accounts_Name_,callback)
    { 
    if (Client_Accounts_Name_==='undefined'||Client_Accounts_Name_===''||Client_Accounts_Name_===undefined )
    Client_Accounts_Name_='';
    return db.query("CALL Accounts_Typeahead(@Account_Group_Id_ :=?,@Client_Accounts_Name_ :=?)",[Account_Group_Id_,Client_Accounts_Name_],callback);
    },
From_Stock_Typeahead:function(Client_Accounts_Name_,callback)
    { 
    if (Client_Accounts_Name_==='undefined'||Client_Accounts_Name_===''||Client_Accounts_Name_===undefined )
    Client_Accounts_Name_='';
    return db.query("CALL From_Stock_Typeahead(@Client_Accounts_Name_ :=?)",[Client_Accounts_Name_],callback);
    },
Client_Employee_Typeahead:function(Client_Accounts_Id_,callback)
    { 
    return db.query("CALL Client_Employee_Typeahead(@Client_Accounts_Id_ :=?)",[Client_Accounts_Id_],callback);
    } ,
};
module.exports=Client_Accounts;

