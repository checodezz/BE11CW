const mongose = require("mongoose");

const xProfileSchema = new mongoose.schema({
  fullName : String,
  userName: String,
  bio: String, 
  profilePicUrl : String  ,
  followingCount : Number,
  followerCount : Number,
  companyName : String,
  location : String,
  portfolioUrl : String
})

const Profile = mongoose.model("Profile", xProfileSchema)

module.exports = Profile