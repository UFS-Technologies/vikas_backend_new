 var express = require('express');
 var router = express.Router();
 var Sales_Return_Master=require('../models/Sales_Return_Master');
 router.post('/Save_Sales_Return_Master/',function(req,res,next)
 { 
 try 
 {
Sales_Return_Master.Save_Sales_Return_Master(req.body, function (err, rows) 
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
 router.get('/Search_Sales_Return_Master/:Sales_Return_Master_Name_?',function(req,res,next)
 { 
 try 
 {
Sales_Return_Master.Search_Sales_Return_Master(req.params.Sales_Return_Master_Name_, function (err, rows) 
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
 router.get('/Get_Sales_Return_Master/:Sales_Return_Master_Id_?',function(req,res,next)
 { 
 try 
 {
Sales_Return_Master.Get_Sales_Return_Master(req.params.Sales_Return_Master_Id_, function (err, rows) 
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
 router.get('/Delete_Sales_Return_Master/:Sales_Return_Master_Id_?',function(req,res,next)
 { 
 try 
 {
Sales_Return_Master.Delete_Sales_Return_Master(req.params.Sales_Return_Master_Id_, function (err, rows) 
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

