 var express = require('express');
 var router = express.Router();
 var delivery_point=require('../models/delivery_point');
 router.post('/Save_delivery_point/',function(req,res,next)
 { 
 try 
 {
delivery_point.Save_delivery_point(req.body, function (err, rows) 
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
 router.get('/Search_delivery_point/',function(req,res,next)
 { 
 try 
 {
delivery_point.Search_delivery_point(req.query.delivery_point_Name, function (err, rows) 
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
 router.get('/Get_delivery_point/:delivery_point_Id_?',function(req,res,next)
 { 
 try 
 {
delivery_point.Get_delivery_point(req.params.delivery_point_Id_, function (err, rows) 
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
 router.get('/Delete_delivery_point/:delivery_point_Id_?',function(req,res,next)
 { 
 try 
 {
delivery_point.Delete_delivery_point(req.params.delivery_point_Id_, function (err, rows) 
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

