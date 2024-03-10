var express = require("express");
var router = express.Router();
var Attendance_Master = require("../models/Attendance_Master");

router.post("/Save_Check_In/", async function (req, res, next) {
  try {
    const resp = await Attendance_Master.Save_Check_In(req.body);
    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});
router.get("/Load_Employee", function (req, res, next) {
  try {
    Attendance_Master.Load_Employee(function (err, rows) {
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

router.get("/Load_Employee_Packing", function (req, res, next) {
  try {
    Attendance_Master.Load_Employee_Packing(function (err, rows) {
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

router.get("/Search_Check_In/", function (req, res, next) {
  try {
    Attendance_Master.Search_Check_In(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
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

router.get("/Search_Check_In_Report/", function (req, res, next) {
  try {
    Attendance_Master.Search_Check_In_Report(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
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
router.get("/Get_Check_In/:Attendance_Master_Id_?", function (req, res, next) {
  try {
    Attendance_Master.Get_Check_In(
      req.params.Attendance_Master_Id_,
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
  "/Delete_Check_In/:Attendance_Master_Id_?",
  function (req, res, next) {
    try {
      Attendance_Master.Delete_Check_In(
        req.params.Attendance_Master_Id_,
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

router.post("/Save_Check_Out/", async function (req, res, next) {
  console.log(req);
  try {
    const resp = await Attendance_Master.Save_Check_Out(req.body);
    return res.send(resp);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});

router.get("/Search_Check_Out/", function (req, res, next) {
  try {
    Attendance_Master.Search_Check_Out(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
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

router.get("/Search_Check_Out_Report/", function (req, res, next) {
  try {
    Attendance_Master.Search_Check_Out_Report(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
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

router.get("/Get_Check_Out/:Attendance_Master_Id_?", function (req, res, next) {
  try {
    Attendance_Master.Get_Check_Out(
      req.params.Attendance_Master_Id_,
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
  "/Delete_Check_Out/:Attendance_Master_Id_?",
  function (req, res, next) {
    try {
      Attendance_Master.Delete_Check_Out(
        req.params.Attendance_Master_Id_,
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

router.get("/Search_Check_In_Details/", function (req, res, next) {
  try {
    Attendance_Master.Search_Check_In_Details(
      req.query.Is_Date_Check_,
      req.query.FromDate_,
      req.query.ToDate_,
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

router.get("/Search_attendance_Report/", function (req, res, next) {
  try {
    Attendance_Master.Search_attendance_Report(
      req.query.Is_Date_Check_,
      req.query.From_Date_,
      req.query.To_Date_,
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
