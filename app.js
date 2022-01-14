//önce npmden indirdiğim paketleri dahil ediyorum.
const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute")
const categoryRoute = require("./routes/categoryRoute")
const userRoute = require("./routes/userRoute")

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

//Global variable
global.userIN = null

//middlewares

app.use(express.static("public"));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(session({
  secret: 'my_keyboard_cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/eduproject-db' })
}))
app.use(flash());
app.use((req,res,next) => {
  res.locals.flashMessages = req.flash()
  next()
})
 
//session olup olmadığını tutuyor
app.use('*', (req, res, next) => {
  userIN = req.session.userID
  next()
})

app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

app.listen(port, () => {
  console.log("sunucu çalışıyor");
});
