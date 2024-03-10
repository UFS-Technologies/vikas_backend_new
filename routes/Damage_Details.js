 var express = require('express');
 var router = express.Router();
 var Damage_Details=require('../models/Damage_Details');
 router.post('/Save_Damage_Details/',function(req,res,next)
 { 
 try 
 {
Damage_Details.Save_Damage_Details(req.body, function (err, rows) 
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
 router.get('/Search_Damage_Details/:Damage_Details_Name_?',function(req,res,next)
 { 
 try 
 {
Damage_Details.Search_Damage_Details(req.params.Damage_Details_Name_, function (err, rows) 
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
 router.get('/Get_Damage_Details/:Damage_Details_Id_?',function(req,res,next)
 { 
 try 
 {
Damage_Details.Get_Damage_Details(req.params.Damage_Details_Id_, function (err, rows) 
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
 router.get('/Delete_Damage_Details/:Damage_Details_Id_?',function(req,res,next)
 { 
 try 
 {
Damage_Details.Delete_Damage_Details(req.params.Damage_Details_Id_, function (err, rows) 
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

