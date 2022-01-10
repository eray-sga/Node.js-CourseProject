const express = require("express");

const app = express();

const port = 3000;

//Template Engine
app.set("view engine","ejs")

//middlewares
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.render("index", {
    page_name: "index"
  })
});

app.get("/about", (req, res) => {
  res.render("about", {
    page_name: "about"
  })
});

app.listen(port, () => {
  console.log("sunucu çalışıyor");
});
