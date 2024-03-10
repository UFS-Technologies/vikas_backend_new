 var express = require('express');
 var router = express.Router();
 var Attendance_Details=require('../models/Attendance_Details');
 router.post('/Save_Attendance_Details/',function(req,res,next)
 { 
 try 
 {
Attendance_Details.Save_Attendance_Details(req.body, function (err, rows) 
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
 router.get('/Search_Attendance_Details/:Attendance_Details_Name_?',function(req,res,next)
 { 
 try 
 {
Attendance_Details.Search_Attendance_Details(req.params.Attendance_Details_Name_, function (err, rows) 
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
 router.get('/Get_Attendance_Details/:Attendance_Details_Id_?',function(req,res,next)
 { 
 try 
 {
Attendance_Details.Get_Attendance_Details(req.params.Attendance_Details_Id_, function (err, rows) 
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
 router.get('/Delete_Attendance_Details/:Attendance_Details_Id_?',function(req,res,next)
 { 
 try 
 {
Attendance_Details.Delete_Attendance_Details(req.params.Attendance_Details_Id_, function (err, rows) 
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

