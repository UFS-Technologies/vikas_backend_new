var express = require("express");
var router = express.Router();
var Waste_Out_Master = require("../models/Waste_Out_Master");
router.post("/Save_Waste_Out_Master/", async function (req, res, next) {
  try {
    const resp = await Waste_Out_Master.Save_Waste_Out_Master(req.body);
    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/Search_Waste_Out_Master/", function (req, res, next) {
  try {
    Waste_Out_Master.Search_Waste_Out_Master(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Client_Accounts_Id_,
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
  "/Get_Waste_Out_Details/:Waste_Out_Master_Id_?",
  function (req, res, next) {
    try {
      Waste_Out_Master.Get_Waste_Out_Details(
        req.params.Waste_Out_Master_Id_,
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
  "/Delete_Waste_Out_Master/:Waste_Out_Master_Id_?/:Company_Id_ ?",
  function (req, res, next) {
    try {
      Waste_Out_Master.Delete_Waste_Out_Master(
        req.params.Waste_Out_Master_Id_,
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

router.post("/Save_Gate_Pass_Master/", async function (req, res, next) {
  try {
    const resp = await Waste_Out_Master.Save_Gate_Pass_Master(req.body);
    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/Search_Gate_Pass_Master/", function (req, res, next) {
  try {
    Waste_Out_Master.Search_Gate_Pass_Master(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Client_Accounts_Id_,
      req.query.Pass_No,
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
  "/Get_Gate_Pass_Details/:Gate_Pass_Master_Id_?",
  function (req, res, next) {
    try {
      Waste_Out_Master.Get_Gate_Pass_Details(
        req.params.Gate_Pass_Master_Id_,
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
  "/Delete_Gate_Pass_Master/:Gate_Pass_Master_Id_?",
  function (req, res, next) {
    try {
      Waste_Out_Master.Delete_Gate_Pass_Master(
        req.params.Gate_Pass_Master_Id_,
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

router.post("/Save_Gate_Pass_In_Master/", async function (req, res, next) {
  try {
    const resp = await Waste_Out_Master.Save_Gate_Pass_In_Master(req.body);
    return res.send(resp);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});

router.get("/Search_Gate_Pass_In_Master/", function (req, res, next) {
  try {
    Waste_Out_Master.Search_Gate_Pass_In_Master(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Client_Accounts_Id_,
      req.query.Pass_No,
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
  "/Get_Gate_Pass_In_Details/:Gate_Pass_In_Master_Id_?",
  function (req, res, next) {
    try {
      Waste_Out_Master.Get_Gate_Pass_In_Details(
        req.params.Gate_Pass_In_Master_Id_,
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
  "/Delete_Gate_Pass_In_Master/:Gate_Pass_In_Master_Id_?",
  function (req, res, next) {
    try {
      Waste_Out_Master.Delete_Gate_Pass_In_Master(
        req.params.Gate_Pass_In_Master_Id_,
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
router.get("/Load_Pass_Type", function (req, res, next) {
  try {
    Waste_Out_Master.Load_Pass_Type(function (err, rows) {
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
