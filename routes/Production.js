 var express = require('express');
 var router = express.Router();
 var Production=require('../models/Production');
 router.post('/Save_Production/',async function(req,res,next)
 { 
 try 
 {   
   console.log(req);
 const resp=await Production.Save_Production(req.body);
 return res.send(resp);
 }
 catch(e){
console.log(e);
 return res.send(e);
 }
});
 
   router.get('/Search_Production/',function(req,res,next)
   { 
   try 
   {
    Production.Search_Production(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
     req.query.PO_No_,function (err, rows) 
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
router.get('/Search_Production_Report/',function(req,res,next)
   { 
   try 
   {
     Production.Search_Production_Report(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
       req.query.PO_No_, req.query.Item_Id, req.query.WareHouse_Id_, req.query.Company_Id,function (err, rows)
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
router.get('/Search_Production_Complete_Report/',function(req,res,next)
   { 
   try 
   {
     Production.Search_Production_Complete_Report(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
      req.query.PO_No_, req.query.Item_Id, req.query.Warehouse_Id,function (err, rows)
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
   router.get("/Get_Production_Details/:Item_Id_?/:Quantity?/:Weight_Per_Item_ ?",async (req, res, next) =>
   {
   try
   {
   const result = await Production.Get_Production_Details(req.params.Item_Id_,req.params.Quantity,req.params.Weight_Per_Item_);
   res.json(result);
   } 
   catch (e)
   {
   res.send(e);
   } 
   finally
   {
   }
   });



   router.get("/Get_Packing_Details/:Item_Id_?/:Quantity?/:Weight_Per_Item_ ?",async (req, res, next) =>
   {
   try
   {
   const result = await Production.Get_Packing_Details(req.params.Item_Id_,req.params.Quantity,req.params.Weight_Per_Item_);
   res.json(result);
   } 
   catch (e)
   {
   res.send(e);
   } 
   finally
   {
   }
   });


   
router.get("/Get_Production_Report/",async (req, res, next) =>
   {
   try
   {
     const result = await Production.Get_Production_Report(req.query.Is_Date_Check_, req.query.FromDate_, req.query.ToDate_,
       req.query.PO_No_, req.query.Item_Id);
   res.json(result);
   } 
   catch (e)
   {
   res.send(e);
   } 
   finally
   {
   }
   });
 router.get('/Get_Production_Item_Typeahead/',function(req,res,next)
  { 
  try 
  {
    Production.Get_Production_Item_Typeahead(req.query.ItemName_, req.query.Production_Master_Id_,function (err, rows) 
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

 
router.get('/Get_production_Master/:Production_Master_Id_?',function(req,res,next)
{ 
try 
{
  Production.Get_production_Master(req.params.Production_Master_Id_, function (err, rows) 
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
router.get('/Delete_Production/:Production_Master_Id_?',function(req,res,next)
{ 
try 
{
  Production.Delete_Production(req.params.Production_Master_Id_, function (err, rows) 
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

router.get('/Get_Proforma_Item_Typeahead/',function(req,res,next)
{ 
try 
{
  Production.Get_Proforma_Item_Typeahead(req.query.ItemName_, req.query.Proforma_Invoice_Master_Id,function (err, rows) 
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

router.get('/Get_Production_From_Porforma/:Production_Master_Id_?',function(req,res,next)
{ 
try 
{
  Production.Get_Production_From_Porforma(req.params.Production_Master_Id_, function (err, rows) 
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

router.get('/Search_Production_List/',function(req,res,next)
    { 
    try 
    {
      Production.Search_Production_List(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
      req.query.Account_Party_Id_,req.query.Po_Number,req.query.PI_Number,req.query.User_Type,req.query.Employee_Id_,function (err, rows) 
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


router.get('/Search_Production_Completed_List/',function(req,res,next)
    { 
    try 
    {
      Production.Search_Production_Completed_List(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
      req.query.Account_Party_Id_,req.query.Po_Number,req.query.PI_Number,req.query.User_Type,req.query.Employee_Id_,function (err, rows) 
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

router.get('/Get_Rawmaterialqty_Details/',function(req,res,next)
    { 
    try 
    {
      Production.Get_Rawmaterialqty_Details(req.query.Stock_Id_, req.query.WareHouse_Id_, req.query.Quantity_,function (err, rows)
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

    

    router.get('/Closed_Production/:Production_Master_Id_?/:Production_Status_?/:User_Id_?',function(req,res,next)
    { 
    try 
    {
      Production.Closed_Production(req.params.Production_Master_Id_,req.params.Production_Status_,req.params.User_Id_, function (err, rows) 
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



    
router.get('/Search_Production_Consolidated_Report/',function(req,res,next)
{ 
try 
{
  Production.Search_Production_Consolidated_Report(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
    req.query.Status_Id,function (err, rows)
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
  console.log(e)
}
finally 
{
}
});
  


router.get('/Search_Finished_Goods_Stock_Consolidated_Report/',function(req,res,next)
{ 
try 
{
  Production.Search_Finished_Goods_Stock_Consolidated_Report(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
    req.query.Status_Id, req.query.ItemId, req.query.Product_Code,function (err, rows)
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
  console.log(e)
}
finally 
{
}
});
  


router.get('/Search_Production_Summary_Report/',function(req,res,next)
{ 
try 
{
  Production.Search_Production_Summary_Report(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
    req.query.Status_Id, req.query.ItemId, req.query.Product_Code,function (err, rows)
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
  console.log(e)
}
finally 
{
}
});


router.get('/Search_Production_Consolidated_Report_New/',function(req,res,next)
{ 
try 
{
  Production.Search_Production_Consolidated_Report_New(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
    req.query.Status_Id, req.query.ItemId, req.query.Product_Code,function (err, rows)
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
  console.log(e)
}
finally 
{
}
});




router.get('/Search_Summary_Report_For_Packing_Material/',function(req,res,next)
{ 
try 
{
  Production.Search_Summary_Report_For_Packing_Material(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
    req.query.Status_Id,function (err, rows)
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
  console.log(e)
}
finally 
{
}
});
  




router.get('/Search_Summary_Report_For_Raw_Material/',function(req,res,next)
{ 
try 
{
  Production.Search_Summary_Report_For_Raw_Material(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
    req.query.Status_Id,function (err, rows)
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
  console.log(e)
}
finally 
{
}
});


router.get('/Search_Sales_Report/',function(req,res,next)
{ 
try 
{
  Production.Search_Sales_Report(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
    req.query.Status_Id, req.query.ItemId, req.query.Product_Code,function (err, rows)
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
  console.log(e)
}
finally 
{
}
});




router.get('/Search_Conception_Report_of_Raw_Material/',function(req,res,next)
{ 
try 
{
  Production.Search_Conception_Report_of_Raw_Material(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
    req.query.Status_Id, req.query.ItemId, req.query.Product_Code,function (err, rows)
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
  console.log(e)
}
finally 
{
}
});





router.get('/Search_Packing_Material_Conception_Report/',function(req,res,next)
{ 
try 
{
  Production.Search_Packing_Material_Conception_Report(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
    req.query.Status_Id, req.query.ItemId, req.query.Product_Code,function (err, rows)
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
  console.log(e)
}
finally 
{
}
});






router.get('/Search_Production_consolidate_Report/',function(req,res,next)
{ 
try 
{
  Production.Search_Production_consolidate_Report(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
    req.query.Status_Id, req.query.ItemId, req.query.Product_Code,req.query.Shift_Details_Id,function (err, rows)
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
  console.log(e)
}
finally 
{
}
});



  module.exports = router;

