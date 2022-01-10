//önce npmden indirdiğim paketleri dahil ediyorum.
const express = require('express');
const mongoose = require('mongoose')
const pageRoute = require('./routes/pageRoute');


const app = express();

//Connect DB
await mongoose.connect('mongodb://localhost/eduproject-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
    console.log('db connect Success');
});

const port = 3000;

//Template Engine
app.set("view engine","ejs")

//middlewares
app.use(express.static('public'))

app.use("/", pageRoute);


app.listen(port, () => {
  console.log("sunucu çalışıyor");
});
