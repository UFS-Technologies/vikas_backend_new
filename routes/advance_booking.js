var express = require('express');
var router = express.Router();
var advance_booking=require('../models/advance_booking');
const upload=require('../helpers/multer-helper');
router.post('/Save_order_master', upload.single('myFile'), (req, res, next) => {
  try {
    const file = req.file
    var Photo_='';
    if (!file) {
    } 
    else
    {
    Photo_ = file.filename;
    }
    {
      var Order_Sub = []
      var Order_Sub_length = req.body.Order_Sub_length;
      for (var i = 0; i < Order_Sub_length; i++) 
      {
        Order_Sub.push
          ({  
          Order_Sub_Id: req.body['Order_Sub_Id_' + i],
          Order_Id: req.body['Order_Id' + i],
          Order_Number: req.body['Order_Number' + i],
          Customer_Name: req.body['Customer_Name' + i],
          Customer_Code: req.body['Customer_Code' + i],
          Address: req.body['Address' + i],
          Mobile: req.body['Mobile' + i],
          Status_Id: req.body['Status_Id' + i],
          Bill_Number: req.body['Bill_Number' + i],
          Courier_Charge: req.body['Courier_Charge' + i],
          Item_Group: req.body['Item_Group' + i],
          GrossTotal: req.body['GrossTotal' + i],
          TotalDiscount: req.body['TotalDiscount' + i],
          NetTotal: req.body['NetTotal' + i],
          TotalCGST: req.body['TotalCGST' + i],
          ToalSGST: req.body['ToalSGST' + i],
          TotalIGST: req.body['TotalIGST' + i],
          TotalGST: req.body['TotalGST' + i],
          Cess: req.body['Cess' + i],
          RoundOff: req.body['RoundOff' + i],
          TotalAmount: req.body['TotalAmount_' + i],
          GrandTotal: req.body['GrandTotal' + i],

          Order_Sub_Details_Id: '0',
          Order_Master_Id: '0',
          Order_Sub_Id_: '0',
          Item_Id: '0',
          Item_Name:  '0',
          Rate: '0',
          Quantity: '0',
          Tax_Rate: '0',
          Tax_Amount: '0',
          Total_Amount: '0',
          Grant_Total: '0',
          Stock_Id: '0',
          SaleRate: '0',
          MRP: '0',
          HSNMasterId: '0',
          HSNCODE: '0',
          SaleTax: '0',
          CGST: '0',
          SGST: '0',
          IGST: '0',
          Cesspers: '0',
          GrossValue: '0',
          NetValue: '0',
          CGSTAMT: '0',
          SGSTAMT: '0',
          TaxAmount: '0',
          IGSTAMT: '0',
          CessAMT: '0',
          TotalAmount_: '0',
          Discount: '0',
          Actual_Value:'0'
        });
      }
     var order_sub_details = []
     var order_sub_details_length = req.body.order_sub_details_length;
     for (var i = 0; i < order_sub_details_length; i++) 
     {
      Order_Sub.push
         ({ 
        
          Order_Sub_Id:'0',
          Order_Id: '0',
          Order_Number:'0' ,
          Customer_Name: '0',
          Customer_Code:'0',
          Address:'0' ,
          Mobile:'0' ,
          Status_Id:'0' ,
          Bill_Number:'0' ,
          Courier_Charge:'0',
          Item_Group:'0' ,
          GrossTotal:'0' ,
          TotalDiscount:'0',
          NetTotal:'0' ,
          TotalCGST:'0' ,
          ToalSGST:'0' ,
          TotalIGST:'0',
          TotalGST:'0',
          Cess:'0' ,
          RoundOff:'0' ,
          TotalAmount:'0',
          GrandTotal:'0',

          Order_Sub_Details_Id: req.body['Order_Sub_Details_Id' + i],
          Order_Master_Id: req.body['Order_Master_Id' + i],
          Order_Sub_Id_: req.body['Order_Sub_Id' + i],
          Item_Id: req.body['Item_Id' + i],
          Item_Name:  req.body['Item_Name' + i],
          Rate: req.body['Rate' + i],
          Quantity: req.body['Quantity' + i],
          Tax_Rate: req.body['Tax_Rate' + i],
          Tax_Amount: req.body['Tax_Amount' + i],
          Total_Amount: req.body['Total_Amount' + i],
          Grant_Total: req.body['Grant_Total' + i],
          Stock_Id: req.body['Stock_Id' + i],
          SaleRate: req.body['SaleRate' + i],
          MRP: req.body['MRP' + i],
          HSNMasterId: req.body['HSNMasterId' + i],
          HSNCODE: req.body['HSNCODE' + i],
          SaleTax: req.body['SaleTax' + i],
          CGST: req.body['CGST' + i],
          SGST: req.body['SGST' + i],
          IGST: req.body['IGST' + i],
          Cesspers: req.body['Cesspers' + i],
          GrossValue: req.body['GrossValue' + i],
          NetValue: req.body['NetValue' + i],
          CGSTAMT: req.body['CGSTAMT' + i],
          SGSTAMT: req.body['SGSTAMT' + i],
          TaxAmount: req.body['TaxAmount' + i],
          IGSTAMT: req.body['IGSTAMT' + i],
          CessAMT: req.body['CessAMT' + i],
          TotalAmount_: req.body['TotalAmount' + i],
          Discount: req.body['Discount' + i],
          Actual_Value: req.body['Actual_Value' + i]
     });
     }
     var jsondata = JSON.stringify(Order_Sub)
      var order_master_ =
      {
        "Order_Master_Id":req.body.Order_Master_Id,
        "Order_Date":req.body.Order_Date,
        "Client_Accounts_Id":req.body.Client_Accounts_Id,
        "District":req.body.District, 
        "Delivery_Location":req.body.Delivery_Location,
        "Courier_Charge":req.body.Courier_Charge,
        "Time_Order":req.body.Time_Order,
        "Tax_Amount":req.body.Tax_Amount,
        "Total_Amount":req.body.Total_Amount,
        "Grant_Total":req.body.Grant_Total,
        "Route_Details_Id":req.body.Route_Details_Id,
        "Store_Id":req.body.Store_Id,
        "OTP":req.body.OTP,
        "Delivery_User":req.body.Delivery_User,
        "Delivery_Date":req.body.Delivery_Date,
        "Status_Id":req.body.Status_Id,
        "Advance_Booking_Id":req.body.Advance_Booking_Id,
        "Bill_Type":req.body.Bill_Type,
        "Payment_Mode":req.body.Payment_Mode,
        "Paid_Amount":req.body.Paid_Amount,
        "Description":req.body.Description,
        "File":Photo_,
      "Order_Sub":jsondata
       
      };
      advance_booking.Save_order_master(order_master_, function (err, rows) {
        if (err) {
         
          return 1;
        }
        else {
          // cb(null, FileUploaded.toString(10));
          return res.json(rows);
        }
      });
    }
  }
  catch (err) {
    
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
});


router.post('/Save_Advance_Booking', upload.single('myFile'), (req, res, next) => {
        try {
          const file = req.file
          var Photo_='';
          if (!file) {
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
          } 
          else
          {
          Photo_ = file.filename;
          }
          {
            var Advance_Booking_Sub = []
            var Advance_Booking_Sub_length = req.body.Advance_Booking_Sub_length;
            for (var i = 0; i < Advance_Booking_Sub_length; i++) 
            {
              Advance_Booking_Sub.push
                ({  
                  Advance_Booking_Sub_Id: req.body['Advance_Booking_Sub_Id' + i],
                  Advance_Booking_Id: req.body['Advance_Booking_Id' + i],
                  Customer_Id: req.body['Customer_Id' + i],
                  Customer_Name: req.body['Customer_Name' + i],
                  Address: req.body['Address' + i],
                  Phone: req.body['Phone' + i],
                  Amount: req.body['Amount' + i],
                  Courier_Charge: req.body['Courier_Charge' + i],
                  Grant_Total: req.body['Grant_Total' + i],
                  Item_Group_Id: req.body['Item_Group_Id' + i]
              });
            }
           var jsondata = JSON.stringify(Advance_Booking_Sub)
            
            var advance_booking_ =
            {
              "Advance_Booking_Id":req.body.Advance_Booking_Id,
            "Entry_Date":req.body.Entry_Date,
            "Client_Accounts_Id":req.body.Client_Accounts_Id,
            "District":req.body.District, 
            "Delivery_Point":req.body.Delivery_Point,
            "Courier_Charge":req.body.Courier_Charge,
            "Total_Amount":req.body.Total_Amount,
            "Tax_Amount":req.body.Tax_Amount,
            "Grant_Total":req.body.Grant_Total,
            "Store":req.body.Store,
            "Payment_Mode":req.body.Payment_Mode,
            "Paid_Amount":req.body.Paid_Amount,
            "Payment_Description":req.body.Payment_Description,
            "Photo":Photo_,
            "Advance_Booking_Sub":jsondata
      
            };
          
            advance_booking.Save_Advance_Booking(advance_booking_, function (err, rows) {
              if (err) {
                return 1;
              }
              else {
                return res.json(rows);
              }
            });
          }
        }
        catch (err) {
          
          const error = new Error('Please upload a file')
          error.httpStatusCode = 400
          return next(error)
        }
      });
 router.post('/Save_Advance_Photo', upload.single('myFile'), (req, res, next) => {
        try {
          const file = req.file
          var Photo_='';
          if (!file) {
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
          } 
          else
          {
          Photo_ = file.filename;
          }
          {
            var advance_booking_ =
            {
              "Advance_Booking_Id":req.body.Advance_Booking_Id,
            "Photo":Photo_
         };
          
            advance_booking.Save_Advance_Photo(advance_booking_, function (err, rows) {
              if (err) {
               
                return 1;
              }
              else {
                return res.json(rows);
              }
            });
          }
        }
        catch (err) {
          
          const error = new Error('Please upload a file')
          error.httpStatusCode = 400
          return next(error)
        }
      });
      router.post('/Save_Order_Photo', upload.single('myFile'), (req, res, next) => {
        try {
          const file = req.file
          var Photo_='';
          if (!file) {
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
          } 
          else
          {
          Photo_ = file.filename;
          }
          {
            var Order_Master =
            {
              "Order_Master_Id":req.body.Order_Master_Id,
            "File":Photo_
         };
            advance_booking.Save_Order_Photo(Order_Master, function (err, rows) {
              if (err) {
               
                return 1;
              }
              else {
                return res.json(rows);
              }
            });
          }
        }
        catch (err) {
          
          const error = new Error('Please upload a file')
          error.httpStatusCode = 400
          return next(error)
        }
      });
 router.post('/Save_MyAdvance/',function(req,res,next)
      { 
      try 
      {
        advance_booking.Save_MyAdvance(req.body, function (err, rows) 
      {
      if (err) 
      {
      res.json(err);
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      }); 
router.get('/Get_My_Advance_Book/:Advance_Booking_Id_?',function(req,res,next)
      { 
      try 
      {
        advance_booking.Get_My_Advance_Book(req.params.Advance_Booking_Id_, function (err, rows) 
      {
      if (err) 
      {
      res.json(err);
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      });    
 router.get("/Get_Advance_Booking_Load",async (req, res, next) =>
      {
      try
      {
      const result = await advance_booking.Get_Advance_Booking_Load(req.params.Route_Details_Id_,req.params.Store_Id_);
      res.json(result);
      } 
      catch (e) 
      {
      res.send(e);
      } 
      finally
      {
      }
      });
      router.get('/Load_Advance_Booking_Status/:Status_Group_?',function(req,res,next)
      { 
      try 
      {
      advance_booking.Load_Advance_Booking_Status( req.params.Status_Group_,function (err, rows) 
      {
      if (err) 
      {
      res.json(err);
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      });
      router.get('/Get_Sms/:Advance_Booking_Status_Id_?',function(req,res,next)
      { 
      try 
      {
      advance_booking.Get_Sms( req.params.Advance_Booking_Status_Id_,function (err, rows) 
      {
      if (err) 
      {
      res.json(err);
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      });
      router.get('/Get_ADV_Booking_Report/:Advance_Booking_Id_?',function(req,res,next)
      { 
      try 
      {
      advance_booking.Get_ADV_Booking_Report( req.params.Advance_Booking_Id_,function (err, rows) 
      {
      if (err) 
      {
      res.json(err);
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      });
 router.get('/Search_advance_booking/',function(req,res,next)
      { 
      try 
      {
      advance_booking.Search_advance_booking(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.Client_Id,
        req.query.Status_Id,req.query.Store_Id,req.query.Week,req.query.Page_status_id, function (err, rows) 
      {
      if (err) 
      {
      res.json(err);
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      });

router.get('/Search_ADV_Booking_Report/',function(req,res,next)
{ 
try 
{
advance_booking.Search_ADV_Booking_Report(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.Client_Id,
  req.query.Status_Id,req.query.Store_Id,req.query.Week,function (err, rows) 
{
if (err) 
{
res.json(err);
}
else 
{
res.json(rows);
}
});
}
catch (e) 
{
}
finally 
{
}
});
router.get('/Search_Adv_Payment_Report/',function(req,res,next)
      { 
      try 
      {
      advance_booking.Search_Adv_Payment_Report(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.User_Id,
        req.query.Status_Id,req.query.Store_Id,req.query.Slno, function (err, rows) 
      {
      if (err) 
      {
      res.json(err);
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      });
router.get('/Search_Adv_Preorder_Report/',function(req,res,next)
      { 
      try 
      {
      advance_booking.Search_Adv_Preorder_Report(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.User_Id,
        req.query.Status_Id,req.query.Store_Id,req.query.Slno, function (err, rows) 
      {
      if (err) 
      {
      res.json(err);
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      });
 router.get('/Search_Adv_Verification_Report/',function(req,res,next)
      { 
      try 
      {
      advance_booking.Search_Adv_Verification_Report(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.User_Id,
        req.query.Status_Id,req.query.Store_Id,req.query.Slno, function (err, rows) 
      {
      if (err) 
      {
      res.json(err);
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      });
router.get('/Search_My_Advance_Book/:Client_Accounts_Id_?/:RowCount?/:RowCount2?',function(req,res,next)
      { 
      try 
      {
      advance_booking.Search_My_Advance_Book( req.params.Client_Accounts_Id_,req.params.RowCount,req.params.RowCount2,
        function (err, rows) 
      {
      if (err) 
      {
      res.json(err);
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      });
  // router.get('/Save_Advance_Booking_Followup/:Advance_Booking_Id_?/:By_User_Id_?/:Entry_Date_?/:Client_Accounts_Id_?/:Advance_Booking_Status_Id_?/:Remarks_?/:Sms_Id_?',function(req,res,next)
  //     {
  //     try 
  //     {
  //     advance_booking.Save_Advance_Booking_Followup(req.params.Advance_Booking_Id_,req.params.By_User_Id_,req.params.Entry_Date_,
  //       req.params.Client_Accounts_Id_,req.params.Advance_Booking_Status_Id_,
  //       req.params.Remarks_,req.params.Sms_Id_,  function (err, rows) 
  //     {
  //     if (err) 
  //     {
  //     res.json(err);
  //     }
  //     else 
  //     {
  //     res.json(rows);
  //     }
  //     });
  //     }
  //     catch (e) 
  //     {
  //     }
  //     finally 
  //     {
  //     }
  //     });


  router.post('/Save_Advance_Booking_Followup/',async function(req,res,next)
  { 
  try 
  {
  const resp=await advance_booking.Save_Advance_Booking_Followup(req.body);
  return res.send(resp);
  }
  catch(e){
  return res.send(e);
  }
  });

      // router.get('/Save_Advance_Booking_Followup/:Advance_Booking_Id_?/:By_User_Id_?/:Entry_Date_?/:Client_Accounts_Id_?/:Advance_Booking_Status_Id_?/:Remarks_?/:Sms_Id_?/:Advance_Booking_Status_Name_?/:Sms_Name_?/:From_Sms?',async (req, res, next) =>
      // {
      // try
      // {
      // const result = await advance_booking.Save_Advance_Booking_Followup(req.params.Advance_Booking_Id_,req.params.By_User_Id_,req.params.Entry_Date_,
      //   req.params.Client_Accounts_Id_,req.params.Advance_Booking_Status_Id_,req.params.Remarks_,req.params.Sms_Id_,req.params.Advance_Booking_Status_Name_,req.params.Sms_Name_,req.params.From_Sms);
      // res.json(result);
      // } 
      // catch (e) 
      // {
      //   
      // res.send(e);
      // } 
      // finally
      // {
      // }
      // });  
router.get('/Get_Advance_Booking_Sub/:advance_booking_Id_?',function(req,res,next)
{ 
try 
{
advance_booking.Get_Advance_Booking_Sub(req.params.advance_booking_Id_, function (err, rows) 
{
if (err) 
{
res.json(err);
}
else 
{
res.json(rows);
}
});
}
catch (e) 
{
}
finally 
{
}
});
// router.get('/Save_Advance_Booking_Followup_Main/:Advance_Booking_Id_?/:By_User_Id_?/:Entry_Date_?/:Client_Accounts_Id_?/:Advance_Booking_Status_Id_?/:Remarks_?/:Sms_Id_?/:Slno_?',function(req,res,next)
//       {
//       try 
//       {
//       advance_booking.Save_Advance_Booking_Followup_Main(req.params.Advance_Booking_Id_,req.params.By_User_Id_,req.params.Entry_Date_,
//         req.params.Client_Accounts_Id_,req.params.Advance_Booking_Status_Id_,
//         req.params.Remarks_,req.params.Sms_Id_,req.params.Slno_,  function (err, rows) 
//       {
//       if (err) 
//       {
//       res.json(err);
//       }
//       else 
//       {
//       res.json(rows);
//       }
//       });
//       }
//       catch (e) 
//       {
//       }
//       finally 
//       {
//       }
//       });
  router.get('/Save_Advance_Booking_Followup_Main/:Advance_Booking_Id_?/:By_User_Id_?/:Entry_Date_?/:Client_Accounts_Id_?/:Advance_Booking_Status_Id_?/:Remarks_?/:Sms_Id_?/:Slno_?/:Advance_Booking_Status_Name_?/:Sms_Name_?',async (req, res, next) =>
      {
      try
      {
      const result = await advance_booking.Save_Advance_Booking_Followup_Main(req.params.Advance_Booking_Id_,req.params.By_User_Id_,req.params.Entry_Date_,
        req.params.Client_Accounts_Id_,req.params.Advance_Booking_Status_Id_,req.params.Remarks_,req.params.Sms_Id_,req.params.Slno_,req.params.Advance_Booking_Status_Name_,req.params.Sms_Name_);
      res.json(result);
      } 
      catch (e) 
      {
      res.send(e);
      } 
      finally
      {
      }
      });  



      router.get('/Save_Advance_Booking_Followup_Three/:Advance_Booking_Id_?/:By_User_Id_?/:Entry_Date_?/:Client_Accounts_Id_?/:Advance_Booking_Status_Id_?/:Remarks_?/:Sms_Id_?/:Advance_Booking_Status_Name_?/:Sms_Name_?',async (req, res, next) =>
      {
      try
      {
      const result = await advance_booking.Save_Advance_Booking_Followup_Three(req.params.Advance_Booking_Id_,req.params.By_User_Id_,req.params.Entry_Date_,
        req.params.Client_Accounts_Id_,req.params.Advance_Booking_Status_Id_,req.params.Remarks_,req.params.Sms_Id_,req.params.Advance_Booking_Status_Name_,req.params.Sms_Name_);
      res.json(result);
      } 
      catch (e) 
      {
      res.send(e);
      } 
      finally
      {
      }
      });  

router.get('/Delete_advance_booking/:advance_booking_Id_?',function(req,res,next)
{ 
try 
{
advance_booking.Delete_advance_booking(req.params.advance_booking_Id_, function (err, rows) 
{
if (err) 
{
res.json(err);
}
else 
{
res.json(rows);
}
});
}
catch (e) 
{
}
finally 
{
}
});
router.get('/Get_My_Advance_Sub/:Advance_Booking_Id_?',function(req,res,next)
{ 
try 
{
advance_booking.Get_My_Advance_Sub(req.params.Advance_Booking_Id_, function (err, rows) 
{
if (err) 
{
res.json(err);
}
else 
{
res.json(rows);
}
});
}
catch (e) 
{
}
finally 
{
}
});
router.get('/Load_courier_charge',function(req,res,next)
{ 
try 
{
advance_booking.Load_courier_charge( function (err, rows) 
{
if (err) 
{
res.json(err);
}
else 
{
res.json(rows);
}
});
}
catch (e) 
{
}
finally 
{
}
});


module.exports = router;

