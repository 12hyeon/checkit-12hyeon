
const express = require("express");
const router = express.Router();
const User = require('../db/user');
const Doctor = require('../db/doctor');

// register : 검사 신청 ?
// Bearer {{ token }} -> doctor_id, address, address_code, store_address
router.post("/unreg", function (req, res, next) {
    Doctor.findOne({email : req.body.token.email}, (err, usr) => {
     if (err) console.log(err);
     else {
        res.state(200).json({
            "success": {
                "statusCode": 200,
                "json": {
                    "status": "ok"
                }
            },
            "fail": {
                "statusCode": 200,
                "json": {
                    "stats": "nok",
                    "data": {
                        "message": "string"
                    }
                }
            }
        });
     }
    });
    // test
    console.log(usr);
 });
 

module.exports = router;