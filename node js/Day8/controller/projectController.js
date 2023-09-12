const express = require("express");
const projectmodel = require("../models/projectmodel");
const user = require("../models/usermodel");
const superHeroes = require("superheroes");

const skillsarray = [
    "swimming",
    "dancing",
    "playing",
    "sleeping",
    "eating",
    "travelling",
    "reading",
    "riding",
    "cycling",
    "singing",
  ];

function generateRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}
  const users = () => {
   userArr= ["riya", "priya", "siya", "hiya"];
    return userArr[generateRandomNumber(0,3)];
  };
  const randomskills = (skillsarray) => {
    let arr = [];
    no_of_skills = generateRandomNumber(0,5);
    for (let i = 0; i < no_of_skills; i++) {
      arr.push(skillsarray[generateRandomNumber(0,8)]);
    }
    return [... new Set(arr)];
  };

  
// exports.projectlist = async (req, res) => {
  
//   const {body: { offset, limit,filterBy }} = req;

// // let filterArray = filterBy.split(",")
// console.log(filterArray)
// const filterQuery = filterBy.length
//     ? { requiredskills: { $elemMatch: { $in: filterBy } } }
//     : {};

//     console.log(filterQuery)
//   const skillsRequired = await projectmodel.find(
//     filterQuery,
//     { title: 1, createdAt: 1, requiredSkills: 1 }
//   )
//     .populate({ path: "createdby", select: "projecttitle" })
//     .skip(offset)
//     .limit(limit || 10)
//     .sort({ createdby: 1, title: 1 });

    
// };

exports.CreateProject = async (req, res) => {
  
  const projects = [];

  for (let i = 0; i <= 100; i++)
    projects.push({
      projecttitle: superHeroes.random(),
      createdby: users(),
      skills: randomskills(skillsarray),
    });

  console.log(projects);
  const result = await projectmodel.insertMany(projects);
  res.send(result);

};
exports.list = async (req, res) => {
  const result = await Project .aggregate([
    {
      $addFields: { "cats": 20 }
    },
    
  ]);
  res.json(result);
};