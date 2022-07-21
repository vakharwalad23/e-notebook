const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
   name:{
    type: String,
    required: true
   },
   email:{
    type: String,
    required: true,
    unique: true
   },
   birthdate:{
    type: String,
    required: true
   },
   mobileno:{
    type: Number,
    required: true,
    unique: true
   },
   bio:{
    type: String,
    required: true
   },
   gender:{
    type: String,
    required: true
   },
   password:{
    type: String,
    required: true
   },
   date:{
    type: Date,
    default: Date.now
   }
  });
  const User = mongoose.model('user', UserSchema);
  module.exports = User;