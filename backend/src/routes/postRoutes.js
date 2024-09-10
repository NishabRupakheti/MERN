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

router.get("/message", protect, getMessage);
router.post("/message", protect, createMessage);
router.delete("/message", protect, deleteMessage);
router.put("/message", protect, putMessage);

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
