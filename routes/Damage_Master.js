 var express = require('express');
 var router = express.Router();
 var Damage_Master=require('../models/Damage_Master');
 router.post('/Save_Damage_Master/',function(req,res,next)
 { 
 try 
 {
Damage_Master.Save_Damage_Master(req.body, function (err, rows) 
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
 router.get('/Search_Damage_Master/:Damage_Master_Name_?',function(req,res,next)
 { 
 try 
 {
Damage_Master.Search_Damage_Master(req.params.Damage_Master_Name_, function (err, rows) 
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
 router.get('/Get_Damage_Master/:Damage_Master_Id_?',function(req,res,next)
 { 
 try 
 {
Damage_Master.Get_Damage_Master(req.params.Damage_Master_Id_, function (err, rows) 
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
 router.get('/Delete_Damage_Master/:Damage_Master_Id_?',function(req,res,next)
 { 
 try 
 {
Damage_Master.Delete_Damage_Master(req.params.Damage_Master_Id_, function (err, rows) 
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

