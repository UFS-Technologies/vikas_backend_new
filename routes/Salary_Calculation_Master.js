var express = require('express');
var router = express.Router();
var Salary_Calculation_Master=require('../models/Salary_Calculation_Master');
router.post('/Save_Salary_Calculation_Master/', async function (req, res, next) {
  try {
    const resp = await Salary_Calculation_Master.Save_Salary_Calculation_Master(req.body);
    return res.send(resp);
  }
  catch (e) {
    return res.send(e);
  }
});
router.get('/Search_Salary_Calculation_Master',function(req,res,next)
{ 
try 
{
Salary_Calculation_Master.Search_Salary_Calculation_Master(req.query.look_In_Date_Value, req.query.FromDate_, req.query.ToDate_, function (err, rows)
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
router.get('/Search_Salary_Calculation_Report',function(req,res,next)
{ 
try 
{
Salary_Calculation_Master.Search_Salary_Calculation_Report(req.query.look_In_Date_Value, req.query.FromDate_, req.query.ToDate_,req.query.Calculation_No,function (err, rows)
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
router.get('/Get_Salary_Calculation_Master/:Salary_Calculation_Master_Id_?',function(req,res,next)
{ 
try 
{
Salary_Calculation_Master.Get_Salary_Calculation_Master(req.params.Salary_Calculation_Master_Id_, function (err, rows) 
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
router.get('/Delete_Salary_Calculation_Master/:Salary_Calculation_Master_Id_?',function(req,res,next)
{ 
try 
{
Salary_Calculation_Master.Delete_Salary_Calculation_Master(req.params.Salary_Calculation_Master_Id_, function (err, rows) 
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
router.get('/Get_Process_Employee_ForSalaryCalculation/',function(req,res,next)
    { 
    try 
    {
      Salary_Calculation_Master.Get_Process_Employee_ForSalaryCalculation(req.query.FromDate_, req.query.ToDate_,function (err, rows)
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