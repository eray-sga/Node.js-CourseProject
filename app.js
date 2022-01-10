//önce npmden indirdiğim paketleri dahil ediyorum.
const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute")

const app = express();

//Connect DB
mongoose
  .connect('mongodb://localhost/eduproject-db')
  .then(() => {
    console.log('DB Connected Successfully');
  });

const port = 3000;

//Template Engine
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/", pageRoute);
app.use("/courses", courseRoute);

app.listen(port, () => {
  console.log("sunucu çalışıyor");
});
