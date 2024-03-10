 var express = require('express');
 var router = express.Router();
 var Stock_Add_Details=require('../models/Stock_Add_Details');
 router.post('/Save_Stock_Add_Details/',function(req,res,next)
 { 
 try 
 {
Stock_Add_Details.Save_Stock_Add_Details(req.body, function (err, rows) 
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
 router.get('/Search_Stock_Add_Details/:Stock_Add_Details_Name_?',function(req,res,next)
 { 
 try 
 {
Stock_Add_Details.Search_Stock_Add_Details(req.params.Stock_Add_Details_Name_, function (err, rows) 
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
 router.get('/Get_Stock_Add_Details/:Stock_Add_Master_Id_?',function(req,res,next)
 { 
 try 
 {
Stock_Add_Details.Get_Stock_Add_Details(req.params.Stock_Add_Master_Id_, function (err, rows) 
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
 router.get('/Delete_Stock_Add_Details/:Stock_Add_Details_Id_?',function(req,res,next)
 { 
 try 
 {
Stock_Add_Details.Delete_Stock_Add_Details(req.params.Stock_Add_Details_Id_, function (err, rows) 
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

