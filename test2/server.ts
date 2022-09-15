import app from "./app";
import * as mongoose from "mongoose";

var userRouter = require('./routes/user');
app.use('/user', userRouter);

const port = process.env.PORT
mongoose.connect(process.env.MONGODB).then(()=>{
  console.log('MongoDB Connected...');
}).catch((err)=>{
  console.log(err);
})


app.get("/", (req, res) => {
  res.json({msg:"app"});
});

/*
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log('app is listening on port'+port);
});
*/
app.listen(port, () => { 
  console.log('express server :' + port); 
})