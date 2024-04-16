const mongoose = require("mongoose");

/* const videoSchema = new mongoose.Schema({
  title: String,
  channelName: String,
  channelLogoUrl: String,
  viewsCount: Number,
  datePosted: Date,
  thumbnailImageUrl: String,
  videoDuration: Number,
});

const Video = mongoose.model("Video", videoSchema);
module.export = Video; */

const videoSchema = new mongoose.Schema({
  title : String,
  channelName : String,
  channelLogoUrl : String,
  viewsCount : Number,
  datePosted : Date,
  thumbnailImageUrl : String,
  videoDuration : Number
  }, {timestamps: true})

const Video = mongoose.model("Video", videoSchema)
module.export = Video