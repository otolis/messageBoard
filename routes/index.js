const express = require("express");
const { message, allMessages } = require("../controllers/messageController");
const router = express.Router();
// getting the messages from db and renders base site
router.get("/", allMessages);
// render in /new the form for user input
router.get("/new", (req, res) => {
  res.render("form");
});
// saves in the db the new messages posted by the user and redirects user to base site
router.post("/new", message);

module.exports = router;
