var express = require("express");
var router = express.Router();
var Stock_Add_Master = require("../models/Stock_Add_Master");
router.post("/Save_Stock_Add_Master/", async function (req, res, next) {
  try {
    console.log(req);
    const resp = await Stock_Add_Master.Save_Stock_Add_Master(req.body);
    return res.send(resp);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});
router.get(
  "/Search_Stock_Add_Master/:From_Date_?/:To_Date_?/:Is_Date_Check_ ?",
  function (req, res, next) {
    try {
      Stock_Add_Master.Search_Stock_Add_Master(
        req.params.From_Date_,
        req.params.To_Date_,
        req.params.Is_Date_Check_,
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
router.get("/Search_Stock_Add_Report/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Stock_Add_Report(
      req.query.From_Date_,
      req.query.To_Date_,
      req.query.Is_Date_Check_,
      req.query.Item_,
      req.query.WareHouse_Id_,
      req.query.Company_Id,
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
  "/Get_Stock_Add_Master/:Stock_Add_Master_Id_?",
  function (req, res, next) {
    try {
      Stock_Add_Master.Get_Stock_Add_Master(
        req.params.Stock_Add_Master_Id_,
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
  "/Delete_Stock_Add_Master/:Stock_Add_Master_Id_?/:Company_Id_ ?",
  function (req, res, next) {
    try {
      Stock_Add_Master.Delete_Stock_Add_Master(
        req.params.Stock_Add_Master_Id_,
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
router.get("/Get_Barcode_Stock/:Barcode_?", function (req, res, next) {
  try {
    Stock_Add_Master.Get_Barcode_Stock(
      req.params.Barcode_,
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
router.get("/Get_Item_Typeahead/:ItemName_?", function (req, res, next) {
  try {
    Stock_Add_Master.Get_Item_Typeahead(
      req.params.ItemName_,
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
router.get("/Search_Warehouse_Typeahead/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Warehouse_Typeahead(
      req.query.Warehouse_Name_,
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

router.get("/Search_Stock_Report/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Stock_Report(
      req.query.ItemId,
      req.query.WareHouse_Id,
      req.query.Company_Id,
      req.query.Item_Group_Id,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});


router.get("/Search_Daily_Punching_Data_Report/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Daily_Punching_Data_Report(
      req.query.ItemId,
      req.query.WareHouse_Id,
      req.query.Company_Id,
      req.query.Item_Group_Id,
      function (err, rows) {
        if (err) {
          console.log(err)
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});


router.get("/Search_Daily_Report/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Daily_Report(
      req.query.ItemId,
      req.query.WareHouse_Id,
      req.query.Company_Id,
      req.query.Item_Group_Id,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});


router.get("/Search_Daily_Production_Data_Report/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Daily_Production_Data_Report(
      req.query.ItemId,
      req.query.WareHouse_Id,
      req.query.Company_Id,
      req.query.Item_Group_Id,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});

router.get("/Search_Mat_Store_Stock_Vikas_Report/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Mat_Store_Stock_Vikas_Report(
      req.query.ItemId,
      req.query.WareHouse_Id,
      req.query.Company_Id,
      req.query.Item_Group_Id,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});


router.get("/Search_Packing_Material_Stock_Report/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Packing_Material_Stock_Report(
      req.query.ItemId,
      req.query.WareHouse_Id,
      req.query.Company_Id,
      req.query.Item_Group_Id,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});


router.get("/Search_Mat_Stock_New_Pattern_Report/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Mat_Stock_New_Pattern_Report(
      req.query.ItemId,
      req.query.WareHouse_Id,
      req.query.Company_Id,
      req.query.Item_Group_Id,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});


router.get("/Search_Transaction_Report/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Transaction_Report(
      req.query.ItemId,
      req.query.WareHouse_Id,
      req.query.Company_Id,
      req.query.Item_Group_Id,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});

router.get("/Search_Production_No_Typeahead/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Production_No_Typeahead(
      req.query.Production_No_,
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


router.get("/Search_Purchase_No_Typeahead/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Purchase_No_Typeahead(
      req.query.Purchase_Order_Master_Id_,
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

router.get("/Search_Packing_No_Typeahead/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Packing_No_Typeahead(
      req.query.Packing_No_,
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


router.get("/Search_Ref_No_Typeahead/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Ref_No_Typeahead(
      req.query.Ref_No,
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

router.get("/Search_Production_Ref_Typeahead/", function (req, res, next) {
  try {
    Stock_Add_Master.Search_Production_Ref_Typeahead(
      req.query.Proforma_Id_,
      req.query.Production_No_,
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
  "/Get_Production_Details_From_Typeahead/",
  function (req, res, next) {
    try {
      Stock_Add_Master.Get_Production_Details_From_Typeahead(
        req.query.Production_No_,
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
  "/Get_Purchase_Details_From_Typeahead/",
  function (req, res, next) {
    try {
      Stock_Add_Master.Get_Purchase_Details_From_Typeahead(
        req.query.Purchase_Order_Master_Id_,
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
  "/Get_Production_Details_From_PalletTypeahead/",
  function (req, res, next) {
    try {
      Stock_Add_Master.Get_Production_Details_From_PalletTypeahead(
        req.query.Production_No_,
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

module.exports = router;
