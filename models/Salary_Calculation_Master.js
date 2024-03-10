var db=require('../dbconnection');
var fs = require('fs');
const storedProcedure = require('../helpers/stored-procedure');
var Salary_Calculation_Master=
{ 
    Save_Salary_Calculation_Master: async function (Salary_Calculation_Master_) {
    return new Promise(async (rs, rej) => {
    const pool = db.promise();
    let result1;
    var connection = await pool.getConnection();
    try {
        const result1 = await (new storedProcedure('Save_Salary_Calculation_Master',[Salary_Calculation_Master_.Salary_Calculation_Master_Id,
        Salary_Calculation_Master_.Entry_Date,Salary_Calculation_Master_.From_Date,Salary_Calculation_Master_.To_Date,Salary_Calculation_Master_.User_Id,
        Salary_Calculation_Master_.Total,Salary_Calculation_Master_.Salary_Calculation_Details], connection)).result();
        await connection.commit();
        connection.release();        
        rs(result1);
    }
    catch (err) {
        await connection.rollback();
        rej(err);
        var result2 = [{ 'Salary_Calculation_Master_Id_': 0 }]
        rs(result2);
    }
    finally {
        connection.release();
    }
})
},
Delete_Salary_Calculation_Master:function(Salary_Calculation_Master_Id_,callback)
    { 
    return db.query("CALL Delete_Salary_Calculation_Master(@Salary_Calculation_Master_Id_ :=?)",[Salary_Calculation_Master_Id_],callback);
    } ,
Get_Salary_Calculation_Master:function(Salary_Calculation_Master_Id_,callback)
    { 
    return db.query("CALL Get_Salary_Calculation_Master(@Salary_Calculation_Master_Id_ :=?)",[Salary_Calculation_Master_Id_],callback);
    } ,
Search_Salary_Calculation_Master: function (Is_Date_Check_,FromDate_,ToDate_,callback)
    { 
        return db.query("CALL Search_Salary_Calculation_Master(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?)",[Is_Date_Check_,FromDate_,ToDate_],callback);
    },
    Search_Salary_Calculation_Report: function (Is_Date_Check_,FromDate_,ToDate_,Calculation_No,callback)
    {
        if (Calculation_No === 'undefined' || Calculation_No === '' || Calculation_No === undefined)
            Calculation_No = 0;
        return db.query("CALL Search_Salary_Calculation_Report(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Calculation_No :=?)",
            [Is_Date_Check_, FromDate_, ToDate_,Calculation_No],callback);
    },
Get_Process_Employee_ForSalaryCalculation:function(FromDate_,ToDate_,callback)
    { 
    return db.query("CALL Get_Process_Employee_ForSalaryCalculation(@FromDate_ :=?,@ToDate_ :=?)",
        [FromDate_, ToDate_],callback);
    },
};
module.exports=Salary_Calculation_Master;