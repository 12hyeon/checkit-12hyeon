const express = require("express");
const router = express.Router();
const User = require('../db/user');


// signup : email을 고유 아이디로 새로운 사용자 계정을 생성합니다
router.post("/reg", function (req, res, next) {
    var usr = new User(req.body);

    User.save(usr, (err, usr) => {
        if (err) console.log(err);
        else if (usr) res.status(200).json({msg:"signup 성공", data:usr});
        else res.status(400).json({msg:"signup 실패"});
    })

    res.state(200).json({
        "success": {
            "statusCode": 200,
            "json": {
                "status": "ok",
                "data": {
                    "token": "TODO: 사용자의 유니크한 id를 JWT token으로 만들어서 내려줍니다."
                }
            }
        },
        "duplicated": {
            "statusCode": 200,
            "json": {
                "status": "user_duplicate"
            }
        },
        "fail": {
            "statusCode": 200,
            "json": {
                "status": "nok"
            }
        }
    });
});


// withdrawal : 전달받은 token으로 사용자 계정을 조회하고 삭제합니다
// Bearer {{ token }} -> token: email로 가정
router.post("/unreg", function (req, res, next) {
   User.delete({email : req.body.token.email}, (err, usr) => {
    if (err) console.log(err);
    else {
        res.state(200).json({
            "ok": {
                "statusCode": 200,
                "json": {
                    "status": "ok"
                }
            }
        });
    }
   });
   // test
   console.log(usr);
});


module.exports = router;