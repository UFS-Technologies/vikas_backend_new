var express = require("express");
var router = express.Router();
var Stock_Transfer_Master = require("../models/Stock_Transfer_Master");
router.post("/Save_Stock_Transfer_Master/", async function (req, res, next) {
  try {
    console.log(req);
    const resp = await Stock_Transfer_Master.Save_Stock_Transfer_Master(
      req.body
    );
    return res.send(resp);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});

router.post("/Save_Pallets_Transfer/", function (req, res, next) {
  try {
    Stock_Transfer_Master.Save_Pallets_Transfer(req.body, function (err, rows) {
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


router.post("/Save_PurchaseOrder_List/", function (req, res, next) {
  try {
    Stock_Transfer_Master.Save_PurchaseOrder_List(req.body, function (err, rows) {
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

router.post("/Save_Pallets_Received/", function (req, res, next) {
  try {
    Stock_Transfer_Master.Save_Pallets_Received(req.body, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } catch (e) {
  } finally {
  }
});
router.get(
  "/Search_Stock_Transfer_Master/:Is_Date_Check_ ?/:FromDate_?/:ToDate_?",
  function (req, res, next) {
    try {
      Stock_Transfer_Master.Search_Stock_Transfer_Master(
        req.params.Is_Date_Check_,
        req.params.FromDate_,
        req.params.ToDate_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);

router.get("/Search_Stock_Transfer_Report/", function (req, res, next) {
  try {
    Stock_Transfer_Master.Search_Stock_Transfer_Report(
      req.query.From_Date_,
      req.query.To_Date_,
      req.query.Is_Date_Check_,
      req.query.Item_,
      req.query.From_WareHouse_Id_,
      req.query.To_WareHouse_Id_,
      req.query.From_Company_Id,
      req.query.To_Company_Id,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
  } finally {
  }
});
router.get("/Search_Pallets_Transfer", function (req, res, next) {
  try {
    Stock_Transfer_Master.Search_Pallets_Transfer(
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Is_Date_Check_,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
  } finally {
  }
});

router.get("/Search_PurchaseOrder_List", function (req, res, next) {
  try {
    Stock_Transfer_Master.Search_PurchaseOrder_List(
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Is_Date_Check_,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
  } finally {
  }
});


router.get("/Search_Pallets_Received", function (req, res, next) {
  try {
    Stock_Transfer_Master.Search_Pallets_Received(
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Is_Date_Check_,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
  } finally {
  }
});
router.get("/Search_Pallets_Transfer_Report", function (req, res, next) {
  try {
    Stock_Transfer_Master.Search_Pallets_Transfer_Report(
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Is_Date_Check_,
      req.query.Ref_No_,
      req.query.Pallet_Id,
      req.query.Production_No,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
  } finally {
  }
});

router.get(
  "/Delete_Pallets_Transfer/:Pallets_Master_Id_?/:Company_Id_ ?/:To_Company_Id_ ?",
  function (req, res, next) {
    try {
      Stock_Transfer_Master.Delete_Pallets_Transfer(
        req.params.Pallets_Master_Id_,
        req.params.Company_Id_,
        req.params.To_Company_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);
router.get(
  "/Get_Stock_Transfer_Details/:Stock_transfer_Master_Id_?",
  function (req, res, next) {
    try {
      Stock_Transfer_Master.Get_Stock_Transfer_Details(
        req.params.Stock_transfer_Master_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);
router.get(
  "/Delete_Stock_Transfer_Master/:Stock_Transfer_Master_Id_?/:From_Company_Id_?/:To_Company_Id_?",
  function (req, res, next) {
    try {
      Stock_Transfer_Master.Delete_Stock_Transfer_Master(
        req.params.Stock_Transfer_Master_Id_,
        req.params.From_Company_Id_,
        req.params.To_Company_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            console.log(rows);
            res.json(rows);
          }
        }
      );
    } catch (e) {
      console.log(e);
    } finally {
    }
  }
);
router.get("/Get_Barcode_Typeahead", function (req, res, next) {
  try {
    Stock_Transfer_Master.Get_Barcode_Typeahead(
      req.query.Barcode_,
      req.query.WareHouse_Id_,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
  } finally {
  }
});

router.get(
  "/Get_Stock_Group_From_Warehouse/:ItemName_ ?/:Group_Id_ ?/:WareHouse_Id_?",
  function (req, res, next) {
    try {
      Stock_Transfer_Master.Get_Stock_Group_From_Warehouse(
        req.params.ItemName_,
        req.params.Group_Id_,
        req.params.WareHouse_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);
router.get(
  "/Get_Stock_From_Warehouse/:ItemName_ ?/:From_WareHouse_Id_?/:From_Company_Id_?",
  function (req, res, next) {
    try {
      Stock_Transfer_Master.Get_Stock_From_Warehouse(
        req.params.ItemName_,
        req.params.From_WareHouse_Id_,
        req.params.From_Company_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);




router.get(
  "/Current_Stock_Quantity/:Stock_Id_ ?/:WareHouse_Id_?/:Company_Id_?",
  function (req, res, next) {
    try {
      Stock_Transfer_Master.Current_Stock_Quantity(
        req.params.Stock_Id_,
        req.params.WareHouse_Id_,
        req.params.Company_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);


router.get(
  "/Get_Stock_Quantity_Details/:Stock_Id_ ?/:WareHouse_Id_?/:Company_Id_?",
  function (req, res, next) {
    try {
      Stock_Transfer_Master.Get_Stock_Quantity_Details(
        req.params.Stock_Id_,
        req.params.WareHouse_Id_,
        req.params.Company_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);

router.get(
  "/Get_Stock_From_Warehouse1/:ItemName_ ?/:From_WareHouse_Id_?/:From_Company_Id_?",
  function (req, res, next) {
    try {
      Stock_Transfer_Master.Get_Stock_From_Warehouse1(
        req.params.ItemName_,
        req.params.From_WareHouse_Id_,
        req.params.From_Company_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);

router.get(
  "/Get_Stock_Item/:ItemName_ ?/:WareHouse_Id_?/:Company_Id_?",
  function (req, res, next) {
    try {
      Stock_Transfer_Master.Get_Stock_Item(
        req.params.ItemName_,
        req.params.WareHouse_Id_,
        req.params.Company_Id_,

        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);

router.get("/Item_Name_Changes/:Stock_Id_ ?", function (req, res, next) {
  try {
    Stock_Transfer_Master.Item_Name_Changes(
      req.params.Stock_Id_,

      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
  } finally {
  }
});

router.get("/Item_Stock_Name_Changes/:Stock_Id_ ?", function (req, res, next) {
  try {
    Stock_Transfer_Master.Item_Stock_Name_Changes(
      req.params.Stock_Id_,

      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
  } finally {
  }
});

router.get(
  "/Get_Stock_To_Warehouse/:ItemName_ ?/:To_WareHouse_Id_?/:To_Company_Id_?",
  function (req, res, next) {
    try {
      Stock_Transfer_Master.Get_Stock_To_Warehouse(
        req.params.ItemName_,
        req.params.To_WareHouse_Id_,
        req.params.To_Company_Id_,
        function (err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
    } finally {
    }
  }
);
// router.get(
//   "/Delete_Stock_Transfer_Master/:Stock_transfer_Master_Id_?",
//   function (req, res, next) {
//     try {
//       Stock_Transfer_Master.Delete_Stock_Transfer_Master(
//         req.params.Stock_transfer_Master_Id_,
//         function (err, rows) {
//           if (err) {
//             console.log(err);
//             res.json(err);
//           } else {
//             res.json(rows);
//           }
//         }
//       );
//     } catch (e) {
//       console.log(e);
//     } finally {
//     }
//   });
router.get(
  "/Quantity_Available_Check/:stockid_ ?/:company_id_?/:warehouseid_?/:cur_quant_?",
  function (req, res, next) {
    try {
      Stock_Transfer_Master.Quantity_Available_Check(
        req.params.stockid_,
        req.params.company_id_,
        req.params.warehouseid_,
        req.params.cur_quant_,
        function (err, rows) {
          if (err) {
            
            res.json(err);
          } else {
            res.json(rows);
          }
        }
      );
    } catch (e) {
      console.log(e)
    } finally {
    }
  }
);
module.exports = router;
