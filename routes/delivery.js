var express = require('express');
var router = express.Router();
var delivery=require('../models/delivery');
router.post('/Save_delivery/',function(req,res,next)
{ 
try 
{
    delivery.Save_delivery(req.body, function (err, rows) 
    {
    if (err) {res.json(err);}
    else {res.json(rows);}
    });
}
catch (e) {} finally {}
});

router.get('/Search_User_Details_Typeahead/',function(req,res,next)
{ 
try 
{
    delivery.Search_User_Details_Typeahead(req.query.User_Details_Name, function (err, rows) 
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
router.get('/Search_delivery/',function(req,res,next)
{ 
try 
{
delivery.Search_delivery(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.Client_Id,
    req.query.Vehicle,function (err, rows) 
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
router.get('/Search_Delivery_Issues/',function(req,res,next)
{ 
try 
{
delivery.Search_Delivery_Issues(req.query.From_Date,req.query.To_Date,req.query.Is_Date_Check,req.query.Status,function (err, rows) 
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

router.get('/Load_Issue_Status/',function(req,res,next)
{ 
try 
{
delivery.Load_Issue_Status(function (err, rows) 
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
router.get('/Update_Delivery_Issues/:Delivery_Issue_Id_?/:Updated_By_?/:Issue_Status_?',function(req,res,next)
{ 
try 
{
delivery.Update_Delivery_Issues(req.params.Delivery_Issue_Id_, req.params.Updated_By_,req.params.Issue_Status_,function (err, rows) 
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

router.get('/Get_Delivery_Orders/:Despatch_Id?/:Client_Accounts_Id?',function(req,res,next)
{ 
try 
{
delivery.Get_Delivery_Orders(req.params.Despatch_Id,req.params.Client_Accounts_Id, function (err, rows) 
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

router.post('/Delivery_Status_Update/',async function(req,res,next)
      { 
      try 
      {
          const resp=await delivery.Delivery_Status_Update(req.body.params.Route_Details_Id,req.body.params.Client_Accounts_Id);
      
         return res.send(resp);
      }
      catch(e){
        
      return res.send(e);
      }
      });

router.get('/Load_Despatch_sub/:Despatch_sub_id?',function(req,res,next)
{ 
try 
{
    
delivery.Load_Despatch_sub(req.params.Despatch_sub_id, function (err, rows) 
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



router.get('/Get_delivery/:delivery_Id_?',function(req,res,next)
{ 
try 
{
delivery.Get_delivery(req.params.delivery_Id_, function (err, rows) 
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
router.get('/Get_Route_Detail/:Vehicle_Id_?',function(req,res,next)
{ 
try 
{
delivery.Get_Route_Detail(req.params.Vehicle_Id_, function (err, rows) 
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
router.get('/Get_Route_Detail_Delivery/:Vehicle_Id_?',function(req,res,next)
{ 
try 
{
delivery.Get_Route_Detail_Delivery(req.params.Vehicle_Id_, function (err, rows) 
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
router.get('/Get_Delivery_Point_Route/:Route_Details_Id_?',function(req,res,next)
{ 
  
try 
{
delivery.Get_Delivery_Point_Route(req.params.Route_Details_Id_, function (err, rows) 
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
router.get('/Get_Delivery_Item/:Order_Id_?',function(req,res,next)
{ 
try 
{
delivery.Get_Delivery_Item(req.params.Order_Id_, function (err, rows) 
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
router.get('/Get_Orders_In_Delivery/:Order_Id_?',function(req,res,next)
{ 
try 
{
delivery.Get_Orders_In_Delivery(req.params.Order_Id_, function (err, rows) 
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
router.get('/Delete_delivery/:delivery_Id_?',function(req,res,next)
{ 
try 
{
delivery.Delete_delivery(req.params.delivery_Id_, function (err, rows) 
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


router.post('/Update_OTP/',async function(req,res,next)
      { 
      try 
      {
          const resp=await delivery.Update_OTP(req.body);
          
         return res.send(resp);
     
      }
      catch(e){
        
      return res.send(e);
      }
      });

router.post('/Update_OTP2/',function(req,res,next)
{ 
try 
{
    delivery.Update_OTP(req.body, function (err, rows) 
    {
    if (err) {res.json(err); }
        }
    else {res.json(rows);}
    });
}
catch (e) {} finally {}
});



// router.get('/Update_OTP/:Order_Id_?/:Delivery_User_?',function(req,res,next)
// { 
// try 
// {
     
// delivery.Update_OTP(req.params.Order_Id_,req.params.Delivery_User_, function (err, rows) 
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
router.get('/Search_OTP/:OTP_?/:Client_Accounts_Id_?',function(req,res,next)
{ 
try 
{
delivery.Search_OTP(req.params.OTP_,req.params.Client_Accounts_Id_, function (err, rows) 
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

