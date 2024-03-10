var express = require('express');
var router = express.Router();
var district=require('../models/district');
router.post('/Save_district/',async function(req,res,next)
{ 
try 
{
const resp=await district.Save_district(req.body);
return res.send(resp);
}
catch(e){
return res.send(e);
}
});
router.get('/Search_district/',function(req,res,next)
{ 
try 
{
district.Search_district(req.query.district_Name, function (err, rows) 
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
router.get('/Get_district/:district_Id_?',function(req,res,next)
{ 
try 
{
district.Get_district(req.params.district_Id_, function (err, rows) 
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
router.get('/Delete_district/:district_Id_?',function(req,res,next)
{ 
try 
{
district.Delete_district(req.params.district_Id_, function (err, rows) 
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
router.get('/Get_District_Delivery/:District_Id_?',function(req,res,next)
{ 
try 
{
    district.Get_District_Delivery(req.params.District_Id_, function (err, rows) 
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
router.get('/Load_Delivery_Point',function(req,res,next)
{ 
try 
{
    district.Load_Delivery_Point( function (err, rows) 
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

