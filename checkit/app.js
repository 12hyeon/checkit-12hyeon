var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
const PORT = 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var userRouter = require('./api/user');
app.use('/v3/user', userRouter);
var authRouter = require('./api/auth');
app.use('/v3/auth', authRouter);
var doctorRouter = require('./api/doctor');
app.use('/v3/doctor', doctorRouter);


app.get('/', function(req, res, next) {
  res.status(200).json({title: 'Checkit' });
});

// test
router.get("/test", function (req, res, next) {
  res.state(200).json({
      "ok": {
          "statusCode": 200,
          "data": {}
      }
  });
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

const mongoose=require('mongoose');
mongoose.connect
('mongodb+srv://id:pw@checkit.mydpwcy.mongodb.net/test')
.then(()=>{
    console.log('MongoDB Connected...');
}).catch((err)=>{
    console.log(err);
})

app.get('/', (req, res)=>{
    res.send('Hello world!');
});


// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://user:1234@checkit.mydpwcy.mongodb.net/?retryWrites=true&w=majority')
//   .then(() => console.log('MongoDB conected'))
//   .catch((err) => {
//     console.log(err);
//   });
//app.listen(PORT, () => console.log(`server is running ${PORT}`));

module.exports = app;
