var express = require('express');
var router = express.Router();
var Stock_Transfer_Details=require('../models/Stock_Transfer_Details');
router.post('/Save_Stock_Transfer_Details/',function(req,res,next)
  { 
  try 
  {
  Stock_Transfer_Details.Save_Stock_Transfer_Details(req.body, function (err, rows) 
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
router.get('/Search_Stock_Transfer_Details/:Stock_Transfer_Details_Name_?',function(req,res,next)
  { 
  try 
  {
  Stock_Transfer_Details.Search_Stock_Transfer_Details(req.params.Stock_Transfer_Details_Name_, function (err, rows) 
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
router.get('/Get_Stock_Transfer_Details/:Stock_Transfer_Master_Id_?',function(req,res,next)
  { 
  try 
  {
  Stock_Transfer_Details.Get_Stock_Transfer_Details(req.params.Stock_Transfer_Master_Id_, function (err, rows) 
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
router.get('/Delete_Stock_Transfer_Details/:Stock_Transfer_Details_Id_?',function(req,res,next)
  { 
  try 
  {
  Stock_Transfer_Details.Delete_Stock_Transfer_Details(req.params.Stock_Transfer_Details_Id_, function (err, rows) 
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

