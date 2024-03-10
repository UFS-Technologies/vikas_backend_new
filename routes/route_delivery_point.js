 var express = require('express');
 var router = express.Router();
 var route_delivery_point=require('../models/route_delivery_point');
 router.post('/Save_route_delivery_point/',function(req,res,next)
 { 
 try 
 {
route_delivery_point.Save_route_delivery_point(req.body, function (err, rows) 
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
 router.get('/Search_route_delivery_point/',function(req,res,next)
 { 
 try 
 {
route_delivery_point.Search_route_delivery_point(req.query.route_delivery_point_Name, function (err, rows) 
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
 router.get('/Get_route_delivery_point/:route_delivery_point_Id_?',function(req,res,next)
 { 
 try 
 {
route_delivery_point.Get_route_delivery_point(req.params.route_delivery_point_Id_, function (err, rows) 
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
 router.get('/Delete_route_delivery_point/:route_delivery_point_Id_?',function(req,res,next)
 { 
 try 
 {
route_delivery_point.Delete_route_delivery_point(req.params.route_delivery_point_Id_, function (err, rows) 
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

