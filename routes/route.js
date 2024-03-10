 var express = require('express');
 var router = express.Router();
 var route=require('../models/route');
 router.post('/Save_route/',function(req,res,next)
 { 
 try 
 {
route.Save_route(req.body, function (err, rows) 
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
 router.get('/Search_route/',function(req,res,next)
 { 
 try 
 {
route.Search_route(req.query.route_Name, function (err, rows) 
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
 router.get('/Get_route/:route_Id_?',function(req,res,next)
 { 
 try 
 {
route.Get_route(req.params.route_Id_, function (err, rows) 
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
 router.get('/Delete_route/:route_Id_?',function(req,res,next)
 { 
 try 
 {
route.Delete_route(req.params.route_Id_, function (err, rows) 
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

