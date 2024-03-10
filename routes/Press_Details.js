 var express = require('express');
 var router = express.Router();
 var Press_Details=require('../models/Press_Details');

 router.post('/Save_Press_Details/',function(req,res,next)
 { 
 try 
 {
  Press_Details.Save_Press_Details(req.body, function (err, rows) 
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

 router.get('/Search_Press_Details/:Press_Details_Name_?',function(req,res,next)
 { 
 try 
 {
  Press_Details.Search_Press_Details( req.params.Press_Details_Name_,function (err, rows) 
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

 router.get('/Delete_Press_Details/:Press_Details_Id_?',function(req,res,next)
 { 
 try 
 {
  Press_Details.Delete_Press_Details(req.params.Press_Details_Id_, function (err, rows) 
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

