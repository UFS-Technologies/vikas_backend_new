var express = require('express');
var router = express.Router();
var Shipment_Plan=require('../models/Shipment_Plan');

router.post('/Save_Shipment_Plan/',function(req,res,next)
{ 
try 
{
  
Shipment_Plan.Save_Shipment_Plan(req.body, function (err, rows) 
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


router.get('/Search_Shipment_Plan/:Shipment_Plan_Name_?',function(req,res,next)
{ 
try 
{ 
Shipment_Plan.Search_Shipment_Plan(req.params.Shipment_Plan_Name_,function (err, rows) 
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


router.get('/Delete_Shipment_Plan/:Shipment_Plan_Id_?',function(req,res,next)
  { 
  try 
  {
    Shipment_Plan.Delete_Shipment_Plan(req.params.Shipment_Plan_Id_, function (err, rows) 
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


router.post('/Save_Warehouse/',function(req,res,next)
{ 
try 
{
  
Shipment_Plan.Save_Warehouse(req.body, function (err, rows) 
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


router.get('/Search_Warehouse/:WareHouse_Name_?',function(req,res,next)
{ 
try 
{ 
  Shipment_Plan.Search_Warehouse(req.params.WareHouse_Name_,function (err, rows) 
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

  router.get('/Delete_Warehouse/:WareHouse_Id_?',function(req,res,next)
  { 
  try 
  {
    Shipment_Plan.Delete_Warehouse(req.params.WareHouse_Id_, function (err, rows) 
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
  router.get('/Load_Shipment_Plan/',function(req,res,next)
  { 
  try 
  {
    Shipment_Plan.Load_Shipment_Plan(function (err, rows) 
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

  
  router.get('/Load_Warehouse/',function(req,res,next)
  { 
  try 
  {
    Shipment_Plan.Load_Warehouse(function (err, rows) 
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

