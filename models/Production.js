var db=require('../dbconnection');
var fs = require('fs');
const storedProcedure=require('../helpers/stored-procedure');
var Production=
{ 
  

Save_Production: async function (Production_Master_) 
{
        return new Promise(async (rs,rej)=>{
       const pool = db.promise();
        let result1;
         var connection = await pool.getConnection();
        await connection.beginTransaction();
        var Process_ = Production_Master_.Production_Details_Process;
        var Raw_Material_ = Production_Master_.Production_Details_RawMaterial;
        var Wastage_ = Production_Master_.Production_Details_Wastage;
            console.log(Production_Master_);
         try
         {
             console.log(Production_Master_);
           const result1 = await(new storedProcedure('Save_Production',[Production_Master_.Production_Master_Id ,Production_Master_.Proforma_Invoice_Master_Id,
            Production_Master_.Proforma_Invoice_Details_Id ,Production_Master_.Shift_End_Master_Id,Production_Master_.PONo,Production_Master_.Date,
            Production_Master_.Production_No ,Production_Master_.User_Id ,Production_Master_.Stock_Id ,Production_Master_.Item_Id ,Production_Master_.Item_Name,
            Production_Master_.WareHouse_Id ,Production_Master_.WareHouse_Name, Production_Master_.Quantity,Production_Master_.Expected_Production_Date,
            Production_Master_.PInvoice_No, Production_Master_.Reference_Field, Production_Master_.Company_Id,Production_Master_.Weight,
            Production_Master_.Batch_Weight,Production_Master_.Weight_Item,Production_Master_.Weight_Description,Production_Master_.Average_Mat_Weight,
            Production_Master_.Process_Length,Production_Master_.Raw_Length,Production_Master_.Wastage_Length,Production_Master_.Production_Status,
            Production_Master_.Purchase_Order_Master_Id,Process_,Raw_Material_,Wastage_], connection)).result();
             await connection.commit();
             connection.release();
             rs( result1);
           }
           catch (err) { 
               console.log(err);
           await connection.rollback();
           rej(err);
           }   
})
},

Search_Production:function(Is_Date_Check_,From_date_,To_date_,PO_No_,callback)
{
    if (PO_No_==='undefined'||PO_No_===''||PO_No_===undefined )
    PO_No_=0;
    return db.query("call Search_Production(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@PO_No_ :=?)",
    [Is_Date_Check_,From_date_,To_date_,PO_No_],callback)
},
Search_Production_Report:function(Is_Date_Check_,From_date_,To_date_,PO_No_,Item_Id_,WareHouse_Id_,Company_Id_,callback)
{
    return db.query("call Search_Production_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@PO_No_ :=?,@Item_Id_ :=?,@WareHouse_Id_ :=?,@Company_Id_ :=?)",
        [Is_Date_Check_, From_date_, To_date_, PO_No_, Item_Id_, WareHouse_Id_, Company_Id_],callback)
},
Search_Production_Complete_Report:function(Is_Date_Check_,From_date_,To_date_,PO_No_,Item_Id_,Warehouse_Id_,callback)
{
    return db.query("call Search_Production_Complete_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@PO_No_ :=?,@Item_Id_ :=?,@Warehouse_Id_ :=?)",
        [Is_Date_Check_, From_date_, To_date_, PO_No_, Item_Id_, Warehouse_Id_],callback)
},
Get_Production_Details: async function (Item_Id_,Quantity,Weight_Per_Item_)
    {    
    const Process=await (new storedProcedure('Get_Production_Details_Process',  [Item_Id_])).result();
    const RawMaterial = await (new storedProcedure('Get_Production_Details_RawMaterial', [Item_Id_,Weight_Per_Item_])).result();
    const Wastage = await (new storedProcedure('Get_Production_Details_Wastage', [Item_Id_,Quantity])).result();
    return {0:{Process,RawMaterial,Wastage}};  
    },



    Get_Packing_Details: async function (Item_Id_,Quantity,Weight_Per_Item_)
    {    
    const Process=await (new storedProcedure('Get_Packing_Details_Process',  [Item_Id_])).result();
    const RawMaterial = await (new storedProcedure('Get_Packing_Details_RawMaterial', [Item_Id_,Weight_Per_Item_])).result();
    const Wastage = await (new storedProcedure('Get_Packing_Details_Wastage', [Item_Id_,Quantity])).result();
    return {0:{Process,RawMaterial,Wastage}};  
    },


    Get_Production_Report: async function (Is_Date_Check_, From_date_, To_date_, PO_No_, Item_Id_)
    {    
        const RawMaterial = await (new storedProcedure('Search_Production_Raw_Report', [Is_Date_Check_, From_date_, To_date_, PO_No_, Item_Id_])).result();
        const Wastage = await (new storedProcedure('Search_Production_Wastage_Report', [Is_Date_Check_, From_date_, To_date_, PO_No_, Item_Id_])).result();
    return {0:{RawMaterial,Wastage}};  
    },
Get_Production_Item_Typeahead:function(ItemName_,Production_Master_Id_,callback)
{ 
if (ItemName_==='undefined'||ItemName_===''||ItemName_===undefined )
ItemName_='';
return db.query("CALL Get_Production_Item_Typeahead(@ItemName_ :=?,@Production_Master_Id_ :=?)",[ItemName_,Production_Master_Id_],callback);
},

Get_production_Master:function(Production_Master_Id_,callback)
{ 
return db.query("CALL Get_production_Master(@Production_Master_Id_ :=?)",[Production_Master_Id_],callback);
},

Get_production_Processdetails:function(Item_Id_,callback)
{ 
return db.query("CALL Get_production_Processdetails(@Item_Id_ :=?)",[Item_Id_],callback);
},


Delete_Production:function(Production_Master_Id_,callback)
{ 
return db.query("CALL Delete_Production(@Production_Master_Id_ :=?)",[Production_Master_Id_],callback);
} ,

Get_Proforma_Item_Typeahead:function(ItemName_,Proforma_Invoice_Master_Id,callback)
{ 
if (ItemName_==='undefined'||ItemName_===''||ItemName_===undefined )
ItemName_='';
if (Proforma_Invoice_Master_Id==='undefined'||Proforma_Invoice_Master_Id===''||Proforma_Invoice_Master_Id===undefined )
Proforma_Invoice_Master_Id=0;
return db.query("CALL Get_Proforma_Item_Typeahead(@ItemName_ :=?,@Proforma_Invoice_Master_Id :=?)",[ItemName_,Proforma_Invoice_Master_Id],callback);
},



Get_Production_From_Porforma:function(Production_Master_Id_,callback)
{ 
return db.query("CALL Get_Production_From_Porforma(@Production_Master_Id_ :=?)",[Production_Master_Id_],callback);
},


Search_Production_List:function(Is_Date_Check_,FromDate_,ToDate_,Order_Status_Id_,PONo_,PInvoiceNo_,User_Type,Employee_Id_,callback)
    { 
    return db.query("CALL Search_Production_List(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Order_Status_Id_ :=?,@PONo_ :=?,@InvoiceNo_ :=?,@User_Type :=?,@Employee_Id_ :=?)",
    [Is_Date_Check_,FromDate_,ToDate_,Order_Status_Id_,PONo_,PInvoiceNo_,User_Type,Employee_Id_],callback);
    },
    Search_Production_Completed_List:function(Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,PONo_,PInvoiceNo_,User_Type,Employee_Id_,callback)
    { 
        return db.query("CALL Search_Production_Completed_List(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@PONo_ :=?,@InvoiceNo_ :=?,@User_Type :=?,@Employee_Id_ :=?)",
    [Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,PONo_,PInvoiceNo_,User_Type,Employee_Id_],callback);
    }, 
    Get_Rawmaterialqty_Details: function (Stock_Id_, WareHouse_Id_, Quantity_,callback)
    { 
        return db.query("CALL Get_Rawmaterialqty_Details(@Stock_Id_ :=?,@WareHouse_Id_ :=?,@Quantity_ :=?)",
            [Stock_Id_, WareHouse_Id_, Quantity_],callback);
    }, 
    Closed_Production:function(Production_Master_Id_,Production_Status_,User_Id_,callback)
    { 
    return db.query("CALL Closed_Production(@Production_Master_Id_ :=?,@Production_Status_ :=?,@User_Id_ :=?)",[Production_Master_Id_,Production_Status_,User_Id_],callback);
    } ,


    Search_Production_Consolidated_Report:function(Is_Date_Check_,From_date_,To_date_,Status_Id,callback)
{
    return db.query("call Search_Production_Consolidated_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Status_Id :=?)",
        [Is_Date_Check_, From_date_, To_date_,Status_Id],callback)
},


Search_Finished_Goods_Stock_Consolidated_Report:function(Is_Date_Check_,From_date_,To_date_,Status_Id,ItemId,Product_Code,Company_Id,callback)
{
    return db.query("call Search_Finished_Goods_Stock_Consolidated_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Status_Id :=?,@ItemId :=?,@Product_Code :=?,@Company_Id :=?)",
        [Is_Date_Check_, From_date_, To_date_,Status_Id,ItemId,Product_Code,Company_Id],callback)
},

Search_Production_Summary_Report:function(Is_Date_Check_,From_date_,To_date_,Status_Id,ItemId,Product_Code,callback)
{
    return db.query("call Search_Production_Summary_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Status_Id :=?,@ItemId :=?,@Product_Code :=?)",
        [Is_Date_Check_, From_date_, To_date_,Status_Id,ItemId,Product_Code],callback)
},

Search_Production_Consolidated_Report_New:function(Is_Date_Check_,From_date_,To_date_,Status_Id,ItemId,Product_Code,callback)
{
    return db.query("call Search_Production_Consolidated_Report_New(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Status_Id :=?,@ItemId :=?,@Product_Code :=?)",
        [Is_Date_Check_, From_date_, To_date_,Status_Id,ItemId,Product_Code],callback)
},

Search_Sales_Report:function(Is_Date_Check_,From_date_,To_date_,Status_Id,ItemId,Product_Code,callback)
{
    return db.query("call Search_Sales_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Status_Id :=?,@ItemId :=?,@Product_Code :=?)",
        [Is_Date_Check_, From_date_, To_date_,Status_Id,ItemId,Product_Code],callback)
},

Search_Conception_Report_of_Raw_Material:function(Is_Date_Check_,From_date_,To_date_,Status_Id,ItemId,Product_Code,Company_Id,callback)
{
    return db.query("call Search_Conception_Report_of_Raw_Material(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Status_Id :=?,@ItemId :=?,@Product_Code :=?,@Company_Id :=?)",
        [Is_Date_Check_, From_date_, To_date_,Status_Id,ItemId,Product_Code,Company_Id],callback)
},

Search_Production_consolidate_Report:function(Is_Date_Check_,From_date_,To_date_,Status_Id,ItemId,Product_Code,Shift_Details_Id,callback)
{
    return db.query("call Search_Production_consolidate_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Status_Id :=?,@ItemId :=?,@Product_Code :=?,@Shift_Details_Id:=?)",
        [Is_Date_Check_, From_date_, To_date_,Status_Id,ItemId,Product_Code,Shift_Details_Id],callback)
},


Search_Packing_Material_Conception_Report:function(Is_Date_Check_,From_date_,To_date_,Status_Id,ItemId,Product_Code,callback)
{
    return db.query("call Search_Packing_Material_Conception_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Status_Id :=?,@ItemId :=?,@Product_Code :=?)",
        [Is_Date_Check_, From_date_, To_date_,Status_Id,ItemId,Product_Code],callback)
},

Search_Summary_Report_For_Packing_Material:function(Is_Date_Check_,From_date_,To_date_,Status_Id,callback)
{
    return db.query("call Search_Summary_Report_For_Packing_Material(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Status_Id :=?)",
        [Is_Date_Check_, From_date_, To_date_,Status_Id],callback)
},
Search_Summary_Report_For_Raw_Material:function(Is_Date_Check_,From_date_,To_date_,Status_Id,callback)
{
    return db.query("call Search_Summary_Report_For_Raw_Material(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Status_Id :=?)",
        [Is_Date_Check_, From_date_, To_date_,Status_Id],callback)
},


};
module.exports=Production;