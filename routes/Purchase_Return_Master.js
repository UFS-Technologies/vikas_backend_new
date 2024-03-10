 var express = require('express');
 var router = express.Router();
 var Purchase_Return_Master=require('../models/Purchase_Return_Master');
 router.post('/Save_Purchase_Return_Master/',async function(req,res,next)
        { 
        try 
        { 
         
        const resp=await Purchase_Return_Master.Save_Purchase_Return_Master(req.body);
        return res.send(resp);
        }
        catch(e){       
        return res.send(e);
        }
      });
      


router.get('/Search_Purchase_Return_Master/:Is_Date_Check_?/:From_Date_?/:To_Date_?/:Account_Party_Id_?/:Invoice_No_?',function(req,res,next)
    { 
    try 
    {
      Purchase_Return_Master.Search_Purchase_Return_Master(req.params.Is_Date_Check_,req.params.From_Date_,req.params.To_Date_,req.params.Account_Party_Id_,req.params.Invoice_No_, function (err, rows) 
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

router.get('/Get_Purchase_Return_Details/:Purchase_Return_Master_Id_?',function(req,res,next)
    { 
    try 
    {
      Purchase_Return_Master.Get_Purchase_Return_Details(req.params.Purchase_Return_Master_Id_, function (err, rows) 
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
router.get('/Delete_Purchase_Return_Master/:Purchase_Return_Master_Id_?/:Company_Id_?',function(req,res,next)
    { 
    try 
    {
      Purchase_Return_Master.Delete_Purchase_Return_Master(req.params.Purchase_Return_Master_Id_,req.params.Company_Id_, function (err, rows) 
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

