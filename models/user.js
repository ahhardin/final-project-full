const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserModuleProgressSchema = new Schema({
  mID: String,
  numberCompleted: Number,
  lessonsProgress: [{lID:String, percentComplete:Number, grade:Number}]
})

const UserSchema = new Schema({
  uID: String,
  name: String,
  email: String,
  moduleProgress: [UserModuleProgressSchema]
})

module.exports = mongoose.model('User', UserSchema)