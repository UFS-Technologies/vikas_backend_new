var express = require('express');
var router = express.Router();
var Sales_Master=require('../models/Sales_Master');
var request = require('request');
const upload = require('../helpers/multer-helper');
router.get('/Get_Location', function(req, res, next) {
  request.get({
    "headers": { "content-type": "application/json" },
    "url": "http://geolocation-db.com/json",
    "body":""
  }, (error, response, body) => {
    if(error) 
    {
        return console.dir(error);
    }
    res.json(body);
    //console.dir(JSON.parse(body));
  });
  });
router.post('/Save_Sales_Master/',async function(req,res,next)
      { 
      try 
      {
          const resp=await Sales_Master.Save_Sales_Master(req.body);
         
         return res.send(resp);     
      }
      catch(e){
        
      return res.send(e);
      }
      });      

// router.post('/Save_Shipping_List/',function(req,res,next)
// { 
// try 
// {
  
//   Sales_Master.Save_Shipping_List(req.body, function (err, rows)
// {
// if (err) 
// {
//     res.json(err);
// }
// else 
// {
  
//   res.json(rows);
// }
// });
// }
// catch (e) 
// {
// }
// finally 
// {
// }
// });
router.post('/Save_Shipping_List', upload.array('myFile'), (req, res, next) =>
{
  try
  {
    const file = req.files
    
        var Invoice_Image;
        var PackingList_Image,BL_Image;
        var Photo_ = [];
    
    if (!file) 
    {
    }
    else
    {
      for (var i = 0; i < req.body.Document_File_Array; i++) 
      {
        if(i==req.body.ImageFile_BL)
        BL_Image=file[i].filename;      
        else if(i==req.body.ImageFile_PackingList)
        PackingList_Image=file[i].filename
        else if(i==req.body.ImageFile_Invoice)
        Invoice_Image=file[i].filename
      }
    }
     
     // var Photo_json = JSON.stringify(Photo_);
 
      var Docs
    
      Docs =
      {     
                 "Sales_Master_Id": req.body.Sales_Master_Id,
                 "BI_No":req.body.BI_No,
                 "ETA":req.body.ETA,
                 "Status":req.body.Status,
                 "Tracking_Id":req.body.Tracking_Id    ,
                 "BL":BL_Image   , 
                 "BL_FileName":req.body.BL_FileName ,
                 "PackingList":PackingList_Image ,
                 "PackingList_FileName":req.body.PackingList_FileName ,
                 "Invoice":Invoice_Image ,
                 "Invoice_FileName":req.body.Invoice_FileName 
      };

    //  console.log(Schooling1)
    var jsondata1 = JSON.stringify(Docs)
    var Docs_Data=
    {
      "Docs_D": jsondata1,
    };
    Sales_Master.Save_Shipping_List(Docs_Data, function (err, rows)
        {
         
        if (err) 
        {
          console.log(err)
          // console.log(sslc_year)
          return 1;
        }
        else
        {
          console.log(rows)
          return res.json(rows);
        }
      });
    
  }

  catch (err) 
  {
    console.log(err)
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    finally 
    {
    }
  }
);
 router.get('/Search_Sales_Master/',function(req,res,next)
      { 
      try 
      {
      Sales_Master.Search_Sales_Master(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
        req.query.Account_Party_Id_,req.query.Invoice_No_,req.query.Bill_Type_Id,req.query.Sales_Type,function (err, rows) 
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
router.get('/Search_Invoice_Report/',function(req,res,next)
      { 
      try 
      {
      Sales_Master.Search_Invoice_Report(req.query.Is_Date_Check_,req.query.FromDate_,req.query.ToDate_,
        req.query.Account_Party_Id_,req.query.Invoice_No_,req.query.PONo_,function (err, rows) 
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

router.get('/Change_Bill_Status/:Sales_Master_Id_?/:BillType_?',function(req,res,next)
      { 
      try 
      {
      Sales_Master.Change_Bill_Status(req.params.Sales_Master_Id_,req.params.BillType_, function (err, rows) 
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
 router.get('/Search_Sales_Master_Mobile/:Is_Date_Check_?/:FromDate_?/:ToDate_?/:Account_Party_Id_?/:Invoice_No_?/:Employee_Id_?',function(req,res,next)
      { 
      try 
      {
      Sales_Master.Search_Sales_Master_Mobile(req.params.Is_Date_Check_,req.params.FromDate_,req.params.ToDate_,req.params.Account_Party_Id_,req.params.Invoice_No_,req.params.Employee_Id_, function (err, rows) 
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
router.get('/Get_Sales_Master_Mobile/:Sales_Master_Id_?',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Get_Sales_Master_Mobile(req.params.Sales_Master_Id_, function (err, rows) 
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
  router.get('/Get_Porforma_For_Sales/:Proforma_Invoice_Master_Id_?',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Get_Porforma_For_Sales(req.params.Proforma_Invoice_Master_Id_, function (err, rows) 
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
  router.get('/Get_Sales_Details_forprint/:Sales_Master_Id_?',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Get_Sales_Details_forprint(req.params.Sales_Master_Id_, function (err, rows) 
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
  router.get('/Load_Container',function(req,res,next)
  { 
  try 
  {
    Sales_Master.Load_Container( function (err, rows)
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

  router.get('/Load_Category',function(req,res,next)
  { 
  try 
  {
    Sales_Master.Load_Category( function (err, rows)
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
  router.get('/Get_Sales_From_Porforma/:Sales_Master_Id_?',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Get_Sales_From_Porforma(req.params.Sales_Master_Id_, function (err, rows) 
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
  router.get('/Selected_Delete/:Sales_Master_Id_?',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Selected_Delete(req.params.Sales_Master_Id_, function (err, rows) 
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
  router.get('/Get_Store_Details/:Store_Id_?',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Get_Store_Details(req.params.Store_Id_, function (err, rows) 
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
router.get('/Get_Receipt_Voucher_Mobile/:Sales_Master_Id_?',function(req,res,next)
    { 
    try 
    {
    Sales_Master.Get_Receipt_Voucher_Mobile(req.params.Sales_Master_Id_, function (err, rows) 
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
router.get('/Search_Key_Value/:Key_Value_Name_?',function(req,res,next)
    { 
    try 
    {
    Sales_Master.Search_Key_Value(req.params.Key_Value_Name_, function (err, rows) 
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
router.get('/Get_Sales_Master/:Sales_Master_Id_?',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Get_Sales_Master(req.params.Sales_Master_Id_, function (err, rows) 
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
router.get('/Delete_Sales_Master/:Sales_Master_Id_?/:Company_Id_?',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Delete_Sales_Master(req.params.Sales_Master_Id_,req.params.Company_Id_, function (err, rows) 
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
router.get('/Delete_Sales_Master_Mobile/:Sales_Master_Id_?',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Delete_Sales_Master_Mobile(req.params.Sales_Master_Id_, function (err, rows) 
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

router.get('/Load_Bill_Type/:Bill_Status_?',function(req,res,next)
  { 
  try 
  {
    Sales_Master.Load_Bill_Type(req.params.Bill_Status_,function (err, rows)
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

  router.get('/Load_Cess/',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Load_Cess( function (err, rows) 
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
  router.get('/Load_Bill_Mode/',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Load_Bill_Mode( function (err, rows) 
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

  router.get('/Load_Company/',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Load_Company( function (err, rows) 
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



  // router.get('/Search_Item_Count_Report/',function(req,res,next)
  // { 
  // try 
  // {
  // Sales_Master.Search_Item_Count_Report( function (err, rows) 
  // {
  // if (err) 
  // {
  // res.json(err);
  // }
  // else 
  // {
  // res.json(rows);
  // }
  // });
  // }
  // catch (e) 
  // {  console.log(e)
  // }
  // finally 
  // {
  // }
  // });


  

router.get('/Search_Item_Count_Report/',function(req,res,next)
{ 
try 
{
  Sales_Master.Search_Item_Count_Report(req.query.ItemId,req.query.Product_Code,function (err, rows) 
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


  router.get('/Search_Damage/',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Search_Damage( function (err, rows) 
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
  {  console.log(e)
  }
  finally 
  {
  }
  });


  router.get('/Load_payment_Status/',function(req,res,next)
  { 
  try 
  {
  Sales_Master.Load_payment_Status( function (err, rows) 
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

  
  router.get('/Search_Customer_Typeahead/',function(req,res,next)
  { 
  try 
  {
    Sales_Master.Search_Customer_Typeahead(req.query.Account_Group_Id_,req.query.Client_Accounts_Name_, function (err, rows) 
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







  // router.get('/Search_Item_Count_Report/',function(req,res,next)
  // { 
  // try 
  // {
  //   Sales_Master.Search_Item_Count_Report( function (err, rows) 
  // {
  // if (err) 
  // {
  // res.json(err);
  // }
  // else 
  // {
  // res.json(rows);
  // }
  // });
  // }
  // catch (e) 
  // {
  //   console.log(e)
  // }
  // finally 
  // {
  // }
  // }); 






router.get('/Get_Warehouse_Company_Typeahead/',function(req,res,next)
  { 
  try 
  {
    Sales_Master.Get_Warehouse_Company_Typeahead(req.query.Company_Id, req.query.Warehouse_Name_, function (err, rows)
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

  router.get('/Get_Warehouse_Typeahead/',function(req,res,next)
  { 
  try 
  {
    Sales_Master.Get_Warehouse_Typeahead(req.query.Stock_Id, req.query.Warehouse_Name_, function (err, rows)
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

  router.post("/Save_Attendance_Import/", function (req, res) {
    try {
      Sales_Master.Save_Attendance_Import(req.body, function (err, rows) {
        if (err) {
          console.log(err)
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    } catch (e) {
      console.log(e)
    } finally {
    }
  });


module.exports = router;