const express = require("express");
const router = express.Router();
const User = require('../db/user');


// signup : email을 고유 아이디로 새로운 사용자 계정을 생성합니다
router.post("/reg", function (req, res, next) {
    var usr = new User(req.body);

    User.findOne({email:req.body.email}, (err, usr) => {
        if (err) console.log(err);
        else if (usr) {
            res.state(200).json({"status": "user_duplicate"});
        }
        else {
            User.save(usr, (err, usr) => {
                if (err) res.state(200).json({"status": "nok"});
                else if (usr) {
                    res.state(200).json({"status": "ok",
                    "data": {
                        "token": "TODO: 사용자의 유니크한 id를 JWT token으로 만들어서 내려줍니다."
                    }});
                }
            });
        }
    });
});


// withdrawal : 전달받은 token으로 사용자 계정을 조회하고 삭제합니다
// Bearer {{ token }} -> token: email로 가정
router.post("/unreg", function (req, res, next) {
    User.findOne({email:req.body.email}, (err, usr) => {
        if (err) console.log(err);
        else if (usr) {
            usr.delete((err, usr) => {
                if (err) console.log(err);
                else if (usr) res.state(200).json({ "status": "ok"});
            });
        }
   });
});


module.exports = router;