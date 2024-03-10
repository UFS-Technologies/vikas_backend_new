 var express = require('express');
 var router = express.Router();
 var Shipment_Method=require('../models/Shipment_Method');

 router.post('/Save_Shipment_Method/',function(req,res,next)
 { 
 try 
 {
  Shipment_Method.Save_Shipment_Method(req.body, function (err, rows) 
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

 router.get('/Search_Shipment_Method/:Shipment_Method_Name_?',function(req,res,next)
 { 
 try 
 {
  Shipment_Method.Search_Shipment_Method( req.params.Shipment_Method_Name_,function (err, rows) 
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

 router.get('/Delete_Shipment_Method/:Shipment_Method_Id_?',function(req,res,next)
 { 
 try 
 {
  Shipment_Method.Delete_Shipment_Method(req.params.Shipment_Method_Id_, function (err, rows) 
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
  router.get('/Load_Shipment_Method/',function(req,res,next)
  { 
  try 
  {
    Shipment_Method.Load_Shipment_Method(function (err, rows) 
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

