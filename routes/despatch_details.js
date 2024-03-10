 var express = require('express');
 var router = express.Router();
 var despatch_details=require('../models/despatch_details');
 router.post('/Save_despatch_details/',function(req,res,next)
 { 
 try 
 {
despatch_details.Save_despatch_details(req.body, function (err, rows) 
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
 router.get('/Search_despatch_details/',function(req,res,next)
 { 
 try 
 {
despatch_details.Search_despatch_details(req.query.despatch_details_Name, function (err, rows) 
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
 router.get('/Get_despatch_details/:despatch_details_Id_?',function(req,res,next)
 { 
 try 
 {
despatch_details.Get_despatch_details(req.params.despatch_details_Id_, function (err, rows) 
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
 router.get('/Delete_despatch_details/:despatch_details_Id_?',function(req,res,next)
 { 
 try 
 {
despatch_details.Delete_despatch_details(req.params.despatch_details_Id_, function (err, rows) 
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

