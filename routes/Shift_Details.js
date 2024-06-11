var express = require("express");
var router = express.Router();
var Shift_Details = require("../models/Shift_Details");

router.post("/Save_Shift_Details/", function (req, res, next) {
  try {
    Shift_Details.Save_Shift_Details(req.body, function (err, rows) {
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
  "/Search_Shift_Details/:Shift_Details_Name_?",
  function (req, res, next) {
    try {
      Shift_Details.Search_Shift_Details(
        req.params.Shift_Details_Name_,
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
  "/Delete_Shift_Details/:Shift_Details_Id_?",
  function (req, res, next) {
    try {
      Shift_Details.Delete_Shift_Details(
        req.params.Shift_Details_Id_,
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
router.post("/Save_Shift_End/", async function (req, res, next) {
  try {
    const resp = await Shift_Details.Save_Shift_End(req.body);
    return res.send(resp);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});
router.get("/Search_Shift_End/", function (req, res, next) {
  try {
    Shift_Details.Search_Shift_End(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Production_No,
      req.query.Process_Details_Id,
      req.query.ItemId,
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
router.get("/Search_Employee_Shift_Report/", function (req, res, next) {
  try {
    Shift_Details.Search_Employee_Shift_Report(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Employee_Id_,
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
router.get("/Search_Employee_Overtime_Master/", function (req, res, next) {
  try {
    Shift_Details.Search_Employee_Overtime_Master(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Shift_Id_,
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
router.get("/Search_Employee_Work_Summary_Report/", function (req, res, next) {
  try {
    Shift_Details.Search_Employee_Work_Summary_Report(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Employee_Id_,
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
  "/Delete_Shift_End/:Shift_End_Master_Id_?/:Company_Id_ ?",
  function (req, res, next) {
    try {
      Shift_Details.Delete_Shift_End(
        req.params.Shift_End_Master_Id_,
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
  "/Get_Shift_End_details/:Shift_End_Master_Id_?",
  function (req, res, next) {
    try {
      Shift_Details.Get_Shift_End_details(
        req.params.Shift_End_Master_Id_,
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
router.get("/Search_Production_Master_Typeahead/", function (req, res, next) {
  try {
    Shift_Details.Search_Production_Master_Typeahead(
      req.query.Production_Number_,
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
  "/Get_Production_Process/:Production_Master_Id_?/:Type_?",
  function (req, res, next) {
    try {
      Shift_Details.Get_Production_Process(
        req.params.Production_Master_Id_,
        req.params.Type_,
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
  "/Get_Production_Process_Packing/:Production_Master_Id_?/:Type_?",
  function (req, res, next) {
    try {
      Shift_Details.Get_Production_Process_Packing(
        req.params.Production_Master_Id_,
        req.params.Type_,
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
  "/Get_Process_Employee/:Process_Id_?/:Production_No_ ?",
  function (req, res, next) {
    try {
      Shift_Details.Get_Process_Employee(
        req.params.Process_Id_,
        req.params.Production_No_,
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
router.post("/Save_Packing/", async function (req, res, next) {
  try {
    const resp = await Shift_Details.Save_Packing(req.body);
    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});
router.post("/Save_Employee_Overtime_Master/", async function (req, res, next) {
  try {
    const resp = await Shift_Details.Save_Employee_Overtime_Master(req.body);
    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});
router.get(
  "/Get_Packing_details/:Packing_Master_Id_?",
  function (req, res, next) {
    try {
      Shift_Details.Get_Packing_details(
        req.params.Packing_Master_Id_,
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
router.get("/Search_Packing/", function (req, res, next) {
  try {
    Shift_Details.Search_Packing(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
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

router.get("/Get_Packing_Report/", async (req, res, next) => {
  try {
    const result = await Shift_Details.Get_Packing_Report(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Production_No,
      req.query.Item_Id_,
      req.query.Warehouse_Id,
      req.query.Pallet_Id,
      req.query.Company_Id
    );
    res.json(result);
  } catch (e) {
    res.send(e);
  } finally {
  }
});
router.get(
  "/Delete_Packing/:Packing_Master_Id_?/:Company_Id_ ?",
  function (req, res, next) {
    try {
      Shift_Details.Delete_Packing(
        req.params.Packing_Master_Id_,
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
  "/Get_Employee_Overtime_Details/:Employee_Overtime_Master_Id_?",
  function (req, res, next) {
    try {
      Shift_Details.Get_Employee_Overtime_Details(
        req.params.Employee_Overtime_Master_Id_,
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

router.get("/Load_Position/", function (req, res, next) {
  try {
    Shift_Details.Load_Position(function (err, rows) {
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

router.get("/Get_Shift_End_Report/", async (req, res, next) => {
  try {
    const result = await Shift_Details.Get_Shift_End_Report(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Production_No,
      req.query.Warehouse_Id,
      req.query.ItemId,
      req.query.Company_Id
    );
    res.json(result);
  } catch (e) {
    res.send(e);
  } finally {
  }
});
module.exports = router;
