
const express = require("express");
const router = express.Router();
const User = require('../db/user');
const Doctor = require('../db/doctor');
const Signup = require('../db/signup');

// register : 검사 신청 -> DB에 저장해두는 방식
// Bearer {{ token }} -> doctor_id, address, address_code, store_address
router.post("/unreg", function (req, res, next) {
    Doctor.findOne({doctor_id : req.body.token.doctor_id}, (err, doc) => {
        // test
        console.log("find doctor!");
        var s = new Signup({doctor_id : req.body.token.doctor_id,
            hospital_addr : req.body.token.address,
            address_code : req.body.token.address_code,
            store_address : req.body.token.store_address});
        
        s.save((err, sign) => {
            if (err) res.state(200).json({"status": "nok"});
            else if (sign) {
                res.state(200).json({"status": "ok", "message":sign});       
            }
        });
    });
});
 

module.exports = router;