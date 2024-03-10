var express = require("express");
var router = express.Router();
var Purchase_Master = require("../models/Purchase_Master");
router.post("/Save_Purchase_Master/", async function (req, res, next) {
  try {
    const resp = await Purchase_Master.Save_Purchase_Master(req.body);
    return res.send(resp);
  } catch (e) {
    console.log(e)
    return res.send(e);
  }
});

router.get("/Search_Item_Typeahead/:Item_Name_?", function (req, res, next) {
  try {
    Purchase_Master.Search_Item_Typeahead(
      req.params.Item_Name_,
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

router.get("/Search_Purchase_Master/", function (req, res, next) {
  try {
    Purchase_Master.Search_Purchase_Master(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Account_Party_Id_,
      req.query.InvoiceNo_,
      req.query.Purchase_Type_,
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

router.get("/Search_Purchase_Master_Report/", function (req, res, next) {
  try {
    Purchase_Master.Search_Purchase_Master_Report(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Account_Party_Id_,
      req.query.InvoiceNo_,
      req.query.Purchase_Type_,
      req.query.Item_Id,
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

router.get("/Search_Item_Production_Report/", function (req, res, next) {
  try {
    Purchase_Master.Search_Item_Production_Report(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Account_Party_Id_,
      req.query.InvoiceNo_,
      req.query.Purchase_Type_,
      req.query.Item_Id,
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
  "/Get_Purchase_Master/:Purchase_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Master.Get_Purchase_Master(
        req.params.Purchase_Master_Id_,
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
  "/Delete_Purchase_Master/:Purchase_Master_Id_?/:Company_Id_ ?",
  function (req, res, next) {
    try {
      Purchase_Master.Delete_Purchase_Master(
        req.params.Purchase_Master_Id_,
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
  "/Get_Purchase_Item_Typeahead/:ItemName_?",
  function (req, res, next) {
    try {
      Purchase_Master.Get_Purchase_Item_Typeahead(
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
  }
);

router.get("/Get_Barcode_Purchase/:Barcode_?", function (req, res, next) {
  try {
    Purchase_Master.Get_Barcode_Purchase(
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

router.get(
  "/Get_Purchase_Details/:Purchase_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Master.Get_Purchase_Details(
        req.params.Purchase_Master_Id_,
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
  "/Search_Purchase_Report/:Is_Date_Check_ ?/:From_Date_ ?/:To_Date_ ?/:Account_Party_Id_ ?/:Item_ ?/:To_Employee_Id_ ?",
  function (req, res, next) {
    try {
      Purchase_Master.Search_Purchase_Report(
        req.params.Is_Date_Check_,
        req.params.From_Date_,
        req.params.To_Date_,
        req.params.Account_Party_Id_,
        req.params.Item_,
        req.params.To_Employee_Id_,
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

router.post(
  "/Save_Finishedgoods_Purchase_Order/",
  async function (req, res, next) {
    try {
      const resp = await Purchase_Master.Save_Finishedgoods_Purchase_Order(
        req.body
      );
      return res.send(resp);
    } catch (e) {
      return res.send(e);
    }
  }
);

router.get(
  "/Get_Finishedgoods_Purchase_Order/:Purchase_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Master.Get_Finishedgoods_Purchase_Order(
        req.params.Purchase_Master_Id_,
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
  "/Delete_Finishedgoods_Purchase_Order/:Purchase_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Master.Delete_Finishedgoods_Purchase_Order(
        req.params.Purchase_Master_Id_,
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

router.get("/Search_Finishedgoods_Purchase_Order/", function (req, res, next) {
  try {
    Purchase_Master.Search_Finishedgoods_Purchase_Order(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Account_Party_Id_,
      req.query.InvoiceNo_,
      req.query.Purchase_Type_,
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
  "/Search_Finishedgoods_Purchase_Order_Report/",
  function (req, res, next) {
    try {
      Purchase_Master.Search_Finishedgoods_Purchase_Order_Report(
        req.query.Is_Date_Check_,
        req.query.FromDate_,
        req.query.ToDate_,
        req.query.Account_Party_Id_,
        req.query.InvoiceNo_,
        req.query.Purchase_Type_,
        req.query.Item_Id,
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



router.post("/Save_Purchase_Order_Master1/", async function (req, res, next) {
  try {
    const resp = await Purchase_Master.Save_Purchase_Order_Master(req.body);
    return res.send(resp);
  } catch (e) {
    console.log(e)
    return res.send(e);
  }
});


router.get("/Search_Purchase_Order_Master/", function (req, res, next) {
  try {
    Purchase_Master.Search_Purchase_Order_Master(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Account_Party_Id_,
      req.query.InvoiceNo_,
      req.query.Purchase_Type_,
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
  "/Get_Purchase_Order_Details/:Purchase_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Master.Get_Purchase_Order_Details(
        req.params.Purchase_Master_Id_,
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
  "/Delete_Purchase_Order_Master/:Purchase_Master_Id_?/:Company_Id_ ?",
  function (req, res, next) {
    try {
      Purchase_Master.Delete_Purchase_Order_Master(
        req.params.Purchase_Master_Id_,
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





module.exports = router;
