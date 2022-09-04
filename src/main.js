require('dotenv').config();

const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

const port = 3000
mongoose.connect(process.env.mongodb_srv).then(()=>{
  console.log('MongoDB Connected...');
}).catch((err)=>{
  console.log(err);
})


app.get("/", (req, res) => {
  res.json({msg:"app"});
});


app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log('app is listening on port'+port);
});
