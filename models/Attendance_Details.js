var db=require('../dbconnection');
var fs = require('fs');
var Attendance_Details=
{ 
Save_Attendance_Details:function(Attendance_Details_,callback)
        { 
        return db.query("CALL Save_Attendance_Details("+"@Attendance_Details_Id_ :=?,"+"@Attendance_Master_Id_ :=?,"+
        "@Employee_Id_ :=?,"+"@Attendance_Status_ :=?"+")"
        ,[Attendance_Details_.Attendance_Details_Id,Attendance_Details_.Attendance_Master_Id,
        Attendance_Details_.Employee_Id,Attendance_Details_.Attendance_Status],callback);
        },
Delete_Attendance_Details:function(Attendance_Details_Id_,callback)
        { 
        return db.query("CALL Delete_Attendance_Details(@Attendance_Details_Id_ :=?)",[Attendance_Details_Id_],callback);
        },
Get_Attendance_Details:function(Attendance_Details_Id_,callback)
        { 
        return db.query("CALL Get_Attendance_Details(@Attendance_Details_Id_ :=?)",[Attendance_Details_Id_],callback);
        },
Search_Attendance_Details:function(Attendance_Details_Name_,callback)
        { 
        if (Attendance_Details_Name_==='undefined'||Attendance_Details_Name_===''||Attendance_Details_Name_===undefined )
        Attendance_Details_Name_='';
        return db.query("CALL Search_Attendance_Details(@Attendance_Details_Name_ :=?)",[Attendance_Details_Name_],callback);
        }
};
module.exports=Attendance_Details;

