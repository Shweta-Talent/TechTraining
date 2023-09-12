const cloudinary=require('cloudinary').v2
const dotenv=require('dotenv')
dotenv.config()
cloudinary.config(
    {
        cloud_name:process.env.CLOUD_NAME,
        cloud_api_ky:process.env.CLOUDINARY_API_KEY,
        cloud_api_secret:process.env.CLOUDINARY_API_SECRET,
    }
)

module.exports=cloudinary;
exports.uploads=(file,folder)=>{
    return new Promise(resolve =>{
        cloudinary.UploadStream.upload(file,(result)=>
            {resolve({
                url:result.url,
                 id:result.public_id,
            })}
            ,{
                resource_type:"auto",
                folder:folder,
            }
           
        )})}
       
        
    

    
    
    
