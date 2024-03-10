 var express = require('express');
 var router = express.Router();
 var Employee_Location=require('../models/Employee_Location');
 router.post('/Save_Employee_Location/',function(req,res,next)
 { 
 try 
 {
Employee_Location.Save_Employee_Location(req.body, function (err, rows) 
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
 router.get('/Search_Employee_Location/:Employee_Location_Name_?',function(req,res,next)
 { 
 try 
 {
Employee_Location.Search_Employee_Location(req.params.Employee_Location_Name_, function (err, rows) 
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
 router.get('/Get_Employee_Location/:Client_Accounts_Id_?',function(req,res,next)
 { 
 try 
 {
Employee_Location.Get_Employee_Location(req.params.Client_Accounts_Id_, function (err, rows) 
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
 router.get('/Delete_Employee_Location/:Employee_Location_Id_?',function(req,res,next)
 { 
 try 
 {
Employee_Location.Delete_Employee_Location(req.params.Employee_Location_Id_, function (err, rows) 
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

