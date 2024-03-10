 var express = require('express');
 var router = express.Router();
 var order_sub_details=require('../models/order_sub_details');
 router.post('/Save_order_sub_details/',function(req,res,next)
 { 
 try 
 {
order_sub_details.Save_order_sub_details(req.body, function (err, rows) 
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
 router.get('/Search_order_sub_details/',function(req,res,next)
 { 
 try 
 {
order_sub_details.Search_order_sub_details(req.query.order_sub_details_Name, function (err, rows) 
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
 router.get('/Get_order_sub_details/:order_sub_details_Id_?',function(req,res,next)
 { 
 try 
 {
order_sub_details.Get_order_sub_details(req.params.order_sub_details_Id_, function (err, rows) 
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
 router.get('/Delete_order_sub_details/:order_sub_details_Id_?',function(req,res,next)
 { 
 try 
 {
order_sub_details.Delete_order_sub_details(req.params.order_sub_details_Id_, function (err, rows) 
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

