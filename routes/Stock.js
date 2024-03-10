var express = require('express');
var router = express.Router();
var Stock=require('../models/Stock');
router.post('/Save_Stock/',function(req,res,next)
    { 
    try 
    {
    Stock.Save_Stock(req.body, function (err, rows) 
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
router.post('/Save_Stock_InStockReport/',function(req,res,next)
    { 
    try 
    {
    Stock.Save_Stock_InStockReport(req.body, function (err, rows) 
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

router.get('/Search_Stock/:Stock_Name_?',function(req,res,next)
    { 
    try 
    {
    Stock.Search_Stock(req.params.Stock_Name_, function (err, rows) 
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
router.get('/Get_Stock_Item_Typeahead/:To_Employee_Id_ ?/:ItemName_?',function(req,res,next)
    { 
    try 
    {
    Stock.Get_Stock_Item_Typeahead(req.params.To_Employee_Id_,req.params.ItemName_, function (err, rows) 
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
router.get('/Get_Barcode_Typeahead/:To_Employee_Id_ ?/:Barcode_?',function(req,res,next)
    { 
    try 
    {
        
    Stock.Get_Barcode_Typeahead(req.params.To_Employee_Id_,req.params.Barcode_, function (err, rows) 
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
router.get('/Get_Stock/:Stock_Id_?',function(req,res,next)
    { 
    try 
    {
    Stock.Get_Stock(req.params.Stock_Id_, function (err, rows) 
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
router.get('/Delete_Stock/:Stock_Id_?',function(req,res,next)
    { 
    try 
    {
    Stock.Delete_Stock(req.params.Stock_Id_, function (err, rows) 
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
router.get('/Load_Full_Stock/:To_Employee_Id_ ?/:Barcode_?',function(req,res,next)
    { 
    try 
    {
    Stock.Load_Full_Stock(req.params.To_Employee_Id_,req.params.Barcode_, function (err, rows) 
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
router.get('/Load_ItemDetails_MobileSales/:To_Employee_Id_ ?',function(req,res,next)
        { 
        try 
        {
        Stock.Load_ItemDetails_MobileSales(req.params.To_Employee_Id_,function (err, rows) 
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

