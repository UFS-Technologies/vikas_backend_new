var express = require("express");
var router = express.Router();
var Shift_Start = require("../models/Shift_Start");

router.post("/Save_Shift_Start/", async function (req, res, next) {
  try {
    const resp = await Shift_Start.Save_Shift_Start(req.body);
    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});



router.post("/Save_Shift_Start_Packing/", async function (req, res, next) {
  try {
    const resp = await Shift_Start.Save_Shift_Start_Packing(req.body);
    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});


router.get("/Search_Shift_Start/", function (req, res, next) {
  try {
    Shift_Start.Search_Shift_Start(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.PO_No_,
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


router.get("/Search_Shift_Start_Packing/", function (req, res, next) {
  try {
    Shift_Start.Search_Shift_Start_Packing(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.PO_No_,
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
  "/Get_Shift_Start_From_Production/:Production_Master_Id_?",
  function (req, res, next) {
    try {
      Shift_Start.Get_Shift_Start_From_Production(
        req.params.Production_Master_Id_,
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
  "/Get_Shift_Start_From_Packing/:Production_Master_Id_?",
  function (req, res, next) {
    try {
      Shift_Start.Get_Shift_Start_From_Packing(
        req.params.Production_Master_Id_,
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

router.get("/Search_Stock_Use_Report/", function (req, res, next) {
  try {
    Shift_Start.Search_Stock_Use_Report(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Item_Id_,
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
  "/Delete_Shift_Start/:Shift_Start_Master_Id_?/:Company_Id_ ?",
  function (req, res, next) {
    try {
      Shift_Start.Delete_Shift_Start(
        req.params.Shift_Start_Master_Id_,
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
  "/Delete_Shift_Start_Packing/:Shift_Start_Master_Id_?/:Company_Id_ ?",
  function (req, res, next) {
    try {
      Shift_Start.Delete_Shift_Start_Packing(
        req.params.Shift_Start_Master_Id_,
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
  "/Get_Shift_Start/:Shift_Start_Master_Id_?",
  function (req, res, next) {
    try {
      Shift_Start.Get_Shift_Start(
        req.params.Shift_Start_Master_Id_,
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
  "/Get_Shift_Start_Packing/:Shift_Start_Master_Id_?",
  function (req, res, next) {
    try {
      Shift_Start.Get_Shift_Start_Packing(
        req.params.Shift_Start_Master_Id_,
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
  "/Get_Production_To_Shift_Start/:Shift_Start_Master_Id_?",
  function (req, res, next) {
    try {
      Shift_Start.Get_Production_To_Shift_Start(
        req.params.Shift_Start_Master_Id_,
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
  "/Get_Shift_Start_To_Shift_End/:Shift_Start_Master_Id_?",
  function (req, res, next) {
    try {
      Shift_Start.Get_Shift_Start_To_Shift_End(
        req.params.Shift_Start_Master_Id_,
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
  "/Get_Shift_End_From_Shift_Start/:Shift_End_Master_Id_?",
  function (req, res, next) {
    try {
      Shift_Start.Get_Shift_End_From_Shift_Start(
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

router.get(
  "/Get_Shift_End_From_Production/:Production_Master_Id_?",
  function (req, res, next) {
    try {
      Shift_Start.Get_Shift_End_From_Production(
        req.params.Production_Master_Id_,
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



router.get("/Search_Stock_Use_Consolidated_Report/", function (req, res, next) {
  try {
    Shift_Start.Search_Stock_Use_Consolidated_Report(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Item_Id_,
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

module.exports = router;
