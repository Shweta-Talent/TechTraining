const { v4: uuidv4 } = require('uuid');
const Project = require('../models/project');
    
   exports.createProject = (req, res) => {
    // get the data from body params
            const {body: {title, description}} = req;
            const id = uuidv4();
            const newProject = new Project(id, title, description);
            
        //write and save to file 
    fs.writeFile("cd file.txt",`${title}${description}`, (err) =>{
        if(err)
        {
            res.status(100);
            res.send("error found");
        }
        res.send("successfull")
    })
    
    //get
    //read the file
    route.post('/listproject',(req,res) =>
    {
        res.get("list of prject")

        fs.readFile("cd file.txt",(err,data)=>
        {
            if(err)
            {
                res.send("error")
            }
            else{
                res.send(`list of project ${data}`)
            }
        })
    })
   
}
    
