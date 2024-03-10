

var http = require('http');
var server = http.Server(app);

//var socketIO = require('socket.io');
//var io = socketIO(server);

const port = process.env.PORT || 3503;


var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var multer = require('multer');
var multerupload = multer({ dest: 'fileprint/' })
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require("cors");
const jwt = require('./helpers//jwt');
var routes = require("./routes/index");
const errorHandler = require('./helpers/error-handler');
var Login = require("./routes/Login");
var Account_Group = require('./routes/Account_Group');
var Account_Years = require('./routes/Account_Years');
var Accounts = require('./routes/Accounts');
var Attendance_Details = require('./routes/Attendance_Details');
var Attendance_Master = require('./routes/Attendance_Master');
var Attendance_Status = require('./routes/Attendance_Status');
var Client_Accounts = require('./routes/Client_Accounts');
var Contra_Entry = require('./routes/Contra_Entry');
var Damage_Details = require('./routes/Damage_Details');
var Damage_Master = require('./routes/Damage_Master');
var Employee_Details = require('./routes/Employee_Details');
var Employee_Location = require('./routes/Employee_Location');
var General_Settings = require('./routes/General_Settings');
var HSN = require('./routes/HSN');
var Item = require('./routes/Item');
var Item_Group = require('./routes/Item_Group');
var Journal_Entry = require('./routes/Journal_Entry');
var Location = require('./routes/Location');
var Menu = require('./routes/Menu');
var Payment_Reference = require('./routes/Payment_Reference');
var Payment_Voucher = require('./routes/Payment_Voucher');
var Primary_Details = require('./routes/Primary_Details');
var Purchase_Details = require('./routes/Purchase_Details');
var Purchase_Master = require('./routes//Purchase_Master');
var Receipt_Reference = require('./routes/Receipt_Reference');
var Receipt_Voucher = require('./routes/Receipt_Voucher');
var Salary_Calculation_Details = require('./routes/Salary_Calculation_Details');
var Salary_Calculation_Master = require('./routes/Salary_Calculation_Master');
var Sale_Unit = require('./routes/Sale_Unit');
var Sales_Details = require('./routes/Sales_Details');
var Sales_Master = require('./routes/Sales_Master');
var Sales_Return_Details = require('./routes/Sales_Return_Details');
var Sales_Return_Master = require('./routes/Sales_Return_Master');
var Stock = require('./routes/Stock');
var Stock_Add_Details = require('./routes/Stock_Add_Details');
var Stock_Add_Master = require('./routes/Stock_Add_Master');
var Stock_Details = require('./routes/Stock_Details');
var Stock_Transfer_Details = require('./routes/Stock_Transfer_Details');
var Stock_Transfer_Master = require('./routes/Stock_Transfer_Master');
var User_Details = require('./routes/User_Details');
var Purchase_Type = require('./routes/Purchase_Type');
var Shipment_Plan = require('./routes/Shipment_Plan');
var Process_Details =  require('./routes/Process_Details');
 var Press_Details = require('./routes/Press_Details');
var Shift_Details = require('./routes/Shift_Details');
var Shipment_Method = require('./routes/Shipment_Method');
var Proforma_Invoice_Master = require('./routes/Proforma_Invoice_Master');
var Purchase_Order_Master = require('./routes//Purchase_Order_Master');
var Waste_In_Master = require('./routes/Waste_In_Master');
var Waste_Out_Master = require('./routes/Waste_Out_Master');
var Packing_Plan = require('./routes/Packing_Plan');
var Gate_Pass_Type = require('./routes/Gate_Pass_Type');
var Purchase_Return_Master= require('./routes/Purchase_Return_Master');
var Production=require('./routes/Production');
var Shift_Start=require('./routes/Shift_Start');
var Damaged_Item=require('./routes/Damaged_Item');
var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);
app.use("/Login", Login);
app.use(jwt());
app.use('/Account_Group',Account_Group);
app.use('/Account_Years',Account_Years);
app.use('/Accounts',Accounts);
app.use('/Attendance_Details',Attendance_Details);
app.use('/Attendance_Master',Attendance_Master);
app.use('/Attendance_Status',Attendance_Status);
app.use('/Client_Accounts',Client_Accounts);
app.use('/Contra_Entry',Contra_Entry);
app.use('/Damage_Details',Damage_Details);
app.use('/Damage_Master',Damage_Master);
app.use('/Employee_Details',Employee_Details);
app.use('/Employee_Location',Employee_Location);
app.use('/General_Settings',General_Settings);
app.use('/HSN',HSN);
app.use('/Item',Item);
app.use('/Item_Group',Item_Group);
app.use('/Journal_Entry',Journal_Entry);
app.use('/Location',Location);
app.use('/Menu',Menu);
app.use('/Payment_Reference',Payment_Reference);
app.use('/Payment_Voucher',Payment_Voucher);
app.use('/Primary_Details',Primary_Details);
app.use('/Purchase_Details',Purchase_Details);
app.use('/Purchase_Master',Purchase_Master);
app.use('/Receipt_Reference',Receipt_Reference);
app.use('/Receipt_Voucher',Receipt_Voucher);
app.use('/Salary_Calculation_Details',Salary_Calculation_Details);
app.use('/Salary_Calculation_Master',Salary_Calculation_Master);
app.use('/Sale_Unit',Sale_Unit);
app.use('/Sales_Details',Sales_Details);
app.use('/Sales_Master',Sales_Master);
app.use('/Sales_Return_Details',Sales_Return_Details);
app.use('/Sales_Return_Master',Sales_Return_Master);
app.use('/Stock',Stock);
app.use('/Stock_Add_Details',Stock_Add_Details);
app.use('/Stock_Add_Master',Stock_Add_Master);
app.use('/Stock_Details',Stock_Details);
app.use('/Stock_Transfer_Details',Stock_Transfer_Details);
app.use('/Stock_Transfer_Master',Stock_Transfer_Master);
app.use('/User_Details',User_Details);

app.use('/Purchase_Type',Purchase_Type);
app.use('/Shipment_Plan',Shipment_Plan);
app.use('/Process_Details',Process_Details);
app.use('/Press_Details',Press_Details);
app.use('/Shift_Details',Shift_Details);
app.use('/Shipment_Method',Shipment_Method);
app.use('/Proforma_Invoice_Master',Proforma_Invoice_Master);
app.use('/Purchase_Order_Master',Purchase_Order_Master);
app.use('/Waste_In_Master',Waste_In_Master);
app.use('/Waste_Out_Master',Waste_Out_Master)
app.use('/Packing_Plan',Packing_Plan)
app.use('/Gate_Pass_Type',Gate_Pass_Type)
app.use('/Purchase_Return_Master',Purchase_Return_Master)
app.use('/Production',Production)
app.use('/Shift_Start',Shift_Start)
app.use('/Damaged_Item',Damaged_Item)

app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
 
});
// if (app.get("env") === "development") {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render("error", {
//       message: err.message,
//       error: err
//     });
//   });
// }

// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render("error", {
//     message: err.message,
//     error: {}
//   });
// });

// io.on('connection', (socket) => {

//   socket.on('new-message', (message) => {
//     //sio.emit(message);
//     io.emit('new-message', message);
//   });
// });

server.listen(port, () => {
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
module.exports = app;





















