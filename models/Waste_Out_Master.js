var db = require("../dbconnection");
var fs = require("fs");
const storedProcedure = require("../helpers/stored-procedure");
var Waste_Out_Master = {
  Save_Waste_Out_Master: async function (Waste_Out_Master_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      console.log(Waste_Out_Master_);
      try {
        const result1 = await new storedProcedure(
          "Save_Waste_Out_Master",
          [
            Waste_Out_Master_.Waste_Out_Master_Id,
            Waste_Out_Master_.Client_Accounts_Id,
            Waste_Out_Master_.Date,
            Waste_Out_Master_.User_Id,
            Waste_Out_Master_.Company_Id,
            Waste_Out_Master_.Waste_Out_No,
            Waste_Out_Master_.Weigh_Bridge_No,
            Waste_Out_Master_.Description,
            Waste_Out_Master_.TotalAmount,
            Waste_Out_Master_.Waste_Out_Details,
          ],
          connection
        ).result();

        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        await connection.rollback();
        rej(err);
        var result2 = [{ Waste_Out_Master_Id: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },
  Get_Waste_Out_Details: function (Waste_Out_Master_Id_, callback) {
    return db.query(
      "CALL Get_Waste_Out_Details(@Waste_Out_Master_Id_ :=?)",
      [Waste_Out_Master_Id_],
      callback
    );
  },
  Delete_Waste_Out_Master: function (
    Waste_Out_Master_Id_,
    Company_Id_,
    callback
  ) {
    return db.query(
      "CALL Delete_Waste_Out_Master(@Waste_Out_Master_Id_ :=?,@Company_Id_ :=?)",
      [Waste_Out_Master_Id_, Company_Id_],
      callback
    );
  },
  Search_Waste_Out_Master: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    Client_Accounts_Id_,
    callback
  ) {
    return db.query(
      "call Search_Waste_Out_Master(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Client_Accounts_Id_ :=?)",
      [Is_Date_Check_, From_date_, To_date_, Client_Accounts_Id_],
      callback
    );
  },
  Save_Gate_Pass_Master: async function (Gate_Pass_Master_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      try {
        const result1 = await new storedProcedure(
          "Save_Gate_Pass_Master",
          [
            Gate_Pass_Master_.Gate_Pass_Master_Id,
            Gate_Pass_Master_.Employee_Id,
            Gate_Pass_Master_.Date,
            Gate_Pass_Master_.Vehicle_No,
            Gate_Pass_Master_.Pass_No,
            Gate_Pass_Master_.Pass_Type,
            Gate_Pass_Master_.User_Id,
            Gate_Pass_Master_.Description,
            Gate_Pass_Master_.Supplier_Name,
            Gate_Pass_Master_.Invoice_Date,
            Gate_Pass_Master_.Invoice_Number,
            Gate_Pass_Master_.Remarks,
            Gate_Pass_Master_.Driver_Name,
            Gate_Pass_Master_.Verified_By,
            Gate_Pass_Master_.Eway_No,
            Gate_Pass_Master_.Company_Id,
            Gate_Pass_Master_.Weighment_Slip_No,
            Gate_Pass_Master_.Weighment_Quantity,
            Gate_Pass_Master_.Gate_Pass_Details,
          ],
          connection
        ).result();
        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        await connection.rollback();
        rej(err);
        var result2 = [{ Gate_Pass_Master_Id: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },
  Get_Gate_Pass_Details: function (Gate_Pass_Master_Id_, callback) {
    return db.query(
      "CALL Get_Gate_Pass_Details(@Gate_Pass_Master_Id_ :=?)",
      [Gate_Pass_Master_Id_],
      callback
    );
  },
  Delete_Gate_Pass_Master: function (Gate_Pass_Master_Id_, callback) {
    return db.query(
      "CALL Delete_Gate_Pass_Master(@Gate_Pass_Master_Id_ :=?)",
      [Gate_Pass_Master_Id_],
      callback
    );
  },
  Search_Gate_Pass_Master: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    Client_Accounts_Id_,
    Pass_No,
    callback
  ) {
    return db.query(
      "call Search_Gate_Pass_Master(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Client_Accounts_Id_ :=?,@Pass_No :=?)",
      [Is_Date_Check_, From_date_, To_date_, Client_Accounts_Id_, Pass_No],
      callback
    );
  },
  Save_Gate_Pass_In_Master: async function (Gate_Pass_In_Master_) {
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      console.log( Gate_Pass_In_Master_.Gate_Pass_In_Details);
      var connection = await pool.getConnection();
      try {
        const result1 = await new storedProcedure(
          "Save_Gate_Pass_In_Master",
          [
            Gate_Pass_In_Master_.Gate_Pass_In_Master_Id,
            Gate_Pass_In_Master_.Employee_Id,
            Gate_Pass_In_Master_.Date,
            Gate_Pass_In_Master_.Vehicle_No,
            Gate_Pass_In_Master_.Pass_No,
            Gate_Pass_In_Master_.Pass_Type,
            Gate_Pass_In_Master_.User_Id,
            Gate_Pass_In_Master_.Description,
            Gate_Pass_In_Master_.Customer_Name,
            Gate_Pass_In_Master_.Chellan_number,
            Gate_Pass_In_Master_.Store_Number,
            Gate_Pass_In_Master_.Invoice_Date,
            Gate_Pass_In_Master_.Invoice_Number,
            Gate_Pass_In_Master_.Driver_Name,
            Gate_Pass_In_Master_.Verified_By,
            Gate_Pass_In_Master_.Company_Id,
            Gate_Pass_In_Master_.Arrival_Date,
            Gate_Pass_In_Master_.Weighment_Slip_No,
            Gate_Pass_In_Master_.Weighment_Quantity,
            Gate_Pass_In_Master_.Gate_Pass_In_Details,
          ],
          connection
        ).result();
        // if (result1[0].Gate_Pass_In_Master_Id_ >= 0) {
        //   let transporter = nodemailer.createTransport({
        //     host: 'smtp.gmail.com',
        //     port: 587,
        //     secure: false,
        //     requireTLS: true,
        //     auth: {
        //       user: 'teena@ufstechnologies.com',
        //       pass: 'teena1225'
        //     }
        //   });
        //   const mailOptions = {
        //     from: 'teena@ufstechnologies.com',
        //     to: result1[0].Email_,
        //     subject: 'Forgot Password Studyvisafinder',
        //     html: "Dear " + result1[0].Gate_Pass_In_Master_Id_ + ""
        //       + "<br/>We have received your Forgot password request. Following is your password to login on Studyvisafinder Console.<br/>"
        //       + "<br></br>"
        //       + "<br/> Password :  <br/>"
        //       + "<br></br>"
        //       + "<br/> Once logged in successfully, you will need to change the above password. <br/>"
        //       + "<br></br>"
        //       + "<br/> Best regards, <br/>"
        //       + "<br/> Studyvisafinder<br/>"
        //       + "<br></br>"
        //       + "<br/> Replies to this message are undeliverable and will not reach Studyvisafinder <br/>"
        //       + "<br/> Please do not reply. <br/>"
        //       + "<br/><br/>"

        //   };

        //   transporter.sendMail(mailOptions, function (err, info) {
        //     if (err)
        //       return 0;
        //     else
        //       return 1;
        //   });
        // }
        // else {
        //   return 0;
        // }
        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        await connection.rollback();
        rej(err);
        var result2 = [{ Gate_Pass_In_Master_Id_: 0 }];
        rs(result2);
      } finally {
        connection.release();
      }
    });
  },
  Get_Gate_Pass_In_Details: function (Gate_Pass_In_Master_Id_, callback) {
    return db.query(
      "CALL Get_Gate_Pass_In_Details(@Gate_Pass_Master_Id_ :=?)",
      [Gate_Pass_In_Master_Id_],
      callback
    );
  },
  Delete_Gate_Pass_In_Master: function (Gate_Pass_In_Master_Id_, callback) {
    return db.query(
      "CALL Delete_Gate_Pass_In_Master(@Gate_Pass_In_Master_Id_ :=?)",
      [Gate_Pass_In_Master_Id_],
      callback
    );
  },
  Search_Gate_Pass_In_Master: function (
    Is_Date_Check_,
    From_date_,
    To_date_,
    Client_Accounts_Id_,
    Pass_No,
    callback
  ) {
    return db.query(
      "call Search_Gate_Pass_In_Master(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Client_Accounts_Id_ :=?,@Pass_No :=?)",
      [Is_Date_Check_, From_date_, To_date_, Client_Accounts_Id_, Pass_No],
      callback
    );
  },
  Load_Pass_Type: function (callback) {
    return db.query("call Load_Pass_Type()", [], callback);
  },
};
module.exports = Waste_Out_Master;
