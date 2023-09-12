const project = require("../models/project");
const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");

exports.talent = async (req, res) => {
  let {
    body: { latitude, longitude, userName, email },
  } = req;
  // console.log(latitude, longitude, userName, email);
  try {
    const user = await User.findOne({ email });
    if (user) throw Error("email exists");
    {
      const locationData = {
        type: "Point",
        coordinates: [Number(longitude), Number(latitude)],
      };
    }
    const newUser = new User({
      userId: uuidv4(),
      userName: userName,
      email: email,
      location: locationData,
    });

    const result = await newUser.save();
    console.log(result);
    if (!result) throw Error("Could not create user.");
    return res.json({ message: "user created", message: result });
  } catch (error) {
    return res.status(300).send({ Error: error });
  }
};

exports.nearByProjects = async (req, res) => {
  const meterRadius = Number(req.body.meterRadius);
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const distanceMeters = Number(meterRadius);

  const geoNear = {
    $geoNear: {
      near: {
        type: "Point",
        coordinates: [Number(longitude), Number(latitude)],
      },
      maxDistance: distanceMeters,
      spherical: true,
      distanceField: "distance",
    },
  };

  console.log(JSON.stringify(geoNear));
  const users = await project.aggregate([
    geoNear,
    {
      $project: {},
    },
    {
      $sort: {},
    },
  ]);
  console.log(users);
  res.json(users);
};
