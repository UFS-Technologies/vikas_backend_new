var express = require('express');
var router = express.Router();
var Store=require('../models/Store');
router.post('/Save_Store/',async function(req,res,next)
{ 
try 
{
const resp=await Store.Save_Store(req.body);
return res.send(resp);
}
catch(e){
return res.send(e);
}
});
router.get('/Search_Store/:Store_Name_?',function(req,res,next)
{ 
try 
{
Store.Search_Store(req.params.Store_Name_, function (err, rows) 
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
router.get('/Delete_Store/:Store_Id_?',function(req,res,next)
{ 
try 
{
Store.Delete_Store(req.params.Store_Id_, function (err, rows) 
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
router.get('/Save_Settings/:StoreStatus_Id?',function(req,res,next)
{ 
try 
{
Store.Save_Settings(req.params.StoreStatus_Id, function (err, rows) 
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
router.get('/Get_Settings/:Settings_Id?',function(req,res,next)
{ 
try 
{
Store.Get_Settings(req.params.Settings_Id, function (err, rows) 
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
router.get('/Get_Store_Location/:Store_Id_?',function(req,res,next)
{ 
try 
{
Store.Get_Store_Location(req.params.Store_Id_, function (err, rows) 
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
router.get('/Load_District',function(req,res,next)
{ 
try 
{
Store.Load_District( function (err, rows) 
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
router.get('/Load_StoreStatus',function(req,res,next)
{ 
try 
{
Store.Load_StoreStatus( function (err, rows) 
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

