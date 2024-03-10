 var db=require('../dbconnection');
 var fs = require('fs');
 const storedProcedure=require('../helpers/stored-procedure');
 var User_Details=
 { 
 Save_User_Details: async function (User_Details_) 
 {
       
         return new Promise(async (rs,rej)=>{
        const pool = db.promise();
         let result1;
          var connection = await pool.getConnection();
         await connection.beginTransaction();
         var User_Menu_Selection_ = User_Details_.User_Menu_Selection_Data;
         
          try
           {
            const result1 = await(new storedProcedure('Save_User_Details',[User_Details_.User_Details_Id,User_Details_.User_Details_Name,User_Details_.Password,
             User_Details_.Working_Status,User_Details_.User_Type,User_Details_.Role_Id,User_Details_.Address1,
             User_Details_.Address2,User_Details_.Address3,User_Details_.Address4,User_Details_.Pincode,
             User_Details_.Mobile,User_Details_.Email,User_Details_.Employee_Id,User_Menu_Selection_], connection)).result();
            
              await connection.commit();
              connection.release();
              rs( result1);
            }
            catch (err) {           
            await connection.rollback();
            rej(err);
            }   
})
},
 Delete_User_Details:function(User_Details_Id_,callback)
   { 
   return db.query("CALL Delete_User_Details(@User_Details_Id_ :=?)",[User_Details_Id_],callback);
   } ,
   Get_Menu_Status:function(Login_User_Id,Menu_Id_,callback)
   { 
     return db.query("CALL Get_Menu_Status(@Login_User_Id :=?,@Menu_Id_ :=?)", [Login_User_Id,Menu_Id_],callback);
   } ,
 Get_User_Details:function(User_Details_Id_,callback)
   { 
   return db.query("CALL Get_User_Details(@User_Details_Id_ :=?)",[User_Details_Id_],callback);
   } ,
 Search_User_Details:function(User_Details_Name_,callback)
   { 
   if (User_Details_Name_==='undefined'||User_Details_Name_===''||User_Details_Name_===undefined )
   User_Details_Name_='';
   return db.query("CALL Search_User_Details(@User_Details_Name_ :=?)",[User_Details_Name_],callback);
   },
   Search_User_Typeahead:function(User_Details_Name_,callback)
   { 
   if (User_Details_Name_==='undefined'||User_Details_Name_===''||User_Details_Name_===undefined )
   User_Details_Name_='';
   return db.query("CALL Search_User_Typeahead(@User_Details_Name_ :=?)",[User_Details_Name_],callback);
   },
 Get_Menu_Permission:function(User_Id_,callback)
   { 
   return db.query("CALL Get_Menu_Permission(@User_Id_ :=?)",[User_Id_],callback);
   },
   Get_Menu_User_Permission:function(callback)
   { 
   return db.query("CALL Get_Menu_User_Permission()",[],callback);
   },
   Get_Menu_Customer:function(callback)
   { 
   return db.query("CALL Get_Menu_Customer()",[],callback);
   },
 User_Employee:function(User_Details_Id_,callback)
   { 
   return db.query("CALL User_Employee(@User_Details_Id_ :=?)",[User_Details_Id_],callback);
   },
   Get_Last_Bill_Number:function(Store_Id_,callback)
   { 
   return db.query("CALL Get_Last_Bill_Number(@Store_Id_ :=?)",[Store_Id_],callback);
   },
 Get_User_Type:function(callback)
   { 
   return db.query("CALL Get_User_Type()",[],callback);
   },
 Get_Users_Load_Data: async function () 
   {
   const User_Type=await (new storedProcedure('Get_User_Type',  [])).result();
   const User_Menu_Selection = await (new storedProcedure('Search_User_Menu_Selection', [])).result();
   return {User_Type,User_Menu_Selection};    
   },
Get_User_Details_Edit:function(User_Details_Id_,callback)
   { 
   return db.query("CALL Get_User_Details_Edit(@User_Details_Id_ :=?)",[User_Details_Id_],callback);
   },
};
  module.exports=User_Details;

