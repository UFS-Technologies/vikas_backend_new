var express = require("express");
var router = express.Router();
var Packing_Plan = require("../models/Packing_Plan");
var request = require("request");

router.post("/Save_Packing_Plan_Master/", async function (req, res, next) {
  try {
    const resp = await Packing_Plan.Save_Packing_Plan_Master(req.body);

    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/Search_Packing_Plan_Master/", function (req, res, next) {
  try {
    Packing_Plan.Search_Packing_Plan_Master(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Packing_Plan_No_,
      function (err, rows) {
        if (err) {
          res.json(err);
          console.log('err: ', err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log('e: ', e);
  } finally {
  }
});
router.get("/Search_Packing_Plan_Master_Report/", function (req, res, next) {
  try {
    Packing_Plan.Search_Packing_Plan_Master_Report(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
      req.query.Packing_Plan_No_,
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
  "/Get_Packing_Plan_Master/:Packing_Plan_Master_Id_?",
  function (req, res, next) {
    try {
      Packing_Plan.Get_Packing_Plan_Master(
        req.params.Packing_Plan_Master_Id_,
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
  "/Delete_Packing_Plan_Master/:Packing_Plan_Master_Id_?/:Company_Id_ ?",
  function (req, res, next) {
    try {
      Packing_Plan.Delete_Packing_Plan_Master(
        req.params.Packing_Plan_Master_Id_,
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
