 var express = require('express');
 var router = express.Router();
 var delivery_return=require('../models/delivery_return');
 router.post('/Save_delivery_return/',function(req,res,next)
 { 
 try 
 {
delivery_return.Save_delivery_return(req.body, function (err, rows) 
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
 router.get('/Search_delivery_return/',function(req,res,next)
 { 
 try 
 {
delivery_return.Search_delivery_return(req.query.delivery_return_Name, function (err, rows) 
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
 router.get('/Get_delivery_return/:delivery_return_Id_?',function(req,res,next)
 { 
 try 
 {
delivery_return.Get_delivery_return(req.params.delivery_return_Id_, function (err, rows) 
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
 router.get('/Delete_delivery_return/:delivery_return_Id_?',function(req,res,next)
 { 
 try 
 {
delivery_return.Delete_delivery_return(req.params.delivery_return_Id_, function (err, rows) 
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

