var express = require('express');
var router = express.Router();
var route_details=require('../models/route_details');
router.post('/Save_route_details/',async function(req,res,next)
{ 
try 
{
const resp=await route_details.Save_route_details(req.body);
return res.send(resp);
}
catch(e){
return res.send(e);
}
});
router.get('/Load_Week_Day/',function(req,res,next)
{ 
try 
{
route_details.Load_Week_Day( function (err, rows) 
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
router.get('/Search_Delivery_Point_Typeahead/',function(req,res,next)
{ 
try 
{
route_details.Search_Delivery_Point_Typeahead(req.query.Delivery_Point_Name, function (err, rows) 
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
router.get('/Search_Store_Typeahead/',function(req,res,next)
{ 
try 
{
route_details.Search_Store_Typeahead(req.query.Store_Name, function (err, rows) 
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
router.get('/Search_route_details/',function(req,res,next)
{ 
try 
{
route_details.Search_route_details(req.query.route_details_Name, function (err, rows) 
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
router.get('/Get_route_delivery_point/:route_details_Id_?',function(req,res,next)
{ 
try 
{
route_details.Get_route_delivery_point(req.params.route_details_Id_, function (err, rows) 
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
router.get('/Delete_route_details/:route_details_Id_?',function(req,res,next)
{ 
try 
{
route_details.Delete_route_details(req.params.route_details_Id_, function (err, rows) 
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

