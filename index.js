const express = require("express")
const app = express()
const path = require("path")

app.get('/', function (req, res) {
  res.redirect("/homepage.html")
})

app.use(express.static(path.resolve(__dirname, "public")))

app.listen(3000);
