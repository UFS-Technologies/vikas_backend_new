 var express = require('express');
 var router = express.Router();
 var advance_booking_sub=require('../models/advance_booking_sub');
 router.post('/Save_advance_booking_sub/',function(req,res,next)
 { 
 try 
 {
advance_booking_sub.Save_advance_booking_sub(req.body, function (err, rows) 
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
 router.get('/Search_advance_booking_sub/',function(req,res,next)
 { 
 try 
 {
advance_booking_sub.Search_advance_booking_sub(req.query.advance_booking_sub_Name, function (err, rows) 
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
 router.get('/Get_advance_booking_sub/:advance_booking_sub_Id_?',function(req,res,next)
 { 
 try 
 {
advance_booking_sub.Get_advance_booking_sub(req.params.advance_booking_sub_Id_, function (err, rows) 
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
 router.get('/Delete_advance_booking_sub/:advance_booking_sub_Id_?',function(req,res,next)
 { 
 try 
 {
advance_booking_sub.Delete_advance_booking_sub(req.params.advance_booking_sub_Id_, function (err, rows) 
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

