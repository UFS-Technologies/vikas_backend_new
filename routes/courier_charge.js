 var express = require('express');
 var router = express.Router();
 var courier_charge=require('../models/courier_charge');
 router.post('/Save_courier_charge/',function(req,res,next)
 { 
 try 
 {
courier_charge.Save_courier_charge(req.body, function (err, rows) 
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
 router.get('/Search_courier_charge/',function(req,res,next)
 { 
 try 
 {
courier_charge.Search_courier_charge(req.query.courier_charge_Name, function (err, rows) 
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
 router.get('/Get_courier_charge/:courier_charge_Id_?',function(req,res,next)
 { 
 try 
 {
courier_charge.Get_courier_charge(req.params.courier_charge_Id_, function (err, rows) 
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
 router.get('/Delete_courier_charge/:courier_charge_Id_?',function(req,res,next)
 { 
 try 
 {
courier_charge.Delete_courier_charge(req.params.courier_charge_Id_, function (err, rows) 
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

