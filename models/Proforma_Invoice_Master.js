var db=require('../dbconnection');
var fs = require('fs');
const storedProcedure=require('../helpers/stored-procedure');
var Proforma_Invoice_Master=
{ 
    Save_Proforma_Invoice_Master: async function (Proforma_Invoice_Master_) {

         return new Promise(async (rs,rej)=>{
           const pool = db.promise();
           let result1;
           var connection = await pool.getConnection();
    try {console.log(Proforma_Invoice_Master_);
        const result1 = await(new storedProcedure('Save_Proforma_Invoice_Master',[Proforma_Invoice_Master_.Proforma_Invoice_Master_Id,Proforma_Invoice_Master_.Shipment_Master_Id,
            Proforma_Invoice_Master_.Sales_Master_Id,Proforma_Invoice_Master_.Client_Accounts_Id, Proforma_Invoice_Master_.Employee_Id,Proforma_Invoice_Master_.Company_Id,
            Proforma_Invoice_Master_.User_Id,Proforma_Invoice_Master_.Entry_Date,Proforma_Invoice_Master_.PONo,Proforma_Invoice_Master_.PInvoice_No,Proforma_Invoice_Master_.BillType, 
            Proforma_Invoice_Master_.Gross_Total,Proforma_Invoice_Master_.Total_Discount,Proforma_Invoice_Master_.Net_Total,Proforma_Invoice_Master_.TotalAmount,Proforma_Invoice_Master_.Total_CGST,
            Proforma_Invoice_Master_.TotalSGST,Proforma_Invoice_Master_.TotalIGST,Proforma_Invoice_Master_.TotalGST,Proforma_Invoice_Master_.Roundoff,Proforma_Invoice_Master_.GrandTotal,
            Proforma_Invoice_Master_.Payment_Status,Proforma_Invoice_Master_.Description,Proforma_Invoice_Master_.Proforma_Status,Proforma_Invoice_Master_.Currency,Proforma_Invoice_Master_.Pallet_Weight,
            Proforma_Invoice_Master_.Total_Weight,Proforma_Invoice_Master_.Net_Weight, Proforma_Invoice_Master_.Product_Name, Proforma_Invoice_Master_.Valid_Date, Proforma_Invoice_Master_.Customer_Code, 
            Proforma_Invoice_Master_.Delivery_Term, Proforma_Invoice_Master_.Delivery_Period,Proforma_Invoice_Master_.Container,Proforma_Invoice_Master_.Container_Id, Proforma_Invoice_Master_.Payment_term, Proforma_Invoice_Master_.Bank_Id,
            Proforma_Invoice_Master_.Currency_Rate, Proforma_Invoice_Master_.PO_Date,Proforma_Invoice_Master_.Purchase_Order_Master_Id,Proforma_Invoice_Master_.Pack_Length,
            Proforma_Invoice_Master_.Total_Packing_packages, Proforma_Invoice_Master_.Total_Packing,Proforma_Invoice_Master_.Packing_NetWeight, Proforma_Invoice_Master_.Packing_GrossWeight,Proforma_Invoice_Master_.Expected_Date,
            Proforma_Invoice_Master_.Proforma_invoice_details,Proforma_Invoice_Master_.Proforma_Pack_List,Proforma_Invoice_Master_.Reference_Field], connection)).result();        
                await connection.commit();
                 connection.release();
                 
                 rs( result1);
       }
            catch (err) 
            {                 
        
                await connection.rollback();
                rej(err);
                var result2=[{'Proforma_Invoice_Master_Id_':0}]      
                rs(result2);
            }
          finally 
          {
          connection.release();
       }
    })
},



Save_Confirmation_Master: async function (Proforma_Invoice_Master_) {

    return new Promise(async (rs,rej)=>{
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
try {console.log(Proforma_Invoice_Master_);
   const result1 = await(new storedProcedure('Save_Confirmation_Master',[Proforma_Invoice_Master_.Confirmation_Master_Id,Proforma_Invoice_Master_.Shipment_Master_Id,
       Proforma_Invoice_Master_.Sales_Master_Id,Proforma_Invoice_Master_.Client_Accounts_Id, Proforma_Invoice_Master_.Employee_Id,Proforma_Invoice_Master_.Company_Id,
       Proforma_Invoice_Master_.User_Id,Proforma_Invoice_Master_.Entry_Date,Proforma_Invoice_Master_.PONo,Proforma_Invoice_Master_.PInvoice_No,Proforma_Invoice_Master_.BillType, 
       Proforma_Invoice_Master_.Gross_Total,Proforma_Invoice_Master_.Total_Discount,Proforma_Invoice_Master_.Net_Total,Proforma_Invoice_Master_.TotalAmount,Proforma_Invoice_Master_.Total_CGST,
       Proforma_Invoice_Master_.TotalSGST,Proforma_Invoice_Master_.TotalIGST,Proforma_Invoice_Master_.TotalGST,Proforma_Invoice_Master_.Roundoff,Proforma_Invoice_Master_.GrandTotal,
       Proforma_Invoice_Master_.Payment_Status,Proforma_Invoice_Master_.Description,Proforma_Invoice_Master_.Proforma_Status,Proforma_Invoice_Master_.Currency,Proforma_Invoice_Master_.Pallet_Weight,
       Proforma_Invoice_Master_.Total_Weight,Proforma_Invoice_Master_.Net_Weight, Proforma_Invoice_Master_.Product_Name, Proforma_Invoice_Master_.Valid_Date, Proforma_Invoice_Master_.Customer_Code, 
       Proforma_Invoice_Master_.Delivery_Term, Proforma_Invoice_Master_.Delivery_Period,Proforma_Invoice_Master_.Container,Proforma_Invoice_Master_.Container_Id, Proforma_Invoice_Master_.Payment_term, Proforma_Invoice_Master_.Bank_Id,
       Proforma_Invoice_Master_.Currency_Rate, Proforma_Invoice_Master_.PO_Date,Proforma_Invoice_Master_.Purchase_Order_Master_Id,Proforma_Invoice_Master_.Pack_Length,
       Proforma_Invoice_Master_.Total_Packing_packages, Proforma_Invoice_Master_.Total_Packing,Proforma_Invoice_Master_.Packing_NetWeight, Proforma_Invoice_Master_.Packing_GrossWeight,Proforma_Invoice_Master_.Expected_Date,
       Proforma_Invoice_Master_.Proforma_invoice_details,Proforma_Invoice_Master_.Proforma_Pack_List,Proforma_Invoice_Master_.Proforma_Invoice_Master_Id,Proforma_Invoice_Master_.Reference_Field], connection)).result();        
           await connection.commit();
            connection.release();
            
            rs( result1);
  }
       catch (err) 
       {                 
   
           await connection.rollback();
           rej(err);
           var result2=[{'Proforma_Invoice_Master_Id_':0}]      
           rs(result2);
       }
     finally 
     {
     connection.release();
  }
})
},




Save_Category_Dropdown: async function (Category_Save_) {

    return new Promise(async (rs,rej)=>{
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
try {console.log(Category_Save_);
   const result1 = await(new storedProcedure('Save_Category_Dropdown',[Category_Save_.Category_Id,Category_Save_.Category_Name,
       Category_Save_.Packing_Master_Id], connection)).result();        
           await connection.commit();
            connection.release();
            
            rs( result1);
  }
       catch (err) 
       {                 
   
           await connection.rollback();
           rej(err);
           var result2=[{'Packing_Master_Id':0}]      
           rs(result2);
       }
     finally 
     {
     connection.release();
  }
})
},




Product_Code_Change:function(Product_Code_,callback)
    { 
   return db.query("CALL Product_Code_Change(@Product_Code_ :=?)",[Product_Code_],callback);
    }
    ,

    Product_Code_Change_packinglist:function(Product_Code_,callback)
    { 
   return db.query("CALL Product_Code_Change_packinglist(@Product_Code_ :=?)",[Product_Code_],callback);
    }
    ,


    Get_Purchase_Details_Click:function(Purchase_Master_Id,callback)
    { 
   return db.query("CALL Get_Purchase_Details_Click(@Purchase_Master_Id :=?)",[Purchase_Master_Id],callback);
    }
    ,


    Get_Pallet_Details:function(Barcode_,callback)
    { 
   return db.query("CALL Get_Pallet_Details(@Barcode_ :=?)",[Barcode_],callback);
    }
    ,

    Get_Pallet_Details_Received:function(Barcode_,callback)
    { 
   return db.query("CALL Get_Pallet_Details_Received(@Barcode_ :=?)",[Barcode_],callback);
    }
    ,

    Product_Code_Change_Wastage:function(Product_Code_,callback)
    { 
   return db.query("CALL Product_Code_Change_Wastage(@Product_Code_ :=?)",[Product_Code_],callback);
    }
    ,

    Product_Code_Change_Packing:function(Product_Code_,callback)
    { 
   return db.query("CALL Product_Code_Change_Packing(@Product_Code_ :=?)",[Product_Code_],callback);
    }
    ,

  Search_Proforma_Invoice_Master:function(Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,PONo_,PInvoiceNo_,Status_Id,callback)
    { 
    return db.query("CALL Search_Proforma_Invoice_Master(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@PONo_ :=?,@InvoiceNo_ :=?,@Status_Id :=?)",
    [Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,PONo_,PInvoiceNo_,Status_Id],callback);
    },

    Get_Proforma_Invoice_Details:function(Proforma_Invoice_Master_Id_,callback)
    { 
    return db.query("CALL Get_Proforma_Invoice_Details(@Proforma_Invoice_Master_Id_ :=?)",[Proforma_Invoice_Master_Id_],callback);
    } ,

    Delete_Proforma_Invoice_Master:function(Proforma_Invoice_Master_Id_,callback)
    { 
    return db.query("CALL Delete_Proforma_Invoice_Master(@Proforma_Invoice_Master_Id_ :=?)",[Proforma_Invoice_Master_Id_],callback);
    } ,

    
Move_To_Production:function(Proforma_Invoice_Master_Id_,Production_Status_,User_Id_,callback)
    { 
    return db.query("CALL Move_To_Production(@Proforma_Invoice_Master_Id_ :=?,@Production_Status_ :=?,@User_Id_ :=?)",[Proforma_Invoice_Master_Id_,Production_Status_,User_Id_],callback);
    } ,

Cancel_Production:function(Proforma_Invoice_Master_Id_,callback)
    { 
    return db.query("CALL Cancel_Production(@Proforma_Invoice_Master_Id_ :=?)",[Proforma_Invoice_Master_Id_],callback);
    } ,

Get_Shipment_Master_For_Performa_Invoice:function(Shipment_Master_Id_,callback)
    { 
    return db.query("CALL Get_Shipment_Master_For_Performa_Invoice(@Shipment_Master_Id_ :=?)",[Shipment_Master_Id_],callback);
    } ,

    get_pallet_data:function(Shipment_Master_Id_,callback)
    { 
    return db.query("CALL get_pallet_data(@Shipment_Master_Id_ :=?)",[Shipment_Master_Id_],callback);
    } ,

Get_Shipment_Details_For_Performa_Invoice:function(Shipment_Master_Id_,callback)
    { 
    return db.query("CALL Get_Shipment_Details_For_Performa_Invoice(@Shipment_Master_Id_ :=?)",[Shipment_Master_Id_],callback);
    } ,

    Get_Proforma_For_Production:function(Proforma_Invoice_Details_Id_,callback)
    { 
    return db.query("CALL Get_Proforma_For_Production(@Proforma_Invoice_Details_Id_ :=?)",[Proforma_Invoice_Details_Id_],callback);
    } ,
    Get_Porforma_From_Shipment:function(Proforma_Invoice_Master_Id_,callback)
    { 
    return db.query("CALL Get_Porforma_From_Shipment(@Proforma_Invoice_Master_Id_ :=?)",[Proforma_Invoice_Master_Id_],callback);
    } ,
    Get_Porforma_Typeahead:function(PInvoice_No_,callback)
    { 
        if (PInvoice_No_==='undefined'||PInvoice_No_===''||PInvoice_No_===undefined )
        PInvoice_No_='';
        return db.query("CALL Get_Porforma_Typeahead(@PInvoice_No_ :=?)",[PInvoice_No_],callback);
    },

    Get_Porforma_Confirmation_Typeahead:function(PInvoice_No_,callback)
    { 
        if (PInvoice_No_==='undefined'||PInvoice_No_===''||PInvoice_No_===undefined )
        PInvoice_No_='';
        return db.query("CALL Get_Porforma_Confirmation_Typeahead(@PInvoice_No_ :=?)",[PInvoice_No_],callback);
    },
};
module.exports=Proforma_Invoice_Master;