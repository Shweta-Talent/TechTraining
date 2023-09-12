const multer =require('multer')

const storage=multer.diskStorage({
    filename :function(req,file,cb){
        cb(null,originalname)
    },
    filename:function(res,file,cb){
        cb(null,new Date().toISOString()+'-'+file.originalname)
    }
})

const filefilter=(req,file,cb)=>{
    if(file.mimetype==='image/jpeg' || file.mimetype==='image/png') 
    {
        cb(null,true)
    }
    else
    cb({message:"unsupport file"},false)}

    const upload =multer({
        storage:storage,
       
    })
module.exports=upload;
