
// This is an authentication controller .... all the logics related to the authentication is written here ... 

const jwt = require("jsonwebtoken");
const User = require("../db/models/userModel");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET

// registration logic ...
const registerUser = async (req, res) => {

  // take the user cred and stores them in the database ... 
  const { userName, password } = req.body;

  // check if the user already exist .. 
  try {
    const fetchuser = await User.findOne({ userName });
    if (fetchuser) {
      return res.json({
        message: "User already registered "
      })
    }
    // if not creates a new object instance of the model and saves it ... 
    const user = new User({
      userName,
      password, 
    });

    await user.save();
    return res.status(201).json({
      message: "User registered successful",
    });


  } catch (err) {
    console.error("Error counterd while registering" , err);
    res.send({
      message : err
    })
  }
};


// Login logic ..... 
const loginUser = async (req, res) => {
  try {
    // taking the cred from the frotend client ... 
    const { userName, password } = req.body;

    const findUser = await User.findOne({ userName });

    // if the user is found check if the provided password is correct .. generate token and send it back to client ..  
    if (findUser.password == password) {
      const token = jwt.sign(
        { userId: findUser._id, userName: findUser.userName },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({
        message : token
      });

      
    } else {
      res.status(400).json({
        message: "Not matched",
      });
    }
  } catch (err) {
    console.error("Cannot login the user ", err);
    res.status(500).json({
      message: err,
    });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
