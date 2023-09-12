exports.projectcontroller =(req, res) => {
    
    
}


const Project = require('../models/project');

exports.listProjects = (req, res) => {
    Project.fetchAll((data) => {
        res.send(data);
    })
}



/*
const fs = require('fs');
const path = require('path');

exports.listProjectsV1 = (req, res) => {
    // fetch the file
    const pathToData = path.join(path.dirname(process.mainModule.filename), 'data', 'projects.json');

    fs.readFile(pathToData, (err, fileContent) => {
        if(err) {
            return res.send({data: []});
        }
        // parse the content
        const data = JSON.parse(fileContent);

        // send it
        res.send({status: 'success', data: data});
    })
};
*/