 var express = require('express');
 var router = express.Router();
 var stock_category=require('../models/stock_category');
 router.post('/Save_stock_category/',function(req,res,next)
 { 
 try 
 {
stock_category.Save_stock_category(req.body, function (err, rows) 
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
 router.get('/Search_stock_category/',function(req,res,next)
 { 
 try 
 {
stock_category.Search_stock_category(req.query.stock_category_Name, function (err, rows) 
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
 router.get('/Get_stock_category/:stock_category_Id_?',function(req,res,next)
 { 
 try 
 {
stock_category.Get_stock_category(req.params.stock_category_Id_, function (err, rows) 
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
 router.get('/Delete_stock_category/:stock_category_Id_?',function(req,res,next)
 { 
 try 
 {
stock_category.Delete_stock_category(req.params.stock_category_Id_, function (err, rows) 
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

