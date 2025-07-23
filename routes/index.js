const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("getAllMessages");
});

router.delete("/", (req, res) => {
  console.log("delete");
});

router.patch("/", (req, res) => {
  console.log("edit");
});

router.get("/new", (req, res) => {
  console.log("getForm");
});

router.post("/new", (req, res) => {
  console.log("submitNewMessage");
});

module.exports = router;
