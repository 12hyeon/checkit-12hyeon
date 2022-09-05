const express = require('express');
const userRouter = express.Router();
const request = require('request');
var bodyParser = require("body-parser");


userRouter.use(bodyParser.urlencoded({ extended: true }));
userRouter.use(bodyParser.json());

userRouter.get("/v3/test", (req, res) => {
    var options = {};
    request(options, function(error, response, body){
        if(error){
          console.log(error)
        }
        else {
            var obj = JSON.parse(body);
            console.log(obj);
            res.json({obj});
        }
      })
});

module.exports = userRouter;