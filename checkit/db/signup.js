const mongoose = require('mongoose');

const signupSchema = mongoose.Schema(
  {
    doctor_id : { 
        type: String,
    },
    address : { 
        type: String,
    },
    address_code : { 
        type: String,
    },
    store_addres : { 
        type: String,
    },
  },
  { versionKey: false }); // __v 제거

module.exports = mongoose.model('Signup', signupSchema);