var express = require('express');
var router = express.Router();
var Client_Accounts=require('../models/Client_Accounts');
router.post('/Save_Client_Accounts/',function(req,res,next)
{ 
  try 
  {
  Client_Accounts.Save_Client_Accounts(req.body, function (err, rows) 
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
router.get('/Search_Employee_Typeahead',function(req,res,next)
  { 
  try 
  {
    Client_Accounts.Search_Employee_Typeahead(req.query.Client_Accounts_Name_, function (err, rows)
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

router.get('/Search_Customer/',function(req,res,next)
  { 
  try 
  {
    Client_Accounts.Search_Customer(req.query.Client_Accounts_Name_,req.query.Account_Group_, function (err, rows)
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
router.get('/Search_Client_Accounts/',function(req,res,next)
  { 
  try 
  {
  Client_Accounts.Search_Client_Accounts(req.query.Client_Accounts_Name_,req.query.Account_Group_, function (err, rows) 
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
router.get('/Accounts_Typeahead/:Account_Group_Id_?/:Client_Accounts_Name_?',function(req,res,next)
  { 
  try 
  {
  Client_Accounts.Accounts_Typeahead(req.params.Account_Group_Id_,req.params.Client_Accounts_Name_, function (err, rows) 
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
  
router.get('/Get_Client_Accounts/:Client_Accounts_Id_?',function(req,res,next)
  { 
  try 
  {
  Client_Accounts.Get_Client_Accounts(req.params.Client_Accounts_Id_,function (err, rows) 
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
router.get('/Delete_Client_Accounts/:Client_Accounts_Id_?',function(req,res,next)
  { 
  try 
  {
  Client_Accounts.Delete_Client_Accounts(req.params.Client_Accounts_Id_, function (err, rows) 
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

router.get('/From_Stock_Typeahead/:Client_Accounts_Name_?',function(req,res,next)
  { 
  try 
  {
  Client_Accounts.From_Stock_Typeahead(req.params.Client_Accounts_Name_, function (err, rows) 
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
router.get('/Client_Employee_Typeahead/:Client_Accounts_Id_?',function(req,res,next)
  { 
  try 
  {
  Client_Accounts.Client_Employee_Typeahead(req.params.Client_Accounts_Id_, function (err, rows) 
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

