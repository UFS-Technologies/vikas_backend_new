 var express = require('express');
 var router = express.Router();
 var Attendance_Status=require('../models/Attendance_Status');
 router.post('/Save_Attendance_Status/',function(req,res,next)
 { 
 try 
 {
Attendance_Status.Save_Attendance_Status(req.body, function (err, rows) 
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
 router.get('/Search_Attendance_Status/:Attendance_Status_Name_?',function(req,res,next)
 { 
 try 
 {
Attendance_Status.Search_Attendance_Status(req.params.Attendance_Status_Name_, function (err, rows) 
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
 router.get('/Get_Attendance_Status/:Attendance_Status_Id_?',function(req,res,next)
 { 
 try 
 {
Attendance_Status.Get_Attendance_Status(req.params.Attendance_Status_Id_, function (err, rows) 
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
 router.get('/Delete_Attendance_Status/:Attendance_Status_Id_?',function(req,res,next)
 { 
 try 
 {
Attendance_Status.Delete_Attendance_Status(req.params.Attendance_Status_Id_, function (err, rows) 
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

