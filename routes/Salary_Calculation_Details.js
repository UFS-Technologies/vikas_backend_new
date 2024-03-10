 var express = require('express');
 var router = express.Router();
 var Salary_Calculation_Details=require('../models/Salary_Calculation_Details');
 router.post('/Save_Salary_Calculation_Details/',function(req,res,next)
 { 
 try 
 {
Salary_Calculation_Details.Save_Salary_Calculation_Details(req.body, function (err, rows) 
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
 router.get('/Search_Salary_Calculation_Details/:Salary_Calculation_Details_Name_?',function(req,res,next)
 { 
 try 
 {
Salary_Calculation_Details.Search_Salary_Calculation_Details(req.params.Salary_Calculation_Details_Name_, function (err, rows) 
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
 router.get('/Get_Salary_Calculation_Details/:Salary_Calculation_Details_Id_?',function(req,res,next)
 { 
 try 
 {
Salary_Calculation_Details.Get_Salary_Calculation_Details(req.params.Salary_Calculation_Details_Id_, function (err, rows) 
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
 router.get('/Delete_Salary_Calculation_Details/:Salary_Calculation_Details_Id_?',function(req,res,next)
 { 
 try 
 {
Salary_Calculation_Details.Delete_Salary_Calculation_Details(req.params.Salary_Calculation_Details_Id_, function (err, rows) 
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

