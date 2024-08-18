const express = require("express");

const {
  getMessage,
  createMessage,
  deleteMessage,
} = require("../controllers/postControllers");

const router = express.Router();

router.get("/message", getMessage);
router.post("/message", createMessage);
router.delete("/message/:id", deleteMessage);

module.exports = router;
