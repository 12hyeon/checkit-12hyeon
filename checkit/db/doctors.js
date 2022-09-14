const mongoose = require('mongoose');

const doctorsSchema = mongoose.Schema(
  {
    id: { 
        type: String,
    },
    doctor_display_name : { 
        type: String,
    },
    doctor_image_url  : { 
        type: String,
    },
    hospital_name  : { 
        type: String,
    },
    hospital_address  : { 
        type: String,
    },
    description : { 
        type: String,
    },
    ospital_img : { 
        type: String,
    },
  },
  { versionKey: false }); // __v 제거

module.exports = mongoose.model('Doctors', doctorsSchema);

/*
const doctors = [
    {
        "id": "test",
        "doctor_display_name": "윈터",
        "doctor_image_url": "https://photo.newsen.com/mphoto/2022/06/24/202206241807463510_1.jpg",
        "hospital_name": "SM 엔터테인먼트",
        "hospital_address": "서울특별시 성동구 왕십리로 83-21 에스엠엔터테인먼트",
        "description": "안녕하세요!",
        "hospital_img": "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210809_254%2F1628490646641wLE0B_JPEG%2FOYFVJ_qgIB14KM3Zz8AIhJxF.jpg"
    }
];

*/