import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config({});

const app = express();
const port = process.env.PORT;

app.use(express.static(path.resolve("public")));

app.get("/", function (req, res) {
  res.redirect("/homepage.html");
});

console.log(`Server is running on port ${port}`);

app.listen(port);
