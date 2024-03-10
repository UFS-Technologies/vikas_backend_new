var db=require('../dbconnection');
var fs = require('fs');
var request = require('request');
const fetch = require("node-fetch");
const storedProcedure=require('../helpers/stored-procedure');
var Sales_Master=
{ 
    Save_Sales_Master: async function (Sales_Master_) {
        console.log(Sales_Master_)
        return new Promise(async (rs,rej)=>{
        const pool = db.promise();
        let result1;
        var connection = await pool.getConnection();
        try 
        {
        const result1 = await(new storedProcedure('Save_Sales_Master',[Sales_Master_.Sales_Master_Id,Sales_Master_.Purchase_Order_Master_Id,
        Sales_Master_.Proforma_Invoice_Master_Id,Sales_Master_.Account_Party_Id,Sales_Master_.Company_Id,Sales_Master_.Entry_Date,Sales_Master_.Invoice_No,
        Sales_Master_.BillType,Sales_Master_.User_Id,Sales_Master_.GrossTotal,Sales_Master_.TotalDiscount,Sales_Master_.NetTotal,Sales_Master_.TotalCGST,
        Sales_Master_.ToalSGST,Sales_Master_.TotalIGST,Sales_Master_.TotalGST,Sales_Master_.TotalAmount,Sales_Master_.RoundOff,Sales_Master_.Discount,
        Sales_Master_.GrandTotal,Sales_Master_.Description1,Sales_Master_.Cess,Sales_Master_.Currency,Sales_Master_.Pallet_Weight,Sales_Master_.Total_Weight,
        Sales_Master_.Net_Weight, Sales_Master_.TypeofContainer,Sales_Master_.ContainerNo,Sales_Master_.Typeofpackage,Sales_Master_.Exporterref,
        Sales_Master_.Otherref,Sales_Master_.Precarriage,Sales_Master_.Vessalno,Sales_Master_.Contryoforgin,Sales_Master_.Contrydestination,
        Sales_Master_.PlaceofReceipt,Sales_Master_.Portofloading,Sales_Master_.Portofdischarge, Sales_Master_.Finaldestination, Sales_Master_.Termsofdelivery, 
        Sales_Master_.Bank_Id, Sales_Master_.Currency_Rate, Sales_Master_.Product_Description, Sales_Master_.Total_Packing_packages, Sales_Master_.Total_Packing,
        Sales_Master_.Packing_NetWeight, Sales_Master_.Packing_GrossWeight, Sales_Master_.PO_Date, Sales_Master_.PONo, 
        Sales_Master_.Pack_Length,Sales_Master_.Packing_Length,
        Sales_Master_.Sales_Details, Sales_Master_.Sales_Pack_List, Sales_Master_.Sales_Packing_List,Sales_Master_.Sales_Type], connection)).result();
            await connection.commit();
            connection.release();
            rs( result1);
            }
        catch (err) {
        await connection.rollback();
        rej(err);
        var result2=[{'Sales_Master_Id_':0}]      
        rs(result2);
        }
        finally 
        {
        connection.release();
        }
        })
        },
    Save_Shipping_List:function(Docs_Data,callback)
    {
        console.log(Docs_Data);
        var Document_value_ = 0; 
        let Docs_ = Docs_Data.Docs_D;
        console.log(Docs_.Sales_Master_Id)
   
        if (Docs_ != undefined && Docs_ != '' && Docs_ != null)
           Document_value_ = 1;  
           console.log(Docs_);
        return db.query("CALL Save_Shipping_List(" + "@Docs_:=?," + "@Document_value_ :=? )"
     , [Docs_, Document_value_],callback);
        // return db.query("CALL Save_Shipping_List(" + "@Sales_Master_Id_ :=?," + "@BI_No_ :=?," + "@ETA_ :=?," + "@Status_ :=?," +"@Tracking_Id_ :=?"+")" ,
        //     [Sales_Master_.Sales_Master_Id, Sales_Master_.BI_No, Sales_Master_.ETA, Sales_Master_.Status, Sales_Master_.Tracking_Id],callback);
    } ,
Delete_Sales_Master:function(Sales_Master_Id_,Company_Id_,callback)
    { 
    return db.query("CALL Delete_Sales_Master(@Sales_Master_Id_ :=?,@Company_Id_:=?)",[Sales_Master_Id_,Company_Id_],callback);
    },
    Get_Sales_From_Porforma:function(Sales_Master_Id_,callback)
    { 
    return db.query("CALL Get_Sales_From_Porforma(@Sales_Master_Id_ :=?)",[Sales_Master_Id_],callback);
    },
    Get_Sales_Details_forprint:function(Sales_Master_Id_,callback)
    { 
    return db.query("CALL Get_Sales_Details_forprint(@Sales_Master_Id_ :=?)",[Sales_Master_Id_],callback);
    },
    Get_Store_Details:function(Store_Id_,callback)
    { 
    return db.query("CALL Get_Store_Details(@Store_Id_ :=?)",[Store_Id_],callback);
    },
Delete_Sales_Master_Mobile:function(Sales_Master_Id_,callback)
    { 
    return db.query("CALL Delete_Sales_Master_Mobile(@Sales_Master_Id_ :=?)",[Sales_Master_Id_],callback);
    },
Get_Sales_Master:function(Sales_Master_Id_,callback)
    { 
    return db.query("CALL Get_Sales_Master(@Sales_Master_Id_ :=?)",[Sales_Master_Id_],callback);
    } ,
Load_Container:function(callback)
    { 
    return db.query("CALL Load_Container()",[],callback);
    } ,
    Load_Category:function(callback)
    { 
    return db.query("CALL Load_Category()",[],callback);
    } ,

Get_Sales_Master_Mobile:function(Sales_Master_Id_,callback)
    { 
    return db.query("CALL Get_Sales_Master(@Sales_Master_Id_ :=?)",[Sales_Master_Id_],callback);
    } ,
Get_Receipt_Voucher_Mobile:function(Sales_Master_Id_,callback)
    { 
    return db.query("CALL Get_Receipt_Voucher_Mobile(@Sales_Master_Id_ :=?)",[Sales_Master_Id_],callback);
    } ,
    Change_Bill_Status:function(Sales_Master_Id_,BillType_,callback)
    { 
    return db.query("CALL Change_Bill_Status(@Sales_Master_Id_ :=?,@BillType_ :=?)",[Sales_Master_Id_,BillType_],callback);
    } ,
Search_Key_Value:function(Key_Value_Name_,callback)
    { 
    return db.query("CALL Search_Key_Value(@Key_Value_Name_ :=?)",[Key_Value_Name_],callback);
    } ,
Search_Sales_Master_Mobile:function(Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,Invoice_No_,Employee_Id_,callback)
    { 
    return db.query("CALL Search_Sales_Master_Mobile(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@Invoice_No_ :=?,@Employee_Id_ :=?)",
    [Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,Invoice_No_,Employee_Id_],callback);
    },
 Search_Sales_Master:function(Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,Invoice_No_,Bill_Type_Id,Sales_Type,callback)
    { 
    return db.query("CALL Search_Sales_Master(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@Invoice_No_ :=?,@Bill_Type_Id :=?,@Sales_Type :=?)",
    [Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,Invoice_No_,Bill_Type_Id,Sales_Type],callback);
    },

 Search_Invoice_Report:function(Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,Invoice_No_,PONo_,callback)
    { 
     return db.query("CALL Search_Invoice_Report(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@Invoice_No_ :=?,@PONo_ :=?)",
         [Is_Date_Check_, FromDate_, ToDate_, Account_Party_Id_, Invoice_No_, PONo_],callback);
    },
    Load_Bill_Type:function(Bill_Status_,callback)
    {   
    return db.query("CALL Load_Bill_Type(@Bill_Status_ :=?)",[Bill_Status_],callback);
    },   

    Selected_Delete:function(Sales_Master_Id_,callback)
    { 
    return db.query("CALL Selected_Delete(@Sales_Master_Id_:=?)",[Sales_Master_Id_],callback);
    } ,
Load_Cess:function(callback)
    { 
    return db.query("CALL Load_Cess()",[],callback);
    } ,

    Load_Bill_Mode:function(callback)
    { 
    return db.query("CALL Load_Bill_Mode()",[],callback);
    } ,
    Load_Company:function(callback)
    { 
    return db.query("CALL Load_Company()",[],callback);
    } ,


    // Search_Item_Count_Report:function(callback)
    // { 
    // return db.query("CALL Search_Item_Count_Report()",[],callback);
    // } ,

    Search_Item_Count_Report:function(ItemId,Product_Code,callback)
    { 
        return db.query("CALL Search_Item_Count_Report(@ItemId :=?,@Product_Code :=?)",
    [ItemId,Product_Code],callback);
    }, 


    Search_Damage:function(callback)
    { 
    return db.query("CALL Search_Damage()",[],callback);
    } ,

    Load_payment_Status:function(callback)
    { 
    return db.query("CALL Load_payment_Status()",[],callback);
    } ,

 Search_Customer_Typeahead:function(Account_Group_Id_,Client_Accounts_Name_,callback)
 {
    if (Client_Accounts_Name_==='undefined'||Client_Accounts_Name_===''||Client_Accounts_Name_===undefined )
    Client_Accounts_Name_='';
    return db.query("CALL Search_Customer_Typeahead(@Account_Group_Id_ :=?,@Client_Accounts_Name_ :=?)",[Account_Group_Id_,Client_Accounts_Name_],callback);
    },





    // Search_Item_Count_Report:function(callback)
    // {
       
    //    return db.query("CALL Search_Item_Count_Report()",[],callback);
    //    },





    Get_Warehouse_Company_Typeahead:function(Company_Id,Warehouse_Name_,callback)
 {
        if (Warehouse_Name_ === 'undefined' || Warehouse_Name_ === '' || Warehouse_Name_===undefined )
            Warehouse_Name_='';
        return db.query("CALL Get_Warehouse_Company_Typeahead(@Company_Id :=?,@Warehouse_Name_ :=?)", [Company_Id, Warehouse_Name_],callback);
    },
    Get_Warehouse_Typeahead:function(Stock_Id,Warehouse_Name_,callback)
 {
        if (Warehouse_Name_ === 'undefined' || Warehouse_Name_ === '' || Warehouse_Name_===undefined )
            Warehouse_Name_='';
        return db.query("CALL Get_Warehouse_Typeahead(@Stock_Id :=?,@Warehouse_Name_ :=?)", [Stock_Id, Warehouse_Name_],callback);
    },


    Get_Porforma_For_Sales:function(Proforma_Invoice_Master_Id_,callback)
    { 
    return db.query("CALL Get_Porforma_For_Sales(@Proforma_Invoice_Master_Id_:=?)",[Proforma_Invoice_Master_Id_],callback);
    } ,

    Save_Attendance_Import: function (Student_Details, callback) { 
        console.log(Student_Details)
		return db.query(
			"CALL Save_Attendance_Import(@Attendance_Master_Id_ :=?,@Employee_InUser_Id_ :=?,@Attendance_Details :=?)",
			[
				Student_Details.Attendance_Master_Id,Student_Details.Employee_InUser_Id,
                    JSON.stringify(Student_Details.Attendance_Details),
				
			],
			callback
		);
	},
};
module.exports=Sales_Master;
