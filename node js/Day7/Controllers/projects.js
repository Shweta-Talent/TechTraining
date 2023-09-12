const Project = require("../models/project");
const superHeroes = require("superheroes");
const { v4: uuidv4 } = require("uuid");

exports.createProjects = async (req, res) => {
  try {
    const projects = [];

    function generateRandomCoordinates() {
      const minLat = -90;
      const maxLat = 90;
      const minLng = -180;
      const maxLng = 180;

      const randomLat = Math.random() * (maxLat - minLat) + minLat;
      const randomLng = Math.random() * (maxLng - minLng) + minLng;

      return { latitude: randomLat, longitude: randomLng };
    }
    for (let i = 0; i <= 100; i++)
      projects.push({
        projectId: uuidv4(),
        projectTitle: superHeroes.random(),
        location: generateRandomCoordinates(),
      });
    res.json(projects);
    const agg = await Project.aggregate([
      {
        $limit: 2,
      },
    ]);
    res.json(agg);
    const addnew = await Project.aggregate([
      {
        $addFields: {
          _id: 2,
          student: "Ryan",
          homework: [5, 6, 5],
          quiz: [8, 8],
          extraCredit: 8,
        },
      },
    ]);
    // res.json(addnew);
    const result = await Project.insertMany(projects);
  } catch (error) {
    console.log(error);
  }
};
