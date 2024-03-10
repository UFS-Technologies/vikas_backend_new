var express = require('express');
var router = express.Router();
var despatch=require('../models/despatch');
router.post('/Save_despatch1/',function(req,res,next)
{ 
try 
{
despatch.Save_despatch(req.body, function (err, rows) 
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
          const resp=await despatch.Update_OTP(req.body);
          
         return res.send(resp);
     
      }
      catch(e){
        
      return res.send(e);
      }
      });

router.post('/Save_despatch/',async function(req,res,next)
      { 
      try 
      {
          const resp=await despatch.Save_despatch(req.body);
         return res.send(resp);
     
      }
      catch(e){
        
      return res.send(e);
      }
      });
  router.get("/Get_Route_Details/:Route_Details_Id_?/:Store_Id_?/:Delivery_Point_?",async (req, res, next) =>
      {
      try
      {
      const result = await despatch.Get_Route_Details(req.params.Route_Details_Id_,req.params.Store_Id_,req.params.Delivery_Point_);
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
      router.get("/Get_despatch_details_quantity/:despatch_Id_?",async (req, res, next) =>
      {
      try
      {
      const result = await despatch.Get_despatch_details_quantity(req.params.despatch_Id_);
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
router.get('/Search_order_quantity/',function(req,res,next)
{ 
try 
{
despatch.Search_order_quantity(req.query.despatch_Name, function (err, rows) 
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
      

router.get('/Get_Order_Quantity_Summmary/',function(req,res,next)
{ 
try 
{
despatch.Get_Order_Quantity_Summmary(req.query.Route_Details_Id_,req.query.Store_Id_,req.query.Delivery_Point_,req.query.Order_sub_Id_, function (err, rows) 
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

router.get('/Get_Route_Order_Sub_Details/',function(req,res,next)
{ 
try 
{
despatch.Get_Route_Order_Sub_Details(req.query.Route_Details_Id_,req.query.Store_Id_,req.query.Delivery_Point_,req.query.Order_sub_Id_, function (err, rows) 
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

router.get('/Search_despatch/',function(req,res,next)
{ 
try 
{
despatch.Search_despatch(req.query.Store_Id, function (err, rows) 
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

router.get('/Search_Route_Details_Typeahead/',function(req,res,next)
{ 
try 
{
despatch.Search_Route_Details_Typeahead(req.query.Route_Details_Name,req.query.Store_Id, function (err, rows) 
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

router.get('/Get_Route_Item/:Route_Details_Id_?/:Store_Id_?',function(req,res,next)
{ 
try 
{
despatch.Get_Route_Item(req.params.Route_Details_Id_,req.params.Store_Id_, function (err, rows) 
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
router.get('/Delete_despatch/:despatch_Id_?',function(req,res,next)
{ 
try 
{
despatch.Delete_despatch(req.params.despatch_Id_, function (err, rows) 
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

