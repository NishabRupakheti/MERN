const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const protect = (req, res, next) => {
  // Extracting the token ..
  const authHead = req.headers["authorization"];
  const token = authHead && authHead.split(" ")[1];

  // checking if the token exist on the header ...
  if (!token) {
    return res.status(401).json({
      message: "No token found",
    });
  }

  try {
    // Jwt decodes the token with the secret key and calls the next middleware ...
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error(err);
    if (err.name == "TokenExpiredError") {
      return res.json({
        message: "Token is expired",
      });
    }
    res.status(401).json({
      message: "Token failed",
    });
  }
};

module.exports = protect;
