import express from "express";
import path from "path";
import fs from "fs";
import https from "https";
const app = express();
const port = 8080;
const privateKey = fs.readFileSync('./certs/privkey.pem');
const certificate = fs.readFileSync('./certs/cert.pem');

app.use(express.static(path.resolve("public")));

app.get("/", function (req, res) {
  res.redirect("/homepage.html");
});

console.log(`Server is running on port ${port}`);

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(port);
