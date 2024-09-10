// This is an authentication controller .... all the logics related to the authentication is written here ...

const jwt = require("jsonwebtoken");
const User = require("../db/models/userModel");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// registration logic ...
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  // check if the user already exist ..
  try {
    const fetchuser = await User.findOne({ email });
    if (fetchuser) {
      return res.status(409).json({
        message: "User already registered ",
      });
    }
    const user = new User({
      email,
      password,
    });

    await user.save();
    return res.status(201).json({
      message: "User registered successful",
    });
  } catch (err) {
    console.error("Error counterd while registering", err.errors);

    res.status(400).json({
      err,
    });
  }
};

// Login logic .....
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });

    if (!findUser)
      return res.status(400).json({
        message: "User not found",
      });

    if (findUser.password == password) {
      const token = jwt.sign(
        { userId: findUser._id, email: findUser.email },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({
        token: token,
      });
      
    } else {
      res.status(400).json({
        message: "Not matched",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  loginUser,
  registerUser,
};
