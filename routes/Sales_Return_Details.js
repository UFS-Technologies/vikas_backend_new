 var express = require('express');
 var router = express.Router();
 var Sales_Return_Details=require('../models/Sales_Return_Details');
 router.post('/Save_Sales_Return_Details/',function(req,res,next)
 { 
 try 
 {
Sales_Return_Details.Save_Sales_Return_Details(req.body, function (err, rows) 
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
 router.get('/Search_Sales_Return_Details/:Sales_Return_Details_Name_?',function(req,res,next)
 { 
 try 
 {
Sales_Return_Details.Search_Sales_Return_Details(req.params.Sales_Return_Details_Name_, function (err, rows) 
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
 router.get('/Get_Sales_Return_Details/:Sales_Return_Details_Id_?',function(req,res,next)
 { 
 try 
 {
Sales_Return_Details.Get_Sales_Return_Details(req.params.Sales_Return_Details_Id_, function (err, rows) 
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
 router.get('/Delete_Sales_Return_Details/:Sales_Return_Details_Id_?',function(req,res,next)
 { 
 try 
 {
Sales_Return_Details.Delete_Sales_Return_Details(req.params.Sales_Return_Details_Id_, function (err, rows) 
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

