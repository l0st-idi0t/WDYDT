import express from "express";
import path from "path";
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.redirect("/homepage.html");
});


app.use(express.static(path.resolve("public")));

console.log(`Server is running on http://localhost:${port}/`);
app.listen(port);
