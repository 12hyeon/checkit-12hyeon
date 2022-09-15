const express = require("express");
const router = express.Router();
const User = require('../db/user');

// signin
router.post("/login", function (req, res, next) {
    // req.body.email, req.body.key가 존재하는 경우
    var usr = new User(req.body);

    User.findOne({email : usr.email, key : usr.key}, (err, usr) => {
        if (err) res.state(200).json({"status": "nok"});
        else if (usr) {
            console.log(usr);
            res.state(200).json({ "status": "ok" //"token": "TODO: 사용자의 유니크한 id를 JWT token으로 만들어서 내려줘야 합니다."
            });
        }
        else res.state(200).json({"status": "no_user"});
    });
});

module.exports = router;