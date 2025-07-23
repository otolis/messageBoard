const express = require("express");
const path = require("path");
const router = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3002, () => {
  console.log("Server running on http://localhost:3002");
});
