var express = require("express");
var router = express.Router();
var Login = require("../models/Login");
const jwt = require('jsonwebtoken');

const config=require('../config.json');

router.get("/Login_Check/:userName?/:password?", function(req, res, next) {
try {
Login.Login_Check(req.params.userName, req.params.password, function(
err,
rows
) 
{
if (err) 
{
  res.json(err);
} 
else 
{
  const token = jwt.sign({ sub: rows[0][0] }, config.secret);
  res.json({...rows,token});
}
});
}
 catch (e)
  {
}
 finally
  {
}
});
router.get("/Login_User_Check/:userName?/:password?", function(req, res, next) {
try {
Login.Login_User_Check(req.params.userName, req.params.password, function(  err,rows) 
{
if (err) 
{
  
res.json(err);
} 
else 
{
const token = jwt.sign({ sub: rows[0][0] }, config.secret);
res.json({...rows,token});
}
});
} catch (e) {
} finally {
}
});
module.exports = router;
