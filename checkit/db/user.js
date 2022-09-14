const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    email: {
      type: email,
      required: true
    },
    key: { // 패스워드
      type: String,
    },
    name: { 
      type: String,
    },
  },
  { versionKey: false }); // __v 제거

module.exports = mongoose.model('User', userSchema);