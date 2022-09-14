const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema(
  {
    doctor_id: { 
        type: String,
    },
    available_hours: { 
        type: String,
    },
    available_weekday: { 
        type: String,
    },
    description : { 
        type: String,
    },
    doctor_display_name : { 
        type: String,
    },
    doctor_image_url : { 
        type: String,
    },
    doctor_images : { 
        type: String,
    },
    doctor_tel : { 
        type: String,
    },
    hospital_addr : { 
        type: String,
    },
    hospital_name : { 
        type: String,
    },
    lab_addr : { 
        type: String,
    },
    lab_name : { 
        type: String,
    },
    lab_postal_code : { 
        type: String,
    },
    lab_receiver_name : { 
        type: String,
    },
    lab_tel : { 
        type: String,
    },
    lat : { 
        type: String,
    },
    lng : { 
        type: String,
    },
    professional_statement : { 
        type: String,
    },
    subjects : { 
        type: String,
    },
  },
  { versionKey: false }); // __v 제거

module.exports = mongoose.model('Doctor', doctorSchema);

/*
const doctor = {
    "doctor_id": "test",
    "available_hours": "언제든 가능합니다.",
    "available_weekday": "아무때나 진료 가능.",
    "description": "안녕하세요!?",
    "doctor_display_name": "윈터",
    "doctor_image_url": "https://photo.newsen.com/mphoto/2022/06/24/202206241807463510_1.jpg",
    "doctor_images": JSON.stringify([{ "type": 1, "url": "https://photo.newsen.com/mphoto/2022/06/24/202206241807463510_1.jpg" }]),
    "doctor_tel": "01023456789",
    "hospital_addr": "서울특별시 성동구 왕십리로 83-21 에스엠엔터테인먼트",
    "hospital_name": "SM 엔터테인먼트",
    "lab_addr": "서울특별시 성동구 왕십리로 83-21 에스엠엔터테인먼트",
    "lab_name": "SM 엔터테인먼트",
    "lab_postal_code": "123456",
    "lab_receiver_name": "윈터",
    "lab_tel": "01023456789",
    "lat": "37.5443766",
    "lng": "127.043793",
    "professional_statement": "음반, 기획",
    "subjects": "에스파"
}
*/