var db=require('../dbconnection');
var fs = require('fs');
var Salary_Calculation_Details=
{ 
Save_Salary_Calculation_Details:function(Salary_Calculation_Details_,callback)
    { 
    return db.query("CALL Save_Salary_Calculation_Details("+"@Salary_Calculation_Details_Id_ :=?,"+
    "@Salary_Calculation_Master_Id_ :=?,"+"@Employee_Id_ :=?,"+"@Basic_Pay_ :=?,"+"@HRA_ :=?,"+
    "@Deduction_ :=?,"+"@Incentives_ :=?,"+"@Alowance_ :=?,"+"@AdditionalAmount_ :=?,"+
    "@TotalAmount_ :=?"+")"
    ,[Salary_Calculation_Details_.Salary_Calculation_Details_Id,
    Salary_Calculation_Details_.Salary_Calculation_Master_Id,Salary_Calculation_Details_.Employee_Id,
    Salary_Calculation_Details_.Basic_Pay,Salary_Calculation_Details_.HRA,Salary_Calculation_Details_.Deduction,
    Salary_Calculation_Details_.Incentives,Salary_Calculation_Details_.Alowance,
    Salary_Calculation_Details_.AdditionalAmount,Salary_Calculation_Details_.TotalAmount],callback);
    } ,
Delete_Salary_Calculation_Details:function(Salary_Calculation_Details_Id_,callback)
    { 
    return db.query("CALL Delete_Salary_Calculation_Details(@Salary_Calculation_Details_Id_ :=?)",[Salary_Calculation_Details_Id_],callback);
    } ,
Get_Salary_Calculation_Details:function(Salary_Calculation_Details_Id_,callback)
    { 
    return db.query("CALL Get_Salary_Calculation_Details(@Salary_Calculation_Details_Id_ :=?)",[Salary_Calculation_Details_Id_],callback);
    } ,
Search_Salary_Calculation_Details:function(Salary_Calculation_Details_Name_,callback)
    { 
    if (Salary_Calculation_Details_Name_==='undefined'||Salary_Calculation_Details_Name_===''||Salary_Calculation_Details_Name_===undefined )
    Salary_Calculation_Details_Name_='';
    return db.query("CALL Search_Salary_Calculation_Details(@Salary_Calculation_Details_Name_ :=?)",[Salary_Calculation_Details_Name_],callback);
    }
};
module.exports=Salary_Calculation_Details;

