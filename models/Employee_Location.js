 var db=require('../dbconnection');
 var fs = require('fs');
 var Employee_Location=
 { 
 Save_Employee_Location:function(Employee_Location_,callback)
 { 
return db.query("CALL Save_Employee_Location("+
"@Employee_Location_Id_ :=?,"+
"@Location_Id_ :=?,"+
"@Employee_Details_Id_ :=?,"+
"@Location_Map_ :=?"+")"
 ,[Employee_Location_.Employee_Location_Id,
Employee_Location_.Location_Id,
Employee_Location_.Employee_Details_Id,
Employee_Location_.Location_Map
],callback);
 }
 ,
 Delete_Employee_Location:function(Employee_Location_Id_,callback)
 { 
return db.query("CALL Delete_Employee_Location(@Employee_Location_Id_ :=?)",[Employee_Location_Id_],callback);
 }
 ,
 Get_Employee_Location:function(Client_Accounts_Id_,callback)
 { 
return db.query("CALL Get_Employee_Location(@Client_Accounts_Id_ :=?)",[Client_Accounts_Id_],callback);
 }
 ,
 Search_Employee_Location:function(Employee_Location_Name_,callback)
 { 
 if (Employee_Location_Name_==='undefined'||Employee_Location_Name_===''||Employee_Location_Name_===undefined)
Employee_Location_Name_='';
return db.query("CALL Search_Employee_Location(@Employee_Location_Name_ :=?)",[Employee_Location_Name_],callback);
 }
  };
  module.exports=Employee_Location;

