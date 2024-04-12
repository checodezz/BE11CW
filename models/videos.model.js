const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: String,
  channelName: String,
  channelLogoUrl: String,
  viewsCount: Number,
  datePosted: Date,
  thumbnailImageUrl: String,
  videoDuration: Number,
});

const Video = mongoose.model("video", videoSchema);
module.export = Video;
