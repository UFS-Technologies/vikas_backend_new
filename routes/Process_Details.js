 var express = require('express');
 var router = express.Router();
 var Process_Details=require('../models/Process_Details');

 router.post('/Save_Process_Details/',function(req,res,next)
 { 
 try 
 {
  Process_Details.Save_Process_Details(req.body, function (err, rows) 
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
 router.get('/Search_Process_Details/:Process_Details_Name_?',function(req,res,next)
 { 
 try 
 {
  Process_Details.Search_Process_Details( req.params.Process_Details_Name_,function (err, rows) 
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

 router.get('/Delete_Process_Details/:Process_Details_Id_?',function(req,res,next)
 { 
 try 
 {
  Process_Details.Delete_Process_Details(req.params.Process_Details_Id_, function (err, rows) 
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

