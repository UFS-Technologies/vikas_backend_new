var db=require('../dbconnection');
var fs = require('fs');
const storedProcedure=require('../helpers/stored-procedure');
var Purchase_Return_Master=
{ 
    Save_Purchase_Return_Master: async function (Purchase_Return_Master_) {
     
         return new Promise(async (rs,rej)=>{
           const pool = db.promise();
           let result1;
           var connection = await pool.getConnection();
    try {
      const result1 = await (new storedProcedure('Save_Purchase_Return_Master',[Purchase_Return_Master_.Purchase_Return_Master_Id, Purchase_Return_Master_.Client_Accounts_Id,
    Purchase_Return_Master_.User_Id,Purchase_Return_Master_.Purchase_Type_Id,Purchase_Return_Master_.Purchase_Date,Purchase_Return_Master_.Entry_Date,
    Purchase_Return_Master_.Invoice_No,Purchase_Return_Master_.Gross_Total,Purchase_Return_Master_.Total_Discount,Purchase_Return_Master_.Net_Total,
    Purchase_Return_Master_.Total_CGST,Purchase_Return_Master_.Total_SGST,Purchase_Return_Master_.Total_IGST,Purchase_Return_Master_.Total_GST,
    Purchase_Return_Master_.Total_Amount,Purchase_Return_Master_.Round_off,Purchase_Return_Master_.Discount,Purchase_Return_Master_.Grand_Total,
    Purchase_Return_Master_.Description, Purchase_Return_Master_.Bill_Type, Purchase_Return_Master_.Company_Id,Purchase_Return_Master_.Purchase_Return_Details], connection)).result();
      
    await connection.commit();
    connection.release();
    rs( result1);
    }
    catch (err) 
    {               
                                                          
    await connection.rollback();
    rej(err);
    var result2=[{'Purchase_Return_Master_Id_':0}]      
    rs(result2);
    }
    finally 
    {
    connection.release();
    }
    })
},


Search_Purchase_Return_Master:function(Is_Date_Check_,From_Date_,To_Date_,Account_Party_Id_,Invoice_No_,callback)
    { 
    return db.query("CALL Search_Purchase_Return_Master(@Is_Date_Check_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Account_Party_Id_ :=?,@Invoice_No_ :=?)",
    [Is_Date_Check_,From_Date_,To_Date_,Account_Party_Id_,Invoice_No_],callback);
    },

    Get_Purchase_Return_Details:function(Purchase_Return_Master_Id_,callback)
    { 
    return db.query("CALL Get_Purchase_Return_Details(@Purchase_Return_Master_Id_ :=?)",[Purchase_Return_Master_Id_],callback);
    } ,

    Delete_Purchase_Return_Master:function(Purchase_Return_Master_Id_,Company_Id_,callback)
    { 
    return db.query("CALL Delete_Purchase_Return_Master(@Purchase_Return_Master_Id_ :=?,@Company_Id_:=?)",[Purchase_Return_Master_Id_,Company_Id_],callback);
    } ,


};
module.exports=Purchase_Return_Master;