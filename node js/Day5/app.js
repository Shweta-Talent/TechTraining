const express= require('express')
const mongoose = require('mongoose');
const multer  = require('multer')
const routeNo=require('./routes/updateNo')
const bodyParser=require('body-parser')
const upload=require('./uploads/multer')
const cloudinary=require('./uploads/cloudinary')
const app = express();
const fs=require('fs')
const path=require('path')


app.get('/upload-image',(res,req)=>{
  res.send("heloo ")
})

app.post('/uploadimage',upload.single('image'),function(req,res){
cloudinary.uploader.upload(req.file.path,function(err,result){
  if(err){
    console.log(err);
    return res.status(500).json({
      success:true,
      message:"error"
    })
  }
  res.status(200).json({
    success:true,
    message:"uploaded",
    data : result
  })
})
})


// const fileFilter = (req, file, cb) => {
//     if (
//         file.mimetype === "image/png" ||
//         file.mimetype === "image/jpg" ||
//         file.mimetype === "image/jpeg"
//     ) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };

app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single("cover")
);
app.use("/images", express.static(path.join(__dirname, "images")));

// const uploader=async(path)=> await cloudinary.uploads(path,'Images'),
// if(req.method==='POST')
// {
//   const urls=[],
//   const files:req.files
//   for(const file of files)
//   {
// const{ path}:file
// const newPath=await cloudinary.uploader(path)
// url.push(newPath)
// fs.unlinkSync(path)
//   }
//   res.status(200).json({
//     message:'upload successfully ',
//     data : urls
//   })
// }
// else
// {
// res.status(405).json({
//   err:'image not ploaded'
// })
// }
// })


mongoose.connect('mongodb+srv://shwetat:mHNCTQ2du3CpqkNI@titans.1kizif5.mongodb.net/')
  .then(() => {
    console.log('Connected!')
    app.listen(3002)
  });
