const path=require('path')
const fs=require('fs')
 
function readFile() { JSON.parse(fs.readFileSync('cd project.json'))  //sync
        fs.readFile("cd project.json",(err,data) =>{
            data;}
       ) };

//module is function to reuse
class Project{
    constructor (title,id,description){
       this.id=id;
       this.description=description;
       this.id=id;

    }

    //save in json file
    save(){
//check if json file exists or not
const jsonExists = fs.existsSync('file.json')

if(!jsonExists)
{
    fs.writeFileSync('file.json' , JSON.stringify([])) //if not there then create
    //in json , js cannot write as need to stringify => json string  while  store --> js to json
    // to read anything from json then parse json.parse while read --> json to js
}
    }

    //static method to use it without creating object
    static fetchAllData(){
        readFile()
    }
    
}

module.export = Project
