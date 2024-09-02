const express = require("express");

const {
  getMessage,
  createMessage,
  deleteMessage,
  putMessage,
} = require("../controllers/postControllers");

const { loginUser, registerUser } = require("../controllers/authentication");
const protect = require("../middlewares/authmiddleware");

const router = express.Router();

router.get("/message", getMessage);
router.post("/message", createMessage);
router.delete("/message/:id", deleteMessage);

// this is the route setup ..
router.put("/message", putMessage);

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
