import express from "express";
import path from "path";
import fs from "fs";
import https from "https";
import dotenv from "dotenv";

dotenv.config({});

const app = express();
const port = process.env.PORT;
const privateKey = fs.readFileSync('./certs/privkey.pem');
const certificate = fs.readFileSync('./certs/cert.pem');

app.use(express.static(path.resolve("public")));

app.use(function(request, response, next) {
  if (process.env.NODE_ENV != 'development' && !request.secure) {
    return response.redirect("https://" + request.headers.host + request.url);
  }
  next();
})

app.get("/", function (req, res) {
  res.redirect("/homepage.html");
});

console.log(`Server is running on port ${port}`);

https.createServer({
  key: privateKey,
  cert: certificate
}, app).listen(port);
