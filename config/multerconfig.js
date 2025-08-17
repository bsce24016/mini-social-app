const multer=require('multer')
const path=require('path');
const crypto=require('crypto');
const storage = multer.diskStorage({           //file folder setup
  destination: function (req, file, cb) {
    cb(null, './public/image/upload')
  },
  filename: function (req, file, cb) {             //filename setup
    crypto.randomBytes(12,function(err,name){
        const fn = name.toString('hex')+path.extname(file.originalname);
        cb(null,fn);
    })
  }
})

const upload = multer({ storage: storage })           //variable storage
module.exports=upload;
