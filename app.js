require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require("./routes/index");

const app = express();
//explains to express to use ejs in views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// css
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
// tell server to use index router file
app.use("/", router);

const port = process.env.SERVER_PORT || 3003;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
