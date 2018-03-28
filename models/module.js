const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ModuleSchema = new Schema({
  mID: String,
  name: String,
  content: String,
  lessons: [{lID:String, name:String, content:String}]
})

module.exports = mongoose.model('Module', ModuleSchema)