const mongoose = require("mongoose");
/* 
const studentSchema = new mongoose.Schema({
  registrationNumber : String,
  studentId : Number,
  studentName: String,
  studentProfileImageUrl : String,
  fatherOrGuardiian: String,
  emergencyContact: Number
})

const Student = mongoose.model("Student", studentSchema)
module.exports = Student;

 */

const studentSchema =  new mongoose.Schema({
  registrationNumber : String,
  studentId : Number,
  studentName : String,
  studentProfileUrl : String,
  faherOrGuardian : String,
  standard : String,
  emergencyContact : Number
})

const Student = mongoose.model("Student", studentSchema)

module.export = Student