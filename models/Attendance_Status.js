var db=require('../dbconnection');
var fs = require('fs');
var Attendance_Status=
{ 
Save_Attendance_Status:function(Attendance_Status_,callback)
    { 
    return db.query("CALL Save_Attendance_Status("+"@Attendance_Status_Id_ :=?,"+"@Attendance_Status_Name_ :=?"+")"
    ,[Attendance_Status_.Attendance_Status_Id,Attendance_Status_.Attendance_Status_Name],callback);
    },
Delete_Attendance_Status:function(Attendance_Status_Id_,callback)
    { 
    return db.query("CALL Delete_Attendance_Status(@Attendance_Status_Id_ :=?)",[Attendance_Status_Id_],callback);
    },
Get_Attendance_Status:function(Attendance_Status_Id_,callback)
    { 
    return db.query("CALL Get_Attendance_Status(@Attendance_Status_Id_ :=?)",[Attendance_Status_Id_],callback);
    },
Search_Attendance_Status:function(Attendance_Status_Name_,callback)
    { 
    if (Attendance_Status_Name_==='undefined'||Attendance_Status_Name_===''||Attendance_Status_Name_===undefined )
    Attendance_Status_Name_='';
    return db.query("CALL Search_Attendance_Status(@Attendance_Status_Name_ :=?)",[Attendance_Status_Name_],callback);
    }
};
module.exports=Attendance_Status;

