var express = require("express");
var router = express.Router();
var Purchase_Order_Master = require("../models/Purchase_Order_Master");

router.post("/Save_Purchase_Order_Master/", async function (req, res, next) {
  try {
    const resp = await Purchase_Order_Master.Save_Purchase_Order_Master(
      req.body
    );
    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});


router.post("/Save_Purchase_Order_Track_Master/", async function (req, res, next) {
  try {
    const resp = await Purchase_Order_Master.Save_Purchase_Order_Track_Master(
      req.body
    );
    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});

router.post("/Save_Purchase_Order_Customer/", async function (req, res, next) {
  try {
    const resp = await Purchase_Order_Master.Save_Purchase_Order_Customer(
      req.body
    );
    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});

router.get(
  "/Get_Purchase_Order_Master/:Purchase_Order_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Get_Purchase_Order_Master(
        req.params.Purchase_Order_Master_Id_,
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
  "/Get_Purchase_Order_Track_Master/:Purchase_Order_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Get_Purchase_Order_Track_Master(
        req.params.Purchase_Order_Master_Id_,
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
  "/Get_Purchase_Order_Customer/:Purchase_Order_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Get_Purchase_Order_Customer(
        req.params.Purchase_Order_Master_Id_,
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
  "/Get_Purchase_Order_Track_Customer/:Purchase_Order_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Get_Purchase_Order_Track_Customer(
        req.params.Purchase_Order_Master_Id_,
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
  "/Get_Sales_Tracking/:Purchase_Order_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Get_Sales_Tracking(
        req.params.Purchase_Order_Master_Id_,
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
router.get("/Search_Purchase_Order_Master/", function (req, res, next) {
  try {
    Purchase_Order_Master.Search_Purchase_Order_Master(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Account_Party_Id_,
      req.query.Invoice_No_,
      req.query.Purchase_Order_Status_Id,
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


router.get("/Search_Purchase_Order_Track_Master/", function (req, res, next) {
  try {
    Purchase_Order_Master.Search_Purchase_Order_Track_Master(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Account_Party_Id_,
      req.query.Invoice_No_,
      req.query.Purchase_Order_Status_Id,
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


router.get("/Search_Purchase_Order_Customer/", function (req, res, next) {
  try {
    Purchase_Order_Master.Search_Purchase_Order_Customer(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Invoice_No_,
      req.query.Client_Id_,
      req.query.Order_Status_,
      req.query.Reference_Field_,
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


router.get("/Search_Purchase_Order_Track_Customer/", function (req, res, next) {
  try {
    Purchase_Order_Master.Search_Purchase_Order_Track_Customer(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Invoice_No_,
      req.query.Client_Id_,
      req.query.Order_Status_,
      req.query.Reference_Field_,
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

router.get("/Load_Order_Status/", function (req, res, next) {
  try {
    Purchase_Order_Master.Load_Order_Status(
      req.query.Order_Status_Name,
      req.query.Group_Id,
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

router.get("/Search_Pono_Typeahead/", function (req, res, next) {
  try {
    Purchase_Order_Master.Search_Pono_Typeahead(
      req.query.PONo_,
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

router.get("/Search_Pono_Client_Typeahead/", function (req, res, next) {
  try {
    Purchase_Order_Master.Search_Pono_Client_Typeahead(
      req.query.PONo_,
      req.query.Client_Id_,
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

// router.get('/Search_Purchase_Order_Master/:Is_Date_Check_?/:FromDate_?/:ToDate_?/:Client_Accounts_Id_?/:PONo_?/:Order_Status_?',function(req,res,next)
//     {
//     try
//     {
//       Purchase_Order_Master.Search_Purchase_Order_Master(req.params.Is_Date_Check_,req.params.FromDate_,req.params.ToDate_,req.params.Client_Accounts_Id_,req.params.PONo_,req.params.Order_Status_, function (err, rows)
//     {
//     if (err)
//     {
//     res.json(err);
//     }
//     else
//     {
//     res.json(rows);
//     }
//     });
//     }
//     catch (e)
//     {
//     }
//     finally
//     {
//     }
//     });

// router.get('/Get_Purchase_Master/:Purchase_Master_Id_?',function(req,res,next)
//     {
//     try
//     {
//     Purchase_Master.Get_Purchase_Master(req.params.Purchase_Master_Id_, function (err, rows)
//     {
//     if (err)
//     {
//     res.json(err);
//     }
//     else
//     {
//     res.json(rows);
//     }
//     });
//     }
//     catch (e)
//     {
//     }
//     finally
//     {
//     }
//     });

router.get(
  "/Delete_Purchase_Order_Master/:Purchase_Order_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Delete_Purchase_Order_Master(
        req.params.Purchase_Order_Master_Id_,
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
  "/Delete_Purchase_Order_Track_Master/:Purchase_Order_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Delete_Purchase_Order_Track_Master(
        req.params.Purchase_Order_Master_Id_,
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
  "/Delete_Purchase_Order_Customer/:Purchase_Order_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Delete_Purchase_Order_Customer(
        req.params.Purchase_Order_Master_Id_,
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
  "/Get_Production_From_Purchase_Customer/:Purchase_Order_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Get_Production_From_Purchase_Customer(
        req.params.Purchase_Order_Master_Id_,
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
  "/Search_Order_Tracking/:Purchase_Order_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Search_Order_Tracking(
        req.params.Purchase_Order_Master_Id_,
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

router.get("/Search_Order_Tracking_User", function (req, res, next) {
  try {
    Purchase_Order_Master.Search_Order_Tracking_User(
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Is_Date_Check_,
      req.query.Po_No_,
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
  "/Create_Production_Customer/:Purchase_Order_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Create_Production_Customer(
        req.params.Purchase_Order_Master_Id_,
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

router.get("/Load_Purchase_Order_Status/", function (req, res, next) {
  try {
    Purchase_Order_Master.Load_Purchase_Order_Status(function (err, rows) {
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
  "/Get_Purchase_Order_From_Proforma/:Shipment_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Get_Purchase_Order_From_Proforma(
        req.params.Shipment_Master_Id_,
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
  "/Get_Purchase_Order_From_Proforma_Invoice/:Purchase_Order_Master_Id_?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Get_Purchase_Order_From_Proforma_Invoice(
        req.params.Purchase_Order_Master_Id_,
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
  "/Search_Dashboard_Customer/:Login_User_Id_ ?",
  function (req, res, next) {
    try {
      Purchase_Order_Master.Search_Dashboard_Customer(
        req.params.Login_User_Id_,
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
router.get("/Search_Dashboard", function (req, res, next) {
  try {
    Purchase_Order_Master.Search_Dashboard(function (err, rows) {
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

module.exports = router;
