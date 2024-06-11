var express = require("express");
var router = express.Router();
var Item = require("../models/Item");
//  router.post('/Save_Item/',function(req,res,next)
//  {
//  try
//  {
// Item.Save_Item(req.body, function (err, rows)
//  {
//   if (err)
//   {
//   res.json(err);
//   }
//   else
//   {
//     res.json(rows);
//   }
//   });
//   }
//  catch (e)
//  {
//  }
//  finally
//  {
//  }
//   });

router.post("/Save_Item/", async function (req, res, next) {
  try {
    const resp = await Item.Save_Item(req.body);
    return res.send(resp);
  } catch (e) {
    return res.send(e);
  }
});

router.get("/Search_Item/", function (req, res, next) {
  try {
    Item.Search_Item(
      req.query.Item_Name_,
      req.query.Group_Id_,
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
  "/Search_Item_Purchase/:Group_Id_?/:Item_Name_?",
  function (req, res, next) {
    try {
      Item.Search_Item_Purchase(
        req.query.Group_Id_,
        req.query.Item_Name_,
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
router.get("/Get_Item_Stock_Id/:Item_Id_?", function (req, res, next) {
  try {
    Item.Get_Item_Stock_Id(req.params.Item_Id_, function (err, rows) {
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
router.get("/Item_Typeahead/:Item_Name_?", function (req, res, next) {
  try {
    Item.Item_Typeahead(req.params.Item_Name_, function (err, rows) {
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
router.get("/HSN_Dropdown/", function (req, res, next) {
  try {
    Item.HSN_Dropdown(function (err, rows) {
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

router.get("/Load_Process/", function (req, res, next) {
  try {
    Item.Load_Process(function (err, rows) {
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

router.get("/Load_Damage_Type/", function (req, res, next) {
  try {
    Item.Load_Damage_Type(function (err, rows) {
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

router.get("/Delete_Item/:Item_Id_?", function (req, res, next) {
  try {
    Item.Delete_Item(req.params.Item_Id_, function (err, rows) {
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

router.get("/Get_Stock_Item_Typeahead", function (req, res, next) {
  try {
    Item.Get_Stock_Item_Typeahead(
      req.query.ItemName_,
      req.query.Item_Group_,
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
router.get("/Search_Item_Typeahead/", function (req, res, next) {
  try {
    Item.Search_Item_Typeahead(
      req.query.ItemName_,
      req.query.Group_Id_,
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

router.get("/Get_Stock_Item_Typeahead_PO/", function (req, res, next) {
  try {
    Item.Get_Stock_Item_Typeahead_PO(
      req.query.ItemName_,
      req.query.Item_Group_,
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

router.get("/Get_Stock_Item_Typeahead_PO_te/", function (req, res, next) {
  try {
    Item.Get_Stock_Item_Typeahead_PO_te(
      req.query.ItemName_,
      req.query.Item_Group_,
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
  "/Get_Stock_Item_Typeahead_PO2/:Stock_Id_ ?/:ItemId_?/:ItemName_?",
  function (req, res, next) {
    try {
      Stock_Transfer_Master.Get_Stock_Item_Typeahead_PO2(
        req.params.Stock_Id_,
        req.params.ItemId_,
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

router.get("/Get_Item_Data/:Item_Id_?", async (req, res, next) => {
  try {
    const result = await Item.Get_Item_Data(req.params.Item_Id_);
    res.json(result);
  } catch (e) {
    res.send(e);
  } finally {
  }
});
module.exports = router;
