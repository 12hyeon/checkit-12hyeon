const express = require("express");
const router = express.Router();
const Doctor = require('../db/doctor');
const Doctors = require('../db/doctors');

// doctorList : 로그인한 사용자에게만 의사 목록을 내려줍니다
// Bearer {{ token }} -> 사용자 정보 가정
router.get("/list", function (req, res, next) {
    var usr = new User(req.body.token);

    User.findOne({email : req.body.token.email}, (err, usr) => {
     if (err) console.log(err);
     else if (usr) {
         res.state(200).json({
            "success": {
                "statusCode": 200,
                "json": {
                    "status": "ok",
                    "data": {
                        "doctors": {
                            "type": "array",
                            "items": {
                                "id": "string",
                                "doctor_display_name": "string",
                                "doctor_image_url": {
                                    "type": "string",
                                    "description": "이미지 주소"
                                },
                                "hospital_name": "string",
                                "hospital_address": "string",
                                "description": "string",
                                "hospital_img": {
                                    "type": "string",
                                    "description": "이미지 주소"
                                }
                            }
                        }
                    }
                }
            }
         });
     }
    });
    // test
    console.log(usr);
 });


// doctor : 로그인한 사용자에게만 의사의 상세 정보를 내려줍니다
// Bearer {{ token }} -> 사용자 정보 가정
router.get("/", function (req, res, next) {
    var usr = new User(req.body.token);

    User.findOne({email : req.body.token.email}, (err, usr) => {
     if (err) console.log(err);
     else if (usr) {
         res.state(200).json({
            "success": {
                "statusCode": 200,
                "json": {
                    "status": "ok",
                    "type": "array",
                    "doctor": {
                        "type": "object",
                        "property": {
                            "available_hours": "string",
                            "available_weekday": "string",
                            "description": "string",
                            "doctor_display_name": "",
                            "doctor_image_url": {
                                "type": "string",
                                "description": "이미지 주소"
                            },
                            "doctor_images": {
                                "type": "array",
                                "items": {
                                    "url": "string"
                                }
                            },
                            "doctor_tel": "string",
                            "doctor_tel_kakao": "string",
                            "hospital_addr": "string",
                            "hospital_name": "string",
                            "lab_addr": "string",
                            "lab_name": "string",
                            "lab_postal_code": "string",
                            "lab_receiver_name": "string",
                            "lab_tel": "string",
                            "lat": "string",
                            "lng": "string",
                            "open_hours": {
                                "type": "array",
                                "items": {

                                }
                            },
                            "professional_statement": "string",
                            "subjects": "string"
                        }
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