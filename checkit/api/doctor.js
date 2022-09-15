const express = require("express");
const router = express.Router();
const User = require('../db/user');
const Doctor = require('../db/doctor');
const Doctors = require('../db/doctors');

// doctorList : 로그인한 사용자에게만 의사 목록을 내려줍니다
// Bearer {{ token }} -> 사용자 정보 가정
router.get("/list", function (req, res, next) {
    var usr = new User(req.body.token);
    var msg = [];
    User.findOne({email : req.body.token.email}, (err, usr) => {
        if (err) console.log(err);
        else if (usr) {
            Doctors.find({}, (err, docs) => {
                if (err) console.log(err);
                else if (docs) {
                    for (var i=0; i<docs.length; i++) {
                        msg.push({"items": {
                                    "id": docs[i].doctor_id,
                                    "doctor_display_name": docs[i].doctor_display_name,
                                    "doctor_image_url": docs[i].doctor_image_url,
                                    "hospital_name": docs[i].hospital_name,
                                    "description": docs[i].description,
                                    "hospital_address": docs[i].hospital_address,
                                    "hospital_img": docs[i].hospital_img
                                }});
                    }
                }
                res.state(200).json({
                    "status": "ok",
                    "data": {
                        "doctors": {
                            "items": msg
                        }
                    }
                });
            });
        }
    });
});


// doctor : 로그인한 사용자에게만 의사의 상세 정보를 내려줍니다
// Bearer {{ token }} -> 사용자 정보 가정
router.get("/", function (req, res, next) {
    var usr = new User(req.body.token);
    var msg = [];

    User.findOne({email : req.body.token.email}, (err, usr) => {
        if (err) console.log(err);
        else if (usr) {
            Doctor.find({}, (err, docs) => {
                if (err) console.log(err);
                else if (docs) {
                    for (var i=0; i<docs.length; i++) {
                        msg.push({"available_hours": doc.available_hours,
                            "available_weekday": doc.available_weekday,
                            "description": doc.description,
                            "doctor_display_name": doc.doctor_display_name,
                            "doctor_image_url": doc.doctor_image_url,
                            "doctor_images": doc.doctor_images,
                            "doctor_tel": doc.doctor_tel,
                            "doctor_tel_kakao": doc.doctor_tel_kakao,
                            "hospital_addr": doc.hospital_addr,
                            "hospital_name":doc.hospital_name,
                            "lab_addr": doc.lab_addr,
                            "lab_name": doc.lab_name,
                            "lab_postal_code": doc.lab_postal_code,
                            "lab_receiver_name": doc.lab_receiver_name,
                            "lab_tel": doc.lab_tel,
                            "lat": doc.lat,
                            "lng":doc.lng,
                            //"open_hours": {"items": {}},
                            "professional_statement":doc.professional_statement,
                            "subjects": doc.subjects
                        });
                    }
                }
                res.state(200).json({
                    "json": {
                        "status": "ok",
                        "type": "array",
                        "doctor": {
                            "type": "object",
                            "property": msg
                        }
                    }
                });
            });
        }
    });
 });


module.exports = router;