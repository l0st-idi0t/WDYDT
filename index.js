const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", function (req, res) {
  res.redirect("/homepage.html");
});

app.use(express.static(path.resolve(__dirname, "public")));

console.log(`Server is running on http://localhost:${port}/`);
app.listen(port);
