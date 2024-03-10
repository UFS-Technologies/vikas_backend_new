 var express = require('express');
 var router = express.Router();
 var order_status=require('../models/order_status');
 router.post('/Save_order_status/',function(req,res,next)
 { 
 try 
 {
order_status.Save_order_status(req.body, function (err, rows) 
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
 router.get('/Search_order_status/',function(req,res,next)
 { 
 try 
 {
order_status.Search_order_status(req.query.order_status_Name, function (err, rows) 
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
 router.get('/Get_order_status/:order_status_Id_?',function(req,res,next)
 { 
 try 
 {
order_status.Get_order_status(req.params.order_status_Id_, function (err, rows) 
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
 router.get('/Delete_order_status/:order_status_Id_?',function(req,res,next)
 { 
 try 
 {
order_status.Delete_order_status(req.params.order_status_Id_, function (err, rows) 
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

