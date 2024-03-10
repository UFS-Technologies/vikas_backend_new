var express = require('express');
var router = express.Router();
var Item_Group=require('../models/Item_Group');
router.post('/Save_Item_Group/',function(req,res,next)
    { 
    try 
    {
    Item_Group.Save_Item_Group(req.body, function (err, rows) 
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
router.get('/Search_Item_Group/:Item_Group_Name_?',function(req,res,next)
    { 
    try 
    {
    Item_Group.Search_Item_Group(req.params.Item_Group_Name_, function (err, rows) 
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
router.get('/Get_Item_Group/:Item_Group_Id_?',function(req,res,next)
    { 
    try 
    {
    Item_Group.Get_Item_Group(req.params.Item_Group_Id_, function (err, rows) 
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
router.get('/Delete_Item_Group/:Item_Group_Id_?',function(req,res,next)
    { 
    try 
    {
    Item_Group.Delete_Item_Group(req.params.Item_Group_Id_, function (err, rows) 
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
router.get('/ItemGroup_Typehead/',function(req,res,next)
    { 
    try 
    {
    Item_Group.ItemGroup_Typehead(req.query.Item_Group_Name_, function (err, rows) 
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
router.get('/Load_Item_Group/',function(req,res,next)
    { 
    try 
    {
    Item_Group.Load_Item_Group(function (err, rows) 
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

