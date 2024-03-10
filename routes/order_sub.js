var express = require('express');
var router = express.Router();
var order_sub=require('../models/order_sub');
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
                TotalWeight: req.body['TotalWeight_' + i],
                TotalQuantity: req.body['TotalQuantity' + i],
              });
            }
           var jsondata = JSON.stringify(Order_Sub)

           var order_sub_details = []
           var order_sub_details_length = req.body.order_sub_details_length;
           for (var i = 0; i < order_sub_details_length; i++) 
           {
             order_sub_details.push
               ({  
               Order_Sub_Id: req.body['Order_Sub_Id' + i],
              Order_Sub_Details_Id: req.body['Order_Sub_Details_Id' + i],
              Order_Master_Id: req.body['Order_Master_Id' + i],
              Order_Sub_Id: req.body['Order_Sub_Id' + i],
              Item_Id: req.body['Item_Id' + i],
              Item_Name: req.body['Item_Name' + i],
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
              TotalAmount: req.body['TotalAmount' + i],
              Discount: req.body['Discount' + i],
              Actual_Value: req.body['Actual_Value' + i],
              Weight: req.body['Weight' + i],
              TotalWeight: req.body['TotalWeight' + i],
             });
           }
          var jsondata1 = JSON.stringify(order_sub_details)
           
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
              "Photo":Photo_,
            "Order_Sub":jsondata,
            "order_sub_details":jsondata1
            };
            order_sub.Save_order_master(order_master_, function (err, rows) {
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
router.post('/Save_order_sub/',function(req,res,next)
{ 
try 
{
order_sub.Save_order_sub(req.body, function (err, rows) 
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
router.get('/Search_Token_Summary/',function(req,res,next)
{ 
try 
{
order_sub.Search_Token_Summary(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.Client_Id,
  req.query.Status_Id, req.query.Store_Id, function (err, rows) 
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
router.post('/Save_Myorder/',function(req,res,next)
{ 
try 
{
order_sub.Save_Myorder(req.body, function (err, rows) 
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
// router.get('/Save_Myorder/:Order_Sub_Id?/:Customer_Code?',function(req,res,next)
// { 
// try 
// {
// order_sub.Save_Myorder(req.params.Order_Sub_Id,req.params.Customer_Code, function (err, rows) 
// {
// if (err) 
// {
// res.json(err);
// }
// else 
// {
// res.json(rows);
// }
// });
// }
// catch (e) 
// {
// }
// finally 
// {
// }
// });
router.get('/Search_Order_Master/',function(req,res,next)
{ 
try 
{
order_sub.Search_Order_Master(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.Client_Id,
  req.query.Status_Id,req.query.Store_Id, function (err, rows) 
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

router.get('/Search_Order_Master_Two/',function(req,res,next)
{ 
try 
{
order_sub.Search_Order_Master_Two(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.Client_Id,
  req.query.Status_Id,req.query.Store_Id, function (err, rows) 
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
router.get('/Search_Order_Report/',function(req,res,next)
{ 
try 
{
order_sub.Search_Order_Report(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.User_Id,
  req.query.Status_Id,req.query.Store_Id, req.query.Orderno, function (err, rows) 
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
router.get('/Search_Order_Status_Report/',function(req,res,next)
{ 
try 
{
order_sub.Search_Order_Status_Report(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.User_Id,
  req.query.Status_Id,req.query.Store_Id, req.query.Orderno,function (err, rows) 
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
router.get('/Search_Order_Status_Change_Report/',function(req,res,next)
{ 
try 
{
  order_sub.Search_Order_Status_Change_Report(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.Client_Id,
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
router.get('/Search_Bill_Details_Report/',function(req,res,next)
{ 
try 
{
order_sub.Search_Bill_Details_Report(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.User_Id,
  req.query.Status_Id,req.query.Store_Id, req.query.Orderno,function (err, rows) 
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
router.get('/Load_Master_Order/:Group_Id?',function(req,res,next)
{ 
try 
{
order_sub.Load_Master_Order( req.params.Group_Id,function (err, rows) 
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
router.get('/Search_order_sub/',function(req,res,next)
{ 
try 
{
order_sub.Search_order_sub(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.Client_Id,
  req.query.Status_Id,req.query.Store_Id, function (err, rows) 
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
router.get('/Search_Token_Issue/',function(req,res,next)
{ 
try 
{
order_sub.Search_Token_Issue(req.query.Token_Number,req.query.Store_Id, function (err, rows) 
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
router.get('/Search_Token_Report/',function(req,res,next)
{ 
try 
{
order_sub.Search_Token_Report(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.Token_Number,req.query.Store_Id, function (err, rows) 
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
router.get('/Load_Token_Status/',function(req,res,next)
{ 
try 
{
order_sub.Load_Token_Status( function (err, rows) 
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
router.get('/Load_Order_Status/:Group_Id?',function(req,res,next)
{ 
try 
{
order_sub.Load_Order_Status(req.params.Group_Id, function (err, rows) 
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
router.get('/Save_Order_Followup/:Order_Id_?/:By_User_Id_?/:Entry_Date_?/:Client_Accounts_Id_?/:Order_Status_Id_?',async (req, res, next) =>
      {
      try
      {
      const result = await order_sub.Save_Order_Followup(req.params.Order_Id_,req.params.By_User_Id_,req.params.Entry_Date_,
        req.params.Client_Accounts_Id_,req.params.Order_Status_Id_,);
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
      router.get('/Send_Sms/:Mobile_?/:Sms?',async (req, res, next) =>
      {
      try
      {
      const result = await order_sub.Send_Sms(req.params.Mobile_,req.params.Sms);
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
router.get('/Save_Tocken_Issue/:Tocken_Master_Id_?/:Token_Status_?/:UserId_?/:Real_Order_Qty_?/:Real_Amount_?',function(req,res,next)
{
try 
{
order_sub.Save_Tocken_Issue(req.params.Tocken_Master_Id_,req.params.Token_Status_,req.params.UserId_,
  req.params.Real_Order_Qty_,req.params.Real_Amount_, function (err, rows) 
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
router.get('/Save_Sub_Order_Followup/:Bill_Number_?/:Order_Sub_Id_?/:Order_Id_?/:By_User_Id_?/:Entry_Date_?/:Client_Accounts_Id_?/:Order_Status_Id_?',async (req, res, next) =>
      {
      try
      {
      const result = await order_sub.Save_Sub_Order_Followup(req.params.Bill_Number_,req.params.Order_Sub_Id_,req.params.Order_Id_,req.params.By_User_Id_,req.params.Entry_Date_,
        req.params.Client_Accounts_Id_,req.params.Order_Status_Id_);
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
router.get('/Get_order_sub_details/:order_sub_Id_?',function(req,res,next)
{ 
try 
{
order_sub.Get_order_sub_details(req.params.order_sub_Id_, function (err, rows) 
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
router.post('/Save_Order_sub_Followup_Two/',async function(req,res,next)
{ 
try 
{
const resp=await order_sub.Save_Order_sub_Followup_Two(req.body);
return res.send(resp);
}
catch(e){
  
return res.send(e);
}
});
router.get('/Get_order_sub/:Order_Master_Id_?',function(req,res,next)
{ 
try 
{
order_sub.Get_order_sub(req.params.Order_Master_Id_, function (err, rows) 
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
router.get('/Search_Store_Active/:Store_Id_?',function(req,res,next)
{ 
try 
{
order_sub.Search_Store_Active(req.params.Store_Id_, function (err, rows) 
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
router.get('/Get_My_Order_Sub/:Order_Sub_Id_?',function(req,res,next)
{ 
try 
{
order_sub.Get_My_Order_Sub(req.params.Order_Sub_Id_, function (err, rows) 
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
router.get('/Get_My_Order_View/:Order_Id_?',function(req,res,next)
{ 
try 
{
order_sub.Get_My_Order_View(req.params.Order_Id_, function (err, rows) 
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
router.get('/Get_Order_Status_Change_Report/:Order_Id_?',function(req,res,next)
{ 
try 
{
order_sub.Get_Order_Status_Change_Report(req.params.Order_Id_, function (err, rows) 
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
router.get('/Get_My_Order/:Order_Id_?',function(req,res,next)
{ 
try 
{
order_sub.Get_My_Order(req.params.Order_Id_, function (err, rows) 
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
router.get('/Search_My_Order/:Client_Id_?/:RowCount?/:RowCount2?',function(req,res,next)
{ 
try 
{
order_sub.Search_My_Order(req.params.Client_Id_,req.params.RowCount,req.params.RowCount2, function (err, rows) 
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
router.get('/Search_District_route_details/:Delivery_Point_?/:store_Id_?',function(req,res,next)
{ 
try 
{
order_sub.Search_District_route_details(req.params.Delivery_Point_,req.params.store_Id_, function (err, rows) 
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
router.get('/Delete_order_sub/:order_sub_Id_?',function(req,res,next)
{ 
try 
{
order_sub.Delete_order_sub(req.params.order_sub_Id_, function (err, rows) 
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

router.get('/Search_District_Typeahead/',function(req,res,next)
{ 
try 
{
  order_sub.Search_District_Typeahead(req.query.District_Name, req.query.Advance_Booking_Store,function (err, rows) 
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
router.get("/Search_District_Details/:District_Id_?/:Delivery_Point_Name_?/:Advance_Booking_Store?",async (req, res, next) =>
      {
      try
      {
      const result = await order_sub.Search_District_Details(req.params.District_Id_,
        req.params.Delivery_Point_Name_,req.params.Advance_Booking_Store);
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
module.exports = router;

