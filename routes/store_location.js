 var express = require('express');
 var router = express.Router();
 var store_location=require('../models/store_location');
 router.post('/Save_store_location/',function(req,res,next)
 { 
 try 
 {
store_location.Save_store_location(req.body, function (err, rows) 
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
 router.get('/Search_store_location/',function(req,res,next)
 { 
 try 
 {
store_location.Search_store_location(req.query.store_location_Name, function (err, rows) 
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
 router.get('/Get_store_location/:store_location_Id_?',function(req,res,next)
 { 
 try 
 {
store_location.Get_store_location(req.params.store_location_Id_, function (err, rows) 
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
 router.get('/Delete_store_location/:store_location_Id_?',function(req,res,next)
 { 
 try 
 {
store_location.Delete_store_location(req.params.store_location_Id_, function (err, rows) 
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

