/***
 * Multer helper 
 * Import this module to router to use
 */
const multer = require('multer');
const uuidv1 = require('uuid/v1');

const storage = multer.diskStorage(
    {
  
      destination: function (req, file, cb) {
        cb(null, 'uploads')
      },
      filename: function (req, file, cb) {
        let Extension_Temp = '';
        if (req.body.File_Extension) {
          Extension_Temp = req.body.File_Extension.indexOf(".");
          Extension_Temp = req.body.File_Extension.substring(Extension_Temp, req.body.File_Extension.length);
        }
        cb(null, uuidv1() + Extension_Temp);
      }
    }
  )
  var upload = multer({ storage: storage });
  module.exports=upload;