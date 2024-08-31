const express = require("express");

const {
  getMessage,
  createMessage,
  deleteMessage,
  putMessage
} = require("../controllers/postControllers");

const router = express.Router();

router.get("/message", getMessage);
router.post("/message", createMessage);
router.delete("/message/:id", deleteMessage);

// this is the route setup .. 
router.put('/message',putMessage)


module.exports = router;
