var express = require("express");
var router = express.Router();
var Waste_In_Master = require("../models/Waste_In_Master");
router.post("/Save_Waste_In_Master/", async function (req, res, next) {
  try {
    const resp = await Waste_In_Master.Save_Waste_In_Master(req.body);
    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});

router.get(
  "/Search_Waste_In_Master/:Is_Date_Check_?/:FromDate_?/:ToDate_?/:Client_Accounts_Id_?",
  function (req, res, next) {
    try {
      Waste_In_Master.Search_Waste_In_Master(
        req.params.Is_Date_Check_,
        req.params.FromDate_,
        req.params.ToDate_,
        req.params.Client_Accounts_Id_,
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

router.get("/Search_Waste_In_Out_Report/", async (req, res, next) => {
  try {
    const result = await Waste_In_Master.Search_Waste_In_Out_Report(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Client_Accounts_Id_,
      req.query.Company_Id_,
      req.query.Warehouse_Id_,
      req.query.Item_Id_
    );
    res.json(result);
  } catch (e) {
    res.send(e);
  } finally {
  }
});
router.get(
  "/Get_Waste_In_Master/:Waste_In_Master_Id_?",
  function (req, res, next) {
    try {
      Waste_In_Master.Get_Waste_In_Master(
        req.params.Waste_In_Master_Id_,
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
  "/Delete_Waste_In_Master/:Waste_In_Master_Id_?/:Company_Id_ ?",
  function (req, res, next) {
    try {
      Waste_In_Master.Delete_Waste_In_Master(
        req.params.Waste_In_Master_Id_,
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
      console.log(e);
    } finally {
    }
  }
);

module.exports = router;
