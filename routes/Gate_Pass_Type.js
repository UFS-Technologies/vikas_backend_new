 var express = require('express');
 var router = express.Router();
 var Gate_Pass_Type=require('../models/Gate_Pass_Type');

 router.post('/Save_Gate_Pass_Type/',function(req,res,next)
 { 
 try 
 {
  Gate_Pass_Type.Save_Gate_Pass_Type(req.body, function (err, rows) 
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
 router.get('/Search_Gate_Pass_Type/:GatePassType_Name_?',function(req,res,next)
 { 
 try 
 {
  Gate_Pass_Type.Search_Gate_Pass_Type( req.params.GatePassType_Name_,function (err, rows) 
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

 router.get('/Delete_Gate_Pass_Type/:GatePassType_Id_?',function(req,res,next)
 { 
 try 
 {
  Gate_Pass_Type.Delete_Gate_Pass_Type(req.params.GatePassType_Id_, function (err, rows) 
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


  router.get('/Get_Gate_Pass_Type/:GatePassType_Id_?',function(req,res,next)
  { 
  try 
  {
    Gate_Pass_Type.Get_Gate_Pass_Type(req.params.GatePassType_Id_, function (err, rows) 
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

