var express = require('express');
var router = express.Router();
var Damaged_Item=require('../models/Damaged_Item');
router.post('/Save_Damaged_Item/',function(req,res,next)
{ 
  try 
  {
  Damaged_Item.Save_Damaged_Item(req.body, function (err, rows) 
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
// router.get('/Search_Employee_Typeahead',function(req,res,next)
//   { 
//   try 
//   {
//     Damaged_Item.Search_Employee_Typeahead(req.query.Client_Accounts_Name_, function (err, rows)
//   {
//   if (err) 
//   {

//   res.json(err);
//   }
//   else 
//   {
//   res.json(rows);
//   }
//   });
//   }
//   catch (e) 
//   {

//   }
//   finally 
//   {
//   }
// });

// router.get('/Search_Customer/',function(req,res,next)
//   { 
//   try 
//   {
//     Damaged_Item.Search_Customer(req.query.Client_Accounts_Name_,req.query.Account_Group_, function (err, rows)
//   {
//   if (err) 
//   {

//   res.json(err);
//   }
//   else 
//   {
//   res.json(rows);
//   }
//   });
//   }
//   catch (e) 
//   {

//   }
//   finally 
//   {
//   }
// });
router.get('/Search_Damaged_Item/',function(req,res,next)
  { 
  try 
  {
  Damaged_Item.Search_Damaged_Item( req.query.Item_S_, function (err, rows) 
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
// router.get('/Accounts_Typeahead/:Account_Group_Id_?/:Client_Accounts_Name_?',function(req,res,next)
//   { 
//   try 
//   {
//   Damaged_Item.Accounts_Typeahead(req.params.Account_Group_Id_,req.params.Client_Accounts_Name_, function (err, rows) 
//   {
//   if (err) 
//   {
//   res.json(err);
//   }
//   else 
//   {
//   res.json(rows);
//   }
//   });
//   }
//   catch (e) 
//   {
//   }
//   finally 
//   {
//   }
//   });
  
// router.get('/Get_Client_Accounts/:Client_Accounts_Id_?',function(req,res,next)
//   { 
//   try 
//   {
//   Damaged_Item.Get_Client_Accounts(req.params.Client_Accounts_Id_,function (err, rows) 
//   {
//   if (err) 
//   {
//   res.json(err);
//   }
//   else 
//   {
//   res.json(rows);
//   }
//   });
//   }
//   catch (e) 
//   {
//   }
//   finally 
//   {
//   }
//   });
router.get('/Delete_Damaged_Item/:Damaged_Item_Id_?',function(req,res,next)
  { 
  try 
  {
  Damaged_Item.Delete_Damaged_Item(req.params.Damaged_Item_Id_, function (err, rows) 
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

// router.get('/From_Stock_Typeahead/:Client_Accounts_Name_?',function(req,res,next)
//   { 
//   try 
//   {
//   Damaged_Item.From_Stock_Typeahead(req.params.Client_Accounts_Name_, function (err, rows) 
//   {
//   if (err) 
//   {
//   res.json(err);
//   }
//   else 
//   {
//   res.json(rows);
//   }
//   });
//   }
//   catch (e) 
//   {
//   }
//   finally 
//   {
//   }
//   });
// router.get('/Client_Employee_Typeahead/:Client_Accounts_Id_?',function(req,res,next)
//   { 
//   try 
//   {
//   Damaged_Item.Client_Employee_Typeahead(req.params.Client_Accounts_Id_, function (err, rows) 
//   {
//   if (err) 
//   {
//   res.json(err);
//   }
//   else 
//   {
//   res.json(rows);
//   }
//   });
//   }
//   catch (e) 
//   {
//   }
//   finally 
//   {
//   }
//   });  
module.exports = router;

